import { useState } from "react"
import Link from 'next/link'
import React from 'react'
import Layout from '../components/layout'

export default function Info(){
    const [info] = useState('I am Hongyuseok')

    return(
        <Layout>
            <div>
                <div>this info page</div>
                <div>{info}</div>
                <Link href='/'><button>return to main page</button></Link>
            </div>
        </Layout>
    )
}