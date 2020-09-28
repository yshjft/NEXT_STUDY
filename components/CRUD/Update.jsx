import React from 'react'

function ReduxUpdate(){
    return(
        <div>
            <div className="modeTitle">UPDATE</div>
            <input type='text' placeholder="write something"></input>
            <button>UPDATE</button>
        <style jsx>{`
            .modeTitle{
                margin-top : 20px;
                font-size : 25px;
                font-weight : bold;
            }
            input{
                width : 50%;
                height : 20px;
            }
        `}</style>
        </div>
    )
}

export default ReduxUpdate;