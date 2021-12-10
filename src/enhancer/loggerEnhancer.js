import {createStore} from "redux";

const loggerEnhancer = createStore => (...args) => {
    const store = createStore(...args);
    const dispatch = (action) => {
        console.group(action.type);
        console.log("dispatching: ", action);
        const result = store.dispatch(action);
        console.log('next State: ', store.getState());
        console.groupEnd();
        return result;
    }

    return {...store, dispatch}
};

export default loggerEnhancer;