import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';

import reportWebVitals from './reportWebVitals';
import 'Assets/Styles/index.scss';
import App from './App';
import store from './Redux/store';

const root = ReactDOM.createRoot(
 document.getElementById('root') as HTMLElement
);

root.render(
 <StrictMode>
  <ReduxProvider store={store()}>
   <BrowserRouter>
    <App />
   </BrowserRouter>
  </ReduxProvider>
 </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
