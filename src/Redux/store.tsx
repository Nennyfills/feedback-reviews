import { combineReducers, configureStore } from '@reduxjs/toolkit';
import type { PreloadedState } from '@reduxjs/toolkit';

import Feedback from './feedback';

const rootReducer = combineReducers({ Feedback });

export const setupStore = (preloadedState?: PreloadedState<RootState>) =>
 configureStore({
  reducer: rootReducer,
  preloadedState,
 });

export default setupStore;

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
