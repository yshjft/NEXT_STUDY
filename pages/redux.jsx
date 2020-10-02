import React, {useState}from 'react'
import Layout from '../components/layout'
import Read from '../components/CRUD/Read'
import Write from '../components/CRUD/Write'
import Update from '../components/modal/update'

function Redux(){
    let [mode, setMode]=useState('READ');
    let [display, setDisplay] = useState('none'); //modal 관련
    let modes = ['READ', 'WRITE'];


    let crud=null;
    switch(mode){
        case 'READ':
            crud=<Read setDisplay={setDisplay}/>;
            break;
        case 'WRITE':
            crud=<Write setMode={setMode}/>;
            break;
        default:
            break;
    }

    return(
        <Layout>
            <div className="title">REDUX TODO</div>
            <div className="btnArea">
                { modes.map((btn, index)=> { 
                    return <button key={index} className={mode === btn ? 'modeBtn selectedBtn' : 'modeBtn'}
                    onClick={()=> setMode(btn)}>{btn}</button>})}
            </div>
            <div className="componentArea">{crud}</div>
            <style jsx>{`
                .title{
                    margin-top:50px;
                    text-align : center;
                    font-size : 50px;
                    font-weight: bold;
                }
                .btnArea{
                    margin-top : 10px;
                    margin-bottom : 30px;
                    text-align : center;
                }
                .modeBtn{
                    margin-left : 5px;
                    margin-right : 5px;
                    border: 0;
                    outLine :0;
                    background-color : white;
                    font-size : 30px;
                    color : silver;
                }
                .selectedBtn{
                    font-weight : bold;
                    color : black;
                }
                .componentArea{
                    margin-left : 15%;
                    margin-right : 15%;
                    margin-bottom : 30px;
                    text-align : center;
                    border : 1px solid silver;
                    border-radius : 30px;
                    min-height : 60%;
                }
            `}</style>
            <Update display={display} setDisplay={setDisplay}></Update>
        </Layout>
    )

}

export default Redux;