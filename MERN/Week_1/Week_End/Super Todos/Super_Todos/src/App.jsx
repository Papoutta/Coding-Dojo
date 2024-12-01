import { useReducer } from 'react';
// We must define initial state: what our state will look like on initial render
const initialState = {
    todo: '',
    done: ''
};
 
// REMEMBER the action will look like: {type: "DO_SOMETHING", payload: "some_value"}
const reducer = (state, action) => {
    switch (action.type) {
        case "SET_Todo":
            return {
                ...state,
                todo: action.payload
            }
        default:
            return state;
    }
}
 
export default () => {
    //  We call the useReducer function. and feed it the reducer function and initialState.
    //  This function will return an array with a state variable ("state") which will hold 
    //  the CURRENT value of our app's state, and the dispatch function ("dispatch") which
    //  will dispatch our action to our reducer.
    const [state, dispatch] = useReducer(reducer, initialState);
   
    const handleTodoChange = (e) => {
        dispatch({
            type: "SET_Todo", 
            payload: e.target.value 
        });
    }
    const handleDoneChange = (e) => {
        dispatch({
            type: "SET_Done",
            payload: true
        })
    }
 
    return (
        <div>
            <h1>{JSON.stringify(state)}</h1> {/* display current value of state */}
            <div>
                <label>
                    <span>todo</span>
                    <input
                        id="name"
                        value={state.todo}
                        onChange={(e) => handleTodoChange(e)}
                    />
                </label>
            </div>
            <div>
                <label>
                    <span>done</span>
                    <input
                        type='checkbox'
                        id="done"
                        onChange={(e) => handleDoneChange(e)} 
                    />
                </label>
            </div>
        </div>
    );
}
