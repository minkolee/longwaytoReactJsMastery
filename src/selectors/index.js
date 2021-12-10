export const getText = (state) => state.text;

export const getFilter = (state) => state.filter;

export const getVisibleTodos = (state) => {

    const {todos, filter} = state;

    switch (filter) {
        case 'all':
            return todos.data;

        case 'active':
            return todos.data.filter(item => !item.completed);
        case 'completed':
            return todos.data.filter(item => item.completed);
        default:
            return new Error("Unknown filter:" + filter);
    }
};