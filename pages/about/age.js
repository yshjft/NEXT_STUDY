import Link from 'next/link';
import React from 'react';

export default () =>{
    return(
        <div>
            <div>age : ????</div>
            <span>
                <Link href='/about'>
                    <button>return to about</button>
                </Link>
            </span>
            OR
            <span>
                <Link href='/'>
                    <button>return to main</button>
                </Link>
            </span>
        </div>
    )
}