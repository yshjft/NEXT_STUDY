export const initialState={
    list : ['test',],
    updateTarget : 0, 
};

export const CRUD_WRITE = "CRUD_WRITE";
export const CRUD_DELETE = "CRUD_DELETE";
export const CRUD_TARGET ="CRUD_TARGET";
export const CRUD_UPDATE="CRUD_UPDATE";

export const writeAction = (newString) =>({
    type : CRUD_WRITE,
    newString
})

export const deleteAction = (index) =>({
    type : CRUD_DELETE,
    index,
})

export const setTargetAction = (index) =>({
    type : CRUD_TARGET,
    index,
})

export const updateAction = (index, newValue) =>({
    type : CRUD_UPDATE,
    index,
    newValue
})

const reducer = (state=initialState, action)=>{
    let tmp;
    switch(action.type){
        case CRUD_WRITE:
            tmp=state.list.concat();
            tmp.push(action.newString);
            state.list=tmp;
            return state;
        case CRUD_DELETE:
            tmp=state.list.concat();
            tmp.splice(action.index, 1);
            state.list=tmp;
            return state;
        case CRUD_TARGET:
            state.updateTarget=action.index;
            return state;
        case CRUD_UPDATE:
            tmp=state.list.concat();
            tmp.splice(action.index, 1, action.newValue);
            state.list=tmp;
            return state;
        default:
            return state;
    }
}

export default reducer;