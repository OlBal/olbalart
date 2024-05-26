import { SHEETS_API_KEY } from 'src/config';

export const environment = {
  googleSheets: `https://sheets.googleapis.com/v4/spreadsheets/1s9FXiBfmtBzFsSEVQeS-0XEkUewSCsuXqNmgmB0OmA8/values/<worksheet_name>?key=${SHEETS_API_KEY}`,
};
