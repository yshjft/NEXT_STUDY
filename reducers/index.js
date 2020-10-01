import { combineReducers } from 'redux'; // 여러 리듀서들을 하나로 합쳐준다.
import crud from './crud';

const rootReducer = combineReducers({
    crud, // 여기에 다른 리듀서들을 더 적으면 된다!

});

export default rootReducer;