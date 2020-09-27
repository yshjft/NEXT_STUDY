import React from 'react';

export default ()=>{
    return(
        <div className='footer'>
            <div className="title">Next.js Study</div>
            <a href='https://github.com/yshjft' className="link">This is my github Link</a>
        <style jsx>{`
            .footer{
                border:1px solid silver;
                text-align:center;
            }
            .title{
                margin-top:10px;
                margin-bottom:10px;
                font-size : 25px;
                font-weight : bold;
            }
            .link{
                margin-top:10px;
                margin-bottom:10px;
                font-size : 20px;
                font-weight : bold;
            }
            .link:hover{
                color: silver;
            }
        `}</style>
        </div>
    )
}