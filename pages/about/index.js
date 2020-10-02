import Link from 'next/link';
import React from 'react';
import Layout from '../../components/layout'

const About = ()=>{
    return(
        <Layout>
            <div className="aboutPage">
                <div className="pageInfo">
                    <div className="explain">Next.js 폴더 구조에 익수해지기 위한 연습 페이지</div>
                    <Link href='/about/more'>
                        <button>more about</button>
                    </Link>
                </div>
            </div>
            <style jsx>{`
                .aboutPage{
                    display : flex;
                    justify-content: center;
                    align-items : center;
                    height : 100%;
                }
                .pageInfo{
                    text-align : center;
                }
                .explain{
                    margin-bottom : 20px;
                    font-size : 30px;
                    font-weight : bold;
                }
                button{
                    border : 0;
                    outLine : 0;
                    font-size : 20px;
                    font-weight : bold;
                    background-color:white;
                }
                button:hover{
                    color:silver
                }
            `}</style>
        </Layout>
    )
}


export default About;