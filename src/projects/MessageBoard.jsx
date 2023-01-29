import 'styles/projects/MessageBoard.scss';
import { DateTime } from 'luxon';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { timeAgo } from 'utils/utils';
import SettingsIcon from '@mui/icons-material/Settings';
import SendIcon from '@mui/icons-material/Send';
import SaveIcon from '@mui/icons-material/Save';
import { Modal } from '@mui/material';
import { useForm } from 'react-hook-form';
import TextareaAutosize from 'react-autosize-textarea';
const BadWordFilter = require('bad-words');

const { GoogleSpreadsheet } = require('google-spreadsheet');

/**
 *
 */
const doc = new GoogleSpreadsheet(process.env.REACT_APP_GOOGLE_SHEET_ID);

const colorMap = {
  white: 'white',
  red: '#EA2B1F',
  orange: '#FF8811',
  yellow: '#FFC600',
  green: '#329F5B',
  blue: '#2EC0F9',
  purple: '#A882DD',
  pink: '#FCB5B5',
};

const MessageBoard = () => {
  const censor = useMemo(() => new BadWordFilter(), []);

  const messagesEndRef = useRef(null);
  const scrollToBottom = () => messagesEndRef.current?.scrollIntoView();

  const [myRows, setMyRows] = useState([]);
  const [userColor, setUserColor] = useState(localStorage.getItem('userColor') || 'white');
  const [sheet, setSheet] = useState();
  const [currUsername, setCurrUsername] = useState(
    localStorage.getItem('username') || `new-user-${Math.floor(Math.random() * 1000)}`
  );

  // For each thing you should create a new item which you can make into a thingy.
  // How are you gonna keep track of them? You could use the github API but you have to actually
  // authorize github right? To have an account.
  // Can you just have a little text file which gets written to?
  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      username: currUsername,
      userColor: userColor,
    },
  });

  const selectedColor = watch('userColor');

  const [message, setMessage] = useState('');
  const [settingsOpen, setSettingsOpen] = useState(false);
  const openSettings = () => setSettingsOpen(true);
  const closeSettings = () => setSettingsOpen(false);

  const fetcharoo = useCallback(async () => {
    if (!sheet) return;

    const rows = await sheet.getRows();
    setMyRows(rows);
  }, [sheet]);

  const changeSheet = useCallback((idx = 0) => {
    setSheet(doc.sheetsByIndex[idx]);
  }, []);

  const toTimeAgo = timeInSecs => {
    const dateTime = DateTime.fromSeconds(Number(timeInSecs));
    return timeAgo(dateTime);
  };

  const addRow = useCallback(async () => {
    if (!message.length) return;

    const content = censor.clean(message);
    setMessage('');
    const parent = 0;
    const username = currUsername;
    const timestamp = Math.floor(Date.now() / 1000);
    const rowNumber = 'FoobarrowNumber';

    const newRow = await sheet.addRow({ content, parent, timestamp, username, rowNumber, userColor }, { insert: true });
    if (newRow) {
      setMyRows(prev => [...prev, newRow]);
      scrollToBottom();
    } else {
      console.error(newRow, 'problem adding row');
    }
  }, [sheet, message, currUsername, userColor, censor]);

  // when sheet changes, get its rows.
  useEffect(() => {
    fetcharoo();
    const msgIntv = setInterval(() => {
      fetcharoo();
    }, 5000);
    return () => clearInterval(msgIntv);
  }, [fetcharoo]);

  useEffect(() => {
    (async () => {
      await doc.useServiceAccountAuth({
        client_email: process.env.REACT_APP_GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.REACT_APP_GOOGLE_PRIVATE_KEY.replace(/\\n/gm, '\n'),
      });
      await doc.getInfo();
      changeSheet(0);
    })();
  }, []);

  const onFormSubmit = ({ username, userColor }) => {
    if (!censor.isProfane(username)) {
      setCurrUsername(username);
      localStorage.setItem('username', username);
    }
    setUserColor(userColor);
    localStorage.setItem('userColor', userColor);
    closeSettings();
  };

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!myRows.length || loaded) return;

    setLoaded(true);
    scrollToBottom();
  }, [loaded, myRows]);

  return (
    <div id="MessageBoard">
      <Modal open={settingsOpen} onClose={closeSettings}>
        <div id="messageboard-modal-inner">
          <form onSubmit={handleSubmit(onFormSubmit, errors => console.error(errors))}>
            <label htmlFor="username">User Name</label>
            <input
              defaultValue={currUsername}
              type="text"
              id="username"
              name="username"
              required
              {...register('username')}
              style={{
                color: colorMap[selectedColor],
              }}
            />
            <div className="userColors">
              {Object.keys(colorMap).map(color => {
                return (
                  <label key={color}>
                    <div className="color-box" style={{ backgroundColor: colorMap[color] }} />
                    <input
                      {...register('userColor')}
                      type="radio"
                      value={color}
                      name="userColor"
                      id={`userColor-${color}`}
                    />
                  </label>
                );
              })}
            </div>

            <button type="submit">
              <SaveIcon />
            </button>
          </form>
        </div>
      </Modal>

      <div className="messageboard-list-outer">
        <ul className="messageboard-list">
          {myRows.map(({ userColor: thisUserColor, content, timestamp, username, rowNumber }, idx) => {
            // ref only for last item.
            return (
              <li
                ref={idx === myRows.length - 1 ? messagesEndRef : null}
                key={rowNumber}
                style={{ position: 'relative' }}
              >
                <div>
                  <span className="name" style={{ color: colorMap[thisUserColor] }}>
                    {username}
                  </span>
                  <span className="time">{+timestamp ? toTimeAgo(timestamp) : '---'}</span>
                </div>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="input-section">
        <button className="settings-button" onClick={openSettings}>
          <SettingsIcon />
        </button>

        <TextareaAutosize
          onResize={e => {}}
          type="text"
          id="message"
          name="message"
          value={message}
          onChange={e => setMessage(e.target.value)}
          onKeyDown={e => e.metaKey && e.key === 'Enter' && addRow()}
        />
        <button className={`send-button ${message.length === 0 ? 'disabled' : ''}`} onClick={addRow}>
          <SendIcon />
        </button>
      </div>
    </div>
  );
};

export default MessageBoard;
