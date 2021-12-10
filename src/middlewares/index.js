//打印每一次的action和处理之后的state
export const logger = ({getState, dispatch}) => next => action =>{
    console.group(action.type);
    console.log(action);
    const result = next(action);
    console.log("---------------------------- ")
    console.log( getState());
    console.groupEnd();
    return result
}