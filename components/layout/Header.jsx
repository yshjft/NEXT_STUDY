import React from 'react';
import Link from 'next/link';

export default ()=>{
    let headerItem =[
        {id : 0, name : 'ABOUT', link : '/about'},
        {id : 1, name : 'REDUX', link : '/redux'}
    ]
    return(
        <div className="header">
            <Link href='/'>
                <button className="titleBtn">Next.js Study</button>
            </Link>
            <div className="item">
                {headerItem.map(item => <Link href={item.link} key={item.id}>
                    <button className="itemBtn">{item.name}</button></Link> )}
            </div>
            
        <style jsx>{`
            .header{ 
                display : flex;
                justify-content: space-between;
                align-items: center;
                width:100%;
                height : 50px;
                border-bottom: 1px solid silver;
            }
            button{
                margin-left : 10px;
                margin-right : 10px;
                border: none;
                font-size : 30px;
                font-weight : bold;
                background-color:white;
            }
            .titleBtn{
                outline:0;
            }
            .itemBtn:hover {
                color : silver;
            }
        `}</style>
        </div>
    )}