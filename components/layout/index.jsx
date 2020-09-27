import Header from './Header';
import Footer from './Footer';
import React from 'react';

export default(props)=>{
    return(
        <div id="wrap">
            <Header/>
            {props.children}
            <Footer/>
        <style jsx>{`
            #wrap{
                border: 1px solid blue; 
                display : flex;
                flex-direction:column;
                justify-content : space-between;
            }
        `}</style>
        </div>   
    )}