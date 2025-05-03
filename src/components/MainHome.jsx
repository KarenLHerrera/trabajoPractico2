import React from 'react'
import Aside from "./Aside"
import Article from "./Article"
import LangTable from './LangTable'


const MainHome = ({Lenguajes}) => {

    
return (
          
    <div>
      <Aside Lenguajes={Lenguajes}/>
      <Article Lenguajes={Lenguajes}/>
      <LangTable Lenguajes={Lenguajes}/>
    </div>
  )
}

export default MainHome
