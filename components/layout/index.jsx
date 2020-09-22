import Header from './Header';
import Footer from './Footer';
import React from 'react';

export default(props)=>{
    return(
        <div id="wrap">
            <Header/>
            {props.children}
            <Footer/>
        </div>   
    )}