import {legacy_createStore as createStore, combineReducers, applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk';
import { userLoginReducer, userRegisterReducer,  } from './reducers/userReducers';
import { taskCreateReducer, taskListReducer } from './reducers/tasksReducers';
const reducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    taskList: taskListReducer,
    taskCreate: taskCreateReducer,
});
const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;
const initialState = {
    userLogin: {userInfo: userInfoFromStorage}
};
const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    applyMiddleware(...middleware)
);
export default store;