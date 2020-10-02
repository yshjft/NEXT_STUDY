import React, {useState}from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {updateAction} from '../../reducers/crud';

function Update(props){
    const {display, setDisplay}=props;
    const {list, updateTarget} = useSelector(state => state.crud);
    const [str, setStr] = useState(list[updateTarget]);
    const dispatch = useDispatch();

    const onClickUpdate = () =>{
        dispatch(updateAction(updateTarget, str));
        setDisplay('none');
    }

    return(
        <div className="updateModal">
            <div className="modalArea">
                <div className="modalHeader">
                    <button className="closeBtn" 
                        onClick={e=>setDisplay('none')}>X</button>
                </div>
                <div className="modalContents">
                    <div className="modalMain">
                        <div className="modalTitle ">UPDATE</div>
                        <div>
                            <input id="inputArea" type="text" value={str} onChange={e => setStr(e.target.value)}></input>
                        </div>
                    </div>
                </div>
                <div className="modalBtn">
                    <button className="updateBtn" onClick={onClickUpdate}>UPDATE</button>
                </div>
            </div>
        <style jsx>{`
            .updateModal{
                display :${display};
                justify-content : center;
                align-items : center;
                position : fixed;
                top : 0;
                height : 100%;
                width : 100%;
                border : 1px solid black;
                background-color : rgba(0, 0, 0, 0.5);
            }
            .modalArea{
                display : flex;
                flex-direction : column;
                justify-content : space-between;
                width : 60%;
                height : 60%;
                background-color : white;
                border: 1px solid black;
                border-radius : 50px;
            }
            .modalHeader{
                display: flex;
                justify-content : flex-end;
            }
            .closeBtn{
                padding-left : 15px;
                padding-right : 30px;
                font-size : 60px;
                border : 0px;
                outline : 0;
                border-top-right-radius : 50px;
                background-color : white;
            }
            .closeBtn:hover{
                color : silver;
            }
            .modalContents{
                display: flex;
                align-items : center;
                justify-content : center;
            }
            .modalMain{
                text-align : center;
            }
            input{
                margin-top : 30px;
                width : 300px;
                height : 20px;
            }
            .modalTitle{
                font-size : 50px;
            }
            .modalBtn{
                text-align:center;
            }
            .updateBtn{
                width : 100%;
                height : 100px;
                border :0;
                outline:0;
                border-bottom-left-radius : 50px;
                border-bottom-right-radius : 50px;
                background-color : white;
                font-size : 40px;
            }
            .updateBtn:hover{
                background-color : black;
                color : white;
            }
        `}</style>
        </div>
    )
}

export default Update;