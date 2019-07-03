export const START_LOADING = 'START_LOADING';
export const END_LOADING = 'END_LOADING';
export const CHANGE_CURRENT_USER = 'CHANGE_CURRENT_USER';

export const changeCurrentUser = payload => ({ type: CHANGE_CURRENT_USER, payload });
export const startLoading = payload => ({ type: START_LOADING });
export const endLoading = payload => ({ type: END_LOADING });