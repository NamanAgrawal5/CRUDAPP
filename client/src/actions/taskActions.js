import axios from 'axios';
import { TASKS_LIST_FAIL, TASKS_LIST_REQUEST, TASKS_LIST_SUCCESS } from '../constants/tasksConstants';

export const getTasks = () => async (dispatch, getState) => {
    try{
        dispatch({ type: TASKS_LIST_REQUEST });
        const {
            userLogin: { userInfo },
        } = getState();
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`,
            },
        };
        const { data } = await axios.get('/api/v1/tasks', config);

        dispatch({
            type: TASKS_LIST_SUCCESS,
            payload: data,
        });
    } catch(error){
      const message = error.response && error.response.data.message ? error.response.data.message : error.message;
      dispatch({
          type: TASKS_LIST_FAIL,
          payload: message,
      });   
    }
}

export const createTask = (title,content,category) => async (dispatch, getState) => {
    try{
        dispatch({ type: TASKS_LIST_REQUEST });
        const {
            userLogin: { userInfo },
        } = getState();

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`,
            },
        };
        const { data } = await axios.post('/api/v1/tasks/create', {title,content,category}, config);
        dispatch({
            type: TASKS_LIST_SUCCESS,
            payload: data,
        });
    } catch(error){
        const message = error.response && error.response.data.message ? error.response.data.message : error.message;
        dispatch({
            type: TASKS_LIST_FAIL,
            payload: message,
        });
    }
}

