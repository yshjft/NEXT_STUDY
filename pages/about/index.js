import Link from 'next/link';
import React from 'react';
import Layout from '../../components/layout'

const About = ()=>{
    return(
        <Layout>
            <div>about what?</div>
            <Link href='/about/more'>
                <button>more about</button>
            </Link>
            <Link href='/'>
                <button>return to main page</button>
            </Link>
        </Layout>
    )
}


export default About;