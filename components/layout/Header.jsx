import React from 'react';
import Link from 'next/link';

export default ()=>{
    return(
        <div>
            <Link href='/info'>
                <button>INFO</button>
            </Link>
            <Link href='/about'>
                <button>ABOUT</button>
            </Link>

        </div>
    )}