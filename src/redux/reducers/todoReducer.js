

const initialState = {
    todos: [],
};


const todoReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_TODO':
           const tempTodos = state.todos.concat(action.payload);

         return {
            todos: tempTodos,
         };

        case 'DELETE':
            const filtred = state.todos.filter((todo) => todo.id !== action.payload);

            return { todos: filtred };

        case 'UPDATE':
        const updated = state.todos.map((item) => 
            item.id === action.payload.id ? action.payload : item);

            return { todos: updated };
        default:
            return state;
    }
};



export default todoReducer;