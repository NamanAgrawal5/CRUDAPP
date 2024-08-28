import { TASKS_CREATE_FAIL, TASKS_CREATE_REQUEST, TASKS_CREATE_SUCCESS, TASKS_LIST_FAIL, TASKS_LIST_REQUEST, TASKS_LIST_SUCCESS } from "../constants/tasksConstants";

export const taskListReducer = (state = { tasks: [] }, action) => {
    switch (action.type) {
        case TASKS_LIST_REQUEST:
            return { loading: true, tasks: [] };
        case TASKS_LIST_SUCCESS:
            return { loading: false, tasks: action.payload };
        case TASKS_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const taskCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case TASKS_CREATE_REQUEST:
            return { loading: true };
        case TASKS_CREATE_SUCCESS:
            return { loading: false, success: true, task: action.payload };
        case TASKS_CREATE_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};