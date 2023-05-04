import { createSlice } from "@reduxjs/toolkit";

export const sliceGoals = createSlice({
    name: 'goals',
    initialState: {
        goals: [],
        fetching: false,
        error: false,
    },
    reducers: {
        requestGoals: (state) => {
            state.error = false;
            state.fetching = true;
        },
        resultGoals: (state, action) => {
            state.goals = action.payload;
            state.fetching = false;
        },
        errorGoals: (state) => {
            state.error = true;
            state.fetching = false;
        }
    }
})

export const goalsState = (state) => state.sliceGoals;
export const { requestGoals, resultGoals, errorGoals } = sliceGoals.actions;
export default sliceGoals.reducer;


// Fetch Methods


const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

async function GET(/*goalId,*/ dispatch) {
    const options = {
        method: 'GET',
        headers: { 'content-type': 'application/json' },
    };

    try {
        dispatch(requestGoals());

        const response = await fetch(`${BACKEND_URL}/api/v1/goals`, options)
        const jsonResponse = await response.json();

        dispatch(resultGoals(jsonResponse));
    }
    catch (err) {
        console.error(err);
        dispatch(errorGoals());
    }
}

async function POST(config) {
    const options = {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(config.body),
    };

    try {
        const response = await fetch(`${BACKEND_URL}/api/v1/goals`, options);
        const jsonResponse = await response.json();

        if (jsonResponse.error) throw jsonResponse.message;

        if (config.onSuccess) config.onSuccess(jsonResponse);
    }
    catch (err) {
        if (config.onError) config.onError(err);
    }
    finally {
        if (config.finally) config.finally();
    }
}

async function DELETE(config) {
    const options = {
        method: 'DELETE',
        headers: { 'content-type': 'application/json' },
    };

    try {
        const response = await fetch(`${BACKEND_URL}/api/v1/goals/${config.goalId}`, options);
        const jsonResponse = await response.json();

        if (jsonResponse.error) throw jsonResponse.message;

        if (config.onSuccess) config.onSuccess(jsonResponse);
    }
    catch (err) {
        if (config.onError) config.onError(err);
    }
    finally {
        if (config.finally) config.finally();
    }
}

export const fetchGoals = { GET, POST, DELETE };