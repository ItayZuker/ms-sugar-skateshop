import React, { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../../../../../context/global"
import { useReletedProducts } from "../../../../../hooks/useReletedProducts"
import MPReletedSlide from "./m-p-releted-slide/m-p-releted-slide"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./m-p-releted-p-slider.scss"

const MPReletedPSlider = () => {

    /* Global */
    const {
        media
    } = useContext(GlobalContext)
    const { products } = useReletedProducts()

    /* Locale */
    const [placeholderSlides, setPlaceholderSlides] = useState([])

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        initialSlide: 0,
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
        updatePlaceHolderSlides()
    }, [media?.width, products])

    /* Functions */
    const genereteSlids = ({ slides }) => {
        const generete = slides > products?.length ? slides - products?.length : 0
        setPlaceholderSlides(Array(generete).fill(""))
    }

    const updatePlaceHolderSlides = () => {
        if (media?.width <= 400) {
            genereteSlids({ slides: 2 })
            return
        }
        if (media?.width <= 600) {
            genereteSlids({ slides: 3 })
            return
        }
        if (media?.width <= 800) {
            genereteSlids({ slides: 4 })
            return
        }
        genereteSlids({ slides: 5 })
    }

    /* JSX */
    if (products?.length > 0) {
        return (
            <div className="m-p-releted-p-slider-container">
                <Slider {...settings}>
                    {products?.map((product, i) => {
                        return <MPReletedSlide key={i} product={product}/>
                    })}
                    {placeholderSlides?.map((placeholder, i) => {
                        return <div key={i} className="m-p-placeholder-slide"/>
                    })}
                </Slider>
            </div>
        )
    }
}

export default MPReletedPSlider