export const initialState=['test',];

export const CRUD_WRITE = "CRUD_WRITE";

export const writeAction = (newString) =>({
    type : CRUD_WRITE,
    newString
})

const reducer = (state=initialState, action)=>{
    switch(action.type){
        case CRUD_WRITE:
            console.log(action);
            let tmp=state.concat();
            tmp.push(action.newString);
            state=tmp;;
            return state;
        default:
            return state;
    }
}

export default reducer;