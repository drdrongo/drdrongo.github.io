import 'styles/projects/MessageBoard.scss';
import axios from 'axios';
import { DateTime } from 'luxon';
import { useCallback, useEffect, useState } from 'react';
import { timeAgo } from 'utils/utils';
import SettingsIcon from '@mui/icons-material/Settings';
import { Modal } from '@mui/material';
import { useForm } from 'react-hook-form';

// import { sheets_v4 } from '@googleapis/sheets';
// import GoogleSpreadsheet from 'google-spreadsheet';

const { GoogleSpreadsheet } = require('google-spreadsheet');

// async function authorize() {
//   // TODO: Change placeholder below to generate authentication credentials. See
//   // https://developers.google.com/sheets/quickstart/nodejs#step_3_set_up_the_sample
//   //
//   // Authorize using one of the following scopes:
//   //   'https://www.googleapis.com/auth/drive'
//   //   'https://www.googleapis.com/auth/drive.file'
//   //   'https://www.googleapis.com/auth/spreadsheets'
//   let authClient = null;

//   if (authClient == null) {
//     throw Error('authentication failed');
//   }

//   return authClient;
// }

// // yarn add googleapis@105 @google-cloud/local-auth@2.1.0

// async function main () {
//   const authClient = await authorize();
//   const request = {
//     // The ID of the spreadsheet to update.
//     spreadsheetId: 'my-spreadsheet-id',  // TODO: Update placeholder value.

//     // The A1 notation of a range to search for a logical table of data.
//     // Values are appended after the last row of the table.
//     range: 'my-range',  // TODO: Update placeholder value.

//     // How the input data should be interpreted.
//     valueInputOption: '',  // TODO: Update placeholder value.

//     // How the input data should be inserted.
//     insertDataOption: '',  // TODO: Update placeholder value.

//     resource: {
//       // TODO: Add desired properties to the request body.
//     },

//     auth: authClient,
//   };

//   try {
//     const response = (await sheets_v4.spreadsheets.values.append(request)).data;
//     // TODO: Change code below to process the `response` object:
//     console.log(JSON.stringify(response, null, 2));
//   } catch (err) {
//     console.error(err);
//   }
// }
// main();

// const rows = await sheet.getRows();
// const raw_data = rows[1]._rawData;
// const header_values = rows[1]._sheet.headerValues;

/**
 *
 */
const doc = new GoogleSpreadsheet(process.env.REACT_APP_GOOGLE_SHEET_ID);

const MessageBoard = () => {
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
    const content = message;
    const parent = 0;
    const username = currUsername;
    const timestamp = Math.floor(Date.now() / 1000);
    const rowNumber = 'FoobarrowNumber';

    const newRow = await sheet.addRow({ content, parent, timestamp, username, rowNumber }, { insert: true });
    if (newRow) {
      setMyRows(prev => [...prev, newRow]);
      setMessage('');
    } else {
      console.error(newRow, 'problem adding row');
    }
  }, [sheet, message, currUsername]);

  // when sheet changes, get its rows.
  useEffect(() => {
    sheet && fetcharoo();
  }, [sheet, fetcharoo]);

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
            <button type="submit">Save</button>
          </form>
        </div>
      </Modal>

      <div className="messageboard-list-outer">
        <ul className="messageboard-list">
          {myRows.map(({ content, timestamp, username, rowNumber }) => {
            return (
              <li key={rowNumber}>
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
        <button onClick={openSettings}>
          <SettingsIcon />
        </button>

        <input
          type="text"
          id="message"
          name="message"
          value={message}
          onChange={e => setMessage(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && addRow()}
        />
        <button onClick={addRow}>Send</button>
      </div>
    </div>
  );
};

export default MessageBoard;
