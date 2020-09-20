import Link from 'next/link';
import React, {Component} from 'react';

class About extends Component{
    render(){
        return(
            <div>
                <div>about what?</div>
                <Link href='/about/age'>
                    <button>AGE ????</button>
                </Link>
                <Link href='/'>
                    <button>return to main page</button>
                </Link>
            </div>
        )
    }
}

export default About;