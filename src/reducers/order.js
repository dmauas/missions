import { handleActions } from 'redux-actions';
import { updateOrderDetails, createRequestFulfilled } from '../actions';

const defaultState = {
  state: 'draft',
  pickup: undefined,
  dropoff: undefined,
  requested_pickup_time: undefined,
  size: 'letter',
  weight: '500',
};

export default handleActions({

  [updateOrderDetails]: (state, { payload: { details } }) => {
    return {...state, ...details};
  },

  [createRequestFulfilled]: (state, {payload: details}) => {
    return {...state, ...details, state: 'searching'};
  }

}, defaultState);