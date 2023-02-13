import React, { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';

import type { RenderOptions } from '@testing-library/react';
import type { PreloadedState } from '@reduxjs/toolkit';

import { AppStore, RootState, setupStore } from 'Redux/store';
import Feedback from 'Redux/feedback';
import { ratesData } from 'Constants';
import App from 'App';

export const initialState: any = {
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

export const testStore = configureStore({ reducer: { Feedback } });

export const mainAppRender = () =>
 render(
  <Provider store={testStore}>
   <BrowserRouter>
    <App />
   </BrowserRouter>
  </Provider>
 );

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
 preloadedState?: PreloadedState<RootState>;
 store?: AppStore;
}

export const renderWithProviders = (
 ui: React.ReactElement,
 {
  preloadedState = {},
  // Automatically create a store instance if no store was passed in
  store = setupStore(preloadedState),
  ...renderOptions
 }: ExtendedRenderOptions = {}
) => {
 const Wrapper = ({ children }: PropsWithChildren<{}>): JSX.Element => {
  return <Provider store={store}>{children}</Provider>;
 };

 return render(ui, { wrapper: Wrapper, ...renderOptions });
};
