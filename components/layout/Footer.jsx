import React from 'react';

export default ()=>{
    return(
        <div className='footer'>
            <div className="title">Next.js Study</div>
            <a href='https://github.com/yshjft' className="github">This is my github Link</a>
        <style jsx>{`
            .footer{
                height: 100px;
                border-top:1px solid silver;
                text-align:center;
            }
            .title{
                margin-top:10px;
                margin-bottom:10px;
                font-size : 25px;
                font-weight : bold;
            }
            .github{
                margin-top:10px;
                margin-bottom:10px;
                text-decoration :none;
                font-size : 20px;
                font-weight : bold;
                color : black;
            }
            .github:hover{
                color: silver;
            }
        `}</style>
        </div>
    )
}