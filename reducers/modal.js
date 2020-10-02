export const initialState = {display : 'flex'}

export const MODAL_CLOSE = "MODAL_CLOSE";
export const MODAL_OPEN = "MODAL_OPEN";

export const closeAction= ()=>({
    type : MODAL_CLOSE,
})

export const openAction = () =>({
    type : MODAL_OPEN,
})

const reducer =  (state=initialState, aciton)=>{
    let tmp;
    switch(aciton.type){
        case MODAL_CLOSE:
            tmp={...state, display : 'none'};
            state=tmp;
            return state;
        case MODAL_OPEN:
            tmp={...state, display : 'flex'};
            state=tmp;
            return state;
        default:
            return state;
    }
}

export default reducer;