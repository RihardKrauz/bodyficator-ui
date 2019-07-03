import { CHANGE_CURRENT_USER } from './actions';
import { STORAGE_KEYS } from '../utils/storage';

const onChangeCurrentUserSetInStoreAction = store => next => action => {
    if (action.type === CHANGE_CURRENT_USER) {
        localStorage.setItem(STORAGE_KEYS.CURRENT_USER, action.payload);
    }

    return next(action);
};

export default [onChangeCurrentUserSetInStoreAction];
