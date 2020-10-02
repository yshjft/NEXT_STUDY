
import React, {useCallback, useState} from 'react' 
import { useDispatch, useSelector } from 'react-redux';
import { deleteAction, setTargetAction } from '../../reducers/crud';

function ReduxRead(props){
    const {setDisplay} = props;
    const list = useSelector(state => state.crud.list);  // store의 state를 불러오는 hook 
    const dispatch=useDispatch();

    const onClickDelete = useCallback((index) => {
        dispatch(deleteAction(index));
    }, [])
    
    const onClickUpdate = useCallback((index)=>{
        dispatch(setTargetAction(index));
        setDisplay('flex');
    })

    return(
        <div>
            <div className="modeTitle">READ</div>
            <div className="date">{`${new Date().getFullYear()}/${new Date().getMonth()+1}/${new Date().getDate()}`}</div>
            <div>
                {
                    list.map((str, index)=>{
                        return( <div key={index} className="str">
                            <div className="contents">{index+1}. {str}</div>
                            <button onClick={e=>onClickDelete(index)}>DELETE</button>
                            <button onClick={e=>onClickUpdate(index)}>UPDATE</button>
                        </div>)
                    })
                }
            </div>
            <style jsx>{`
                .modeTitle{
                    margin-top : 40px;
                    font-size : 25px;
                    font-weight : bold;
                }
                .date{
                    margin-top : 10px;
                    margin-bottom : 10px;
                    font-size : 20px;
                    font-weight : bold;
                }
                .str{
                    display:flex;
                    justify-content : center;
                    margin : 10px;
                    font-size : 20px;
                }
                button{
                    border : 0;
                    outLine : 0;
                    background-color : white;
                    font-size : 15px;
                    font-weight : bold;
                }
                button:hover{
                    color : silver;
                }
                .contents{
                    margin-right : 20px;
                }
            `}</style>
        </div>
    )
}

export default ReduxRead;