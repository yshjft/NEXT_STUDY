import Link from 'next/link';
import React from 'react';
import Layout from '../../components/layout';

export default () =>{
    return(
       <Layout>
            <div className="aboutMorePage">
                <div className="pageInfo">정말 아무 것도 아닌 페이지입니다!</div>
            </div>
            <style jsx>{`
                .aboutMorePage{
                    display : flex;
                    justify-content : center;
                    align-items : center;
                    height : 100%;
                }
                .pageInfo{
                    font-size : 30px;
                    font-weight: bold;
                }
            `}</style>
       </Layout>
    )
}