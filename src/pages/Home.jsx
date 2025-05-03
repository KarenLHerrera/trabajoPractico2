import React, {useState,useEffect} from 'react'
import Header from '../components/Header'
import MainHome from '../components/MainHome'
import Footer from '../components/Footer'
import Data from  "../data/config"

const Home = () => {

  const [Lenguajes, setLenguajes]= useState([])
  
    useEffect( () => {
      setLenguajes(Data)
    }, [])

  return (
    <div>
      <Header />
      <MainHome Lenguajes={Lenguajes}/>
      <Footer />
    </div>
  )
}

export default Home
