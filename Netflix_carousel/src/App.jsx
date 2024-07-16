import React, { useEffect, useState } from 'react'
import NetflixCard from './Components/NetflixCard';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const App = () => {
  const [myData, setMyData] = useState([])

  const url = 'https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en';


  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '8c91329ad8msha89db736f78a9b0p1c0a0ejsn4be424faabf3',
      'x-rapidapi-host': 'netflix54.p.rapidapi.com'
    }
  };

  const fetchData = async () =>{
    try{
        const res = await fetch(url, options)
        const data = await res.json()
        setMyData(data.titles)
    }catch(e){
      console.log(e)
    }
  }

  useEffect(()=>{
    fetchData()
  },[])

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className='App'>

    
    <Carousel responsive={responsive}  showDots={true}  autoPlay={true} >
        { myData.map((item) =>{
            return(
              <NetflixCard key={item.summary.id} actualData={item} />
            )
          })
        }
    </Carousel>
    </div>
  )
}

export default App
