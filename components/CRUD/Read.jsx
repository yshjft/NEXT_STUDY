import React from 'react'

function ReduxRead(){
    return(
        <div>
            <div className="modeTitle">READ</div>
            <div className="date">{`${new Date().getFullYear()}/${new Date().getMonth()+1}/${new Date().getDate()}`}</div>
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