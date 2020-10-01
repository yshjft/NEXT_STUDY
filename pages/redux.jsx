import React, {useState}from 'react'
import layout from '../components/layout';
import Layout from '../components/layout'
import Read from '../components/CRUD/Read'
import Write from '../components/CRUD/Write'
import Update from '../components/CRUD/Update'

function Redux(){
    let [mode, setMode]=useState('READ');
    let modes = ['READ', 'WRITE', 'UPDATE'];


    let crud=null;
    switch(mode){
        case 'READ':
            crud=<Read/>;
            break;
        case 'WRITE':
            crud=<Write/>;
            break;
        case 'UPDATE':
            crud=<Update/>;
            break;
        default:
            break;
    }


    return(
        <Layout>
            <div className="title">REDUX TODO</div>
            <div className="btnArea">
                { modes.map((btn, index)=> { 
                    return <button key={index} className='modeBtn' 
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
        </Layout>
    )

}

export default Redux;