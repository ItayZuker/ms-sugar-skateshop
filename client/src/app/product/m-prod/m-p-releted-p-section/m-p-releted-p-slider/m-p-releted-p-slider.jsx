import React, { useEffect, useState } from "react"
import { useReletedProducts } from "../../../../../hooks/useReletedProducts"
import { useMedia } from "../../../../../hooks/useMedia"
import MPReletedSlide from "./m-p-releted-slide/m-p-releted-slide"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./m-p-releted-p-slider.scss"

const MPReletedPSlider = () => {

    /* Global */
    const { products } = useReletedProducts()
    const { media } = useMedia()

    /* Locale */
    const [slides, setSlides] = useState([])

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        initialSlide: 1,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    }

    /* Triggers */
    useEffect(() => {
        updateSlides()
    }, [media?.width, products])

    /* Functions */
    const genereteSlids = ({ slidesInView }) => {
        if (products?.length >= slidesInView) {
            setSlides(products)
            return 
        }
    
        const repeatCount = slidesInView - products.length;
    
        let extendedProducts = [];
        for (let i = 0; i < repeatCount; i++) {
            extendedProducts = extendedProducts.concat(products);
        }
        const generate = extendedProducts.slice(0, slidesInView)
        setSlides(generate)
    }

    const updateSlides = () => {

        if (media?.width <= 400) {
            genereteSlids({ slidesInView: 2 })
            return
        }
        if (media?.width <= 600) {
            genereteSlids({ slidesInView: 3 })
            return
        }
        if (media?.width <= 800) {
            genereteSlids({ slidesInView: 4 })
            return
        }
        genereteSlids({ slidesInView: 5 })
    }

    /* JSX */
    if (products?.length > 0) {
        return (
            <div className="m-p-releted-p-slider-container">
                <Slider {...settings}>
                    {slides?.map((product, i) => {
                        return <MPReletedSlide key={i} product={product}/>
                    })}
                </Slider>
            </div>
        )
    }
}

export default MPReletedPSlider