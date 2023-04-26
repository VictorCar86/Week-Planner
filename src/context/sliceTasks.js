import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

export const sliceTasks = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
        fetching: false,
        error: false,
    },
    reducers: {
        requestTasks: (state) => {
            state.error = false;
            state.fetching = true;
        },
        resultTasks: (state, action) => {
            state.tasks = action.payload;
            state.fetching = false;
        },
        errorTasks: (state) => {
            state.error = true;
            state.fetching = false;
        }
    }
})

export const tasksState = (state) => state.sliceTasks;
export const { requestTasks, resultTasks, errorTasks } = sliceTasks.actions;
export default sliceTasks.reducer;


// Fetch Methods


const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const dispatcher = useDispatch();

async function GET(goalId) {
    const options = {
        method: 'GET',
        headers: { 'content-type': 'application/json' },
    };

    try {
        dispatcher(requestTasks());

        const response = await fetch(`${BACKEND_URL}/api/v1/tasks/goal/${goalId}`, options)
        const jsonResponse = await response.json();

        dispatcher(resultTasks(jsonResponse));
    }
    catch (err) {
        console.error(err);
        dispatcher(errorTasks());
    }
}

async function POST(config) {
    const options = {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(config.body),
    };

    try {
        const response = await fetch(`${BACKEND_URL}/api/v1/tasks`, options);
        const jsonResponse = await response.json();

        if (jsonResponse.error) throw jsonResponse.message;

        if (config.onSuccess){
            config.onSuccess();
        }
    }
    catch (err) {
        if (config.onError){
            config.onError(err);
        }
    }
}

export const fetchTasks = { POST };