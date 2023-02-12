import { Provider } from 'react-redux';
import { BrowserRouter,} from 'react-router-dom';
import { render } from '@testing-library/react';
import { configureStore as mainStore } from '@reduxjs/toolkit';

import { feedbackSlice } from 'Redux/feedback';
import { ratesData } from 'Constants';

import App from 'App';


const initialState: any = {
 totalChartRates: ratesData,
 reviews: [
  {
   email: 'test@test.com',
   rate: 5,
   comment: 'Nice place to go',
   name: 'test test',
  },
 ],
};

export const store = mainStore({
 reducer: feedbackSlice.reducer,
 totalChartRates: ratesData,
 ...initialState,
});

export const mainAppRender = () =>
 render(
  <Provider store={store}>
   <BrowserRouter>
    <App />
   </BrowserRouter>
  </Provider>
 );

export const withOnlyRedux = (children: JSX.Element, store: any) =>
 render(
  <BrowserRouter>
   <Provider store={store}>{children}</Provider>{' '}
  </BrowserRouter>
 );
