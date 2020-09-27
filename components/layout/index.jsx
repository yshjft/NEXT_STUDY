import Header from './Header';
import Footer from './Footer';
import React from 'react';

export default(props)=>{
    return(
        <div id="wrap">
            <Header/>
            <div  className='main'>
                {props.children}
            </div>
            <Footer/>
        <style jsx>{`
            #wrap{
                display : flex;
                width:100%;
                height:100%;
                flex-direction : column;
            }
            .main{
                flex: 1;
            }
        `}</style>
        </div>   
    )}