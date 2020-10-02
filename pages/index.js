import Layout from '../components/layout'
import Link from 'next/link'
import React from 'react'

const Index=() =>{
  return(
    <Layout>
      <div className="mainContent">
        <div className="aboutPage">First Page</div>
      </div>
      <style jsx>{`
        .mainContent{
          display : flex;
          justify-content : center;
          align-items: center;
          height : 100%;
        }
        .aboutPage{
          font-size : 150px;
          font-weight : bold;
        }
      `}</style>
    </Layout>
  )
}

export default Index;