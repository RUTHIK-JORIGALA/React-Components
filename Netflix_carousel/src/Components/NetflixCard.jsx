import React from 'react'
import "./netflixCard.css"


const NetflixCard = ({actualData}) => {
    const { jawSummary} = actualData

   

  return (
    <div className='main'>
        <div className="container">
            <div className="wrapper">
                <div className="banner-image">
                    <figure>
                        <img src={jawSummary.backgroundImage.url} alt={jawSummary.title}/>
                    </figure>
                </div>
                <h1>{jawSummary.title}</h1>
                <p>{jawSummary.synopsis}</p>
            </div>
        </div>

    </div>
  )
}

export default NetflixCard
