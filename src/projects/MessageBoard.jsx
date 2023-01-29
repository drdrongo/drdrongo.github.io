import 'styles/projects/MessageBoard.scss';
import { DateTime } from 'luxon';
import { useCallback, useEffect, useRef, useState } from 'react';
import { timeAgo } from 'utils/utils';
import SettingsIcon from '@mui/icons-material/Settings';
import SendIcon from '@mui/icons-material/Send';
import SaveIcon from '@mui/icons-material/Save';
import { Modal } from '@mui/material';
import { useForm } from 'react-hook-form';
import TextareaAutosize from 'react-autosize-textarea';
import ColorPicker from './ColorPicker';

const { GoogleSpreadsheet } = require('google-spreadsheet');

/**
 *
 */
const doc = new GoogleSpreadsheet(process.env.REACT_APP_GOOGLE_SHEET_ID);

const MessageBoard = () => {
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => messagesEndRef.current?.scrollIntoView();

  // For each thing you should create a new item which you can make into a thingy.
  // How are you gonna keep track of them? You could use the github API but you have to actually
  // authorize github right? To have an account.
  // Can you just have a little text file which gets written to?
  const { register, handleSubmit } = useForm();

  const [myRows, setMyRows] = useState([]);
  const [sheet, setSheet] = useState();
  const [currUsername, setCurrUsername] = useState(
    localStorage.getItem('username') || `new-user-${Math.floor(Math.random() * 1000)}`
  );
  const [message, setMessage] = useState('');
  const [settingsOpen, setSettingsOpen] = useState(false);
  const openSettings = () => setSettingsOpen(true);
  const closeSettings = () => setSettingsOpen(false);

  const fetcharoo = useCallback(async () => {
    const rows = await sheet.getRows();
    setMyRows(rows);
  }, [sheet]);

  const changeSheet = useCallback((idx = 0) => {
    setSheet(doc.sheetsByIndex[idx]);
  }, []);

  const editRow = () => {
    // const row_value = rows[0][id];
    // rows[0][id] = Number(row_value) + 1;
    // await rows[0].save();
  };

  const toTimeAgo = timeInSecs => {
    const dateTime = DateTime.fromSeconds(Number(timeInSecs));
    return timeAgo(dateTime);
  };

  const addRow = useCallback(async () => {
    if (!message.length) return;

    const content = message;
    setMessage('');
    const parent = 0;
    const username = currUsername;
    const timestamp = Math.floor(Date.now() / 1000);
    const rowNumber = 'FoobarrowNumber';

    const newRow = await sheet.addRow({ content, parent, timestamp, username, rowNumber }, { insert: true });
    if (newRow) {
      setMyRows(prev => [...prev, newRow]);
    } else {
      console.error(newRow, 'problem adding row');
    }
  }, [sheet, message, currUsername]);

  // when sheet changes, get its rows.
  useEffect(() => {
    sheet && fetcharoo();
  }, [sheet, fetcharoo]);

  useEffect(() => {
    scrollToBottom();
  }, [myRows]);

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

  const onFormSubmit = data => {
    setCurrUsername(data.username);
    localStorage.setItem('username', data.username);
    closeSettings();
  };

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
            />
            <ColorPicker />
            <button type="submit">
              <SaveIcon />
            </button>
          </form>
        </div>
      </Modal>

      <div className="messageboard-list-outer">
        <ul className="messageboard-list">
          {myRows.map(({ content, timestamp, username, rowNumber }, idx) => {
            // ref only for last item.
            return (
              <li
                ref={idx === myRows.length - 1 ? messagesEndRef : null}
                key={rowNumber}
                style={{ position: 'relative' }}
              >
                <div>
                  <span className="name">{username}</span>
                  <span className="time">{toTimeAgo(timestamp)}</span>
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
        <button
          className="send-button"
          onClick={addRow}
          style={{
            ...(message.length ? { border: '1px solid rgba(255,255,255,0.7)', cursor: 'pointer' } : {}),
          }}
        >
          <SendIcon />
        </button>
      </div>
    </div>
  );
};

export default MessageBoard;
