import { useState } from "react"
import Link from 'next/link'
import React from 'react'

export default function Info(){
    const [info] = useState('I am Hongyuseok')

    return(
        <div>
            <div>header</div>
            <div>
                this info page
                <div>{info}</div>
                <Link href='/'>
                    <button>return to main page</button>
                </Link>
            </div>
            <div>footer</div>
        </div>
    )
}