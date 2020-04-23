export const initialState = {
    todo: [
        {
            item: 'Learn about reducers',
            completed: false,
            id: 3892987589
        }
    ]
}

export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return {
                ...state,
                todo: [...state.todo,
                {
                    item: action.payload,
                    completed: false,
                    id: Date.now()
                }
                ]
            }

        case "TOGGLE_COMPLETED":
            return {
                ...state,
                todo: state.todo.map(item => {
                    if (action.payload === item.id) {
                        return {
                            ...item,
                            completed: !item.completed
                        }
                    }
                    return {
                        ...item
                    }
                })
            }

        case "CLEAR":
            return {
                ...state,
                todo: state.todo.filter(item => !item.completed)
            }

        default:
            return state;
    }
}