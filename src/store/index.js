import { createStore } from "redux";

const initialState = {
    counter: 0
}

const reducerFn = (state = initialState, action) => {
    if (action.type === 'INC') {
        return { counter: state.counter + 1 };
    }
    if (action.type === 'DEC') {
        return { counter: state.counter - 1 };
    }
    return state;
}

const store = createStore(reducerFn);
export default store;