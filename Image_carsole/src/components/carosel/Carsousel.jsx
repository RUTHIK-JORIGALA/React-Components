import React, { useState } from 'react'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import "./carousel.css"

const Carsousel = ({data}) => {
    const [slide, setSlide] = useState(0);

    const nextSlide = () =>{
        setSlide(slide === data.length -1 ? 0 : slide + 1)
    }

    const prevSlide = () =>{
        setSlide(slide === 0 ? data.length - 1 : slide - 1)
    }

    setTimeout(() => nextSlide() , 3000);

  return (
    <div className='carousel'>
        <FaArrowAltCircleLeft
        onClick={prevSlide}
            className='arrow arrow-left'
        />
      
      {
        data.map((item, index) => {
            return(
                <img src={item.img} alt={item.title} key={index} className={slide === index ? "slide" : "slide slide-hidden"} />
            )
        })
      }

        <FaArrowAltCircleRight
            onClick={nextSlide}
            className='arrow arrow-right'
        />
        <span className='indicators'>
            {
                data.map((_, index) => {
                    return(
                        <button
                            key={index}
                            className={ slide === index ? "indicator": "indicator indicator-inactive"}
                            onClick={()=> setSlide(index)}
                        ></button>
                    )
                })
            }
        </span>
    </div>
  )
}

export default Carsousel
