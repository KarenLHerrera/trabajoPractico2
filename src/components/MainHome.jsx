import React from 'react'
import Aside from "./Aside"
import Article from "./Article"
import LangTable from './LangTable'
import "../css/MainHome.css"


const MainHome = ({Lenguajes}) => {

    
return (
      <>    
    <div className='MainHome'>
      <div className='Aside'>
      <Aside Lenguajes={Lenguajes}/>
      </div>
      <div className='Article'>
      <Article Lenguajes={Lenguajes}/>
      </div>
      <br />
    </div>
    <div className='LangTable'>
    <LangTable Lenguajes={Lenguajes}/>
  </div>
  </>
  )
}

export default MainHome
