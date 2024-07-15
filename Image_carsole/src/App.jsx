import React from 'react'
import Carsousel from './components/carosel/Carsousel'

const App = () => {
  const data = [
    {
      id:1,
      img: "https://picsum.photos/id/1/500/300",
      title: "Laptop"
    },
    {
      id:2,
      img: "https://picsum.photos/id/24/500/300",
      title: "Book"
    },
    {
      id:3,
      img: "https://picsum.photos/id/33/500/300",
      title: "Nature"
    },
    {
      id:4,
      img: "https://picsum.photos/id/38/500/300",
      title: "Something"
    },
  ]
  return (
    <div className='App'>
      <Carsousel data={data} />
    </div>
  )
}

export default App
