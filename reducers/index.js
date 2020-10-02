import { combineReducers } from 'redux'; // 여러 리듀서들을 하나로 합쳐준다.
import crud from './crud';
import modal from './modal';

const rootReducer = combineReducers({// 여기에 다른 리듀서들을 더 적으면 된다!
    crud, 
    modal,
});

export default rootReducer;