/*
컴포넌트가 리렌더링 될 때마다 이 함수들이 새로 생성됩니다.
대부분의 경우에는 이러한 방식이 문제가 되지 않지만, 컴포넌트의 렌더링이 자주 발생하거나,
렌더링 해야 할 컴포넌트의 개수가 많아진다면 이 부분을 최적화 해주시는 것이 좋습니다.
*/
import React, {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import { writeAction } from '../../reducers/crud';

function ReduxWrite(props){
    const {setMode} = props;

    const dispatch=useDispatch(); // dispatch를 사용하기 쉽게 하는 hook
    const onClickSubmit =useCallback(()=>{// useCallback은 최적화를 위한 hook이다 이 앱에선 굳이 사용 안 해도 되는데 습관이 들면 좋기에 사용.
        let newString=document.getElementById('inputArea').value;
        dispatch(writeAction(newString));
        document.getElementById('inputArea').value=null;
        setMode('READ');
    }, []);

    return(
        <div>
            <div className="modeTitle">WRITE</div>
            <input id="inputArea" type='text' placeholder="write something"></input>
            <button onClick={onClickSubmit}>write</button>
            <style jsx>{`
            .modeTitle{
                margin-top : 20px;
                font-size : 25px;
                font-weight : bold;
            }
            input{
                margin-top : 20px;
                margin-right : 20px;
                width : 50%;
                height : 20px;
            }
            button{
                border : 0;
                outLine : 0;
                background-color : white;
                font-size : 20px;
                font-weight : bold;
            }
            button:hover{
                color : silver;
            }
        `}</style>
        </div>
    )
}

export default ReduxWrite;