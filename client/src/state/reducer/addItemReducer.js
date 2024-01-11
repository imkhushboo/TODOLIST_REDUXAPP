export const reducer = (state = [], action) => {
    if (action.type === 'addItem') {
        // console.log(state, "anddd", action.payload);
        return state.concat(action.payload);
    }
    else if (action.type === 'deleteItem') {
        let newstate = [];
        let newid = 0;
        console.log(state);
        for (let i = 0; i < state.length; i++) {
            if (i !== action.payload) {
                state[i].id = newid++;
                newstate.push(state[i]);
            }
        }
        return newstate;
    }
    else if (action.type === 'saveItem') {

        let id = action.payload.id;
        state[id].text = action.payload.text;
        return state;
    }
    else if (action.type === "currentState") {
        return state[action.payload.id];
    }
    else {
        return state;
    }
}