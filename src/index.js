import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme= createTheme ({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#79bb52',
    },
    text: {
      primary: '#cec5c5',
    },
    error: {
      main: '#f72010',
    },
    warning: {
      main: '#d4963a',
    },
    success: {
      main: '#5eaa60',
    },
    info: {
      main: '#83cff1',
    },
    divider: 'rgba(189,168,33,0.12)',
    background: {
      default: '#d61c1c',
    },
  },
  typography: {
    fontFamily: 'Poppins',
    fontSize: 18,
    fontWeightRegular: 300,
    htmlFontSize: 18,
    button: {
      fontFamily: 'Poppins',
      fontSize: 16,
      fontWeight: 100,
      lineHeight: 1.5,
    },
    overline: {
      fontFamily: 'Raleway',
    },
    body1: {
      fontSize: 18,
      fontWeight: 100,
    },
    body2: {
      fontSize: 18,
      fontWeight: 100,
      lineHeight: 1.5,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CssBaseline>
      <ThemeProvider theme = {theme}>
        <App />
      </ThemeProvider>
    </CssBaseline>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
