import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './Carousel.sass'
import Slider from 'react-slick'

const Carousel = () => {
  function importAll (r) {
    return r.keys().map(r)
  }

  const images = importAll(require.context('./images', false, /carousel-(\d)\.png$/))

  return (
    <section className='bilder'>
      <Slider
        dots
        fade
        infinite
        speed={500}
        slidesToShow={1}
        arrows
        slidesToScroll={1}
        className='slides'
      >
        {images && images.map((image) => {
          return (
            <div key className='image'>
              <div className='shadow'>
                <img alt='carousel' src={image} />
              </div>
            </div>
          )
        })}
      </Slider>
    </section>
  )
}

export default Carousel
