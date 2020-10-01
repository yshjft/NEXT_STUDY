
import React, {useCallback} from 'react' 
import { useDispatch, useSelector } from 'react-redux';

function ReduxRead(){
    const list = useSelector(state => state.crud);  // store의 state를 불러오는 hook 

    return(
        <div>
            <div className="modeTitle">READ</div>
            <div className="date">{`${new Date().getFullYear()}/${new Date().getMonth()+1}/${new Date().getDate()}`}</div>
            <div>
                {
                    list.map((str, index)=>{
                        return( <div key={index}>{index+1}. {str}</div>)
                    })
                }
            </div>
            <style jsx>{`
                .modeTitle{
                    margin-top : 20px;
                    font-size : 25px;
                    font-weight : bold;
                }
            `}</style>
        </div>
    )
}

export default ReduxRead;