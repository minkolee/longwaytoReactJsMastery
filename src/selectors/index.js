export const getText = (state) => state.get("text");

export const getFilter = (state) => state.get("filter");

export const getVisibleTodos = (state) => {

    // 按照从外到内的属性顺序获取嵌套的属性，data位于state-todos-data中，数组就是从内到外属性的名称
    const data = state.getIn(['todos', 'data']);
    const filter = state.get("filter");
    // const {todos, filter} = state;

    switch (filter) {
        case 'all':
            return data;

        case 'active':
            return data.filter(item => !item.get("completed"));
        case 'completed':
            return data.filter(item => item.get("completed"));
        default:
            return new Error("Unknown filter:" + filter);
    }
};