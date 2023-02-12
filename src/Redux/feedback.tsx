import { createSlice } from '@reduxjs/toolkit';
import { CommentType } from 'Components/Comments';
import { ratesData } from 'Constants';
import { RootState } from './store';

export const feedbackSlice = createSlice({
 name: 'feedback',
 initialState: {
  reviews:  [] as CommentType[],
  totalChartRates: ratesData,
 },
 reducers: {
  postFeedback: (state, action) => {
   const result: any = [action.payload, ...state.reviews];
   state.reviews = result;
  },
  postChartRates: (state, action) => {
   state.totalChartRates = action.payload;
  },
 },
});
export const { postFeedback, postChartRates } = feedbackSlice.actions;

export default feedbackSlice.reducer;
export const selectCount = (state: RootState) => state.Feedback;
