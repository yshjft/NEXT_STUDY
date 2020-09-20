import Link from 'next/link'
import React, {Component} from 'react'

class Index extends Component{

  render(){
    return(
      <div>
        <div>Header</div>
        <div>
          <div>first page</div>
          <Link href='/info'>
            <button>move info page!!</button>
          </Link>
          <Link href='/about'>
            <button>move about page!!</button>
          </Link>
        </div>
        <div>Footer</div>
      </div>
    )
  }
}

export default Index;