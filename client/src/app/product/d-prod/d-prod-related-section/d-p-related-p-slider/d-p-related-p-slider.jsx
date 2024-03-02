import React, { useEffect, useState } from "react"
import { useReletedProducts } from "../../../../../hooks/useReletedProducts"
import DPRelatedPSlide from "./d-p-releted-slide/d-p-releted-slide"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./d-p-related-p-slider.scss"

const DPRelatedPSlider = () => {

    /* Global */
    const { products } = useReletedProducts()

    /* Locale */
    const [placeholderSlides, setPlaceholderSlides] = useState([])
    const slidesInView = 10

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: slidesInView,
        initialSlide: 0,
        slidesToScroll: 1,
        arrows: false,
    }

    /* Triggers */
    useEffect(() => {
        updatePlaceHolderSlides()
    }, [products])

    /* Functions */
    const updatePlaceHolderSlides = () => {
        const generete = slidesInView > products?.length ? slidesInView - products?.length : 0
        setPlaceholderSlides(Array(generete).fill(""))
    }

    /* JSX */
    if (products?.length > 0) {
        return (
            <div className="d-p-related-p-slider-container">
                <Slider {...settings}>
                    {products?.map((product, i) => {
                        return <DPRelatedPSlide key={i} product={product}/>
                    })}
                    {placeholderSlides?.map((placeholder, i) => {
                        return <div key={i} className="d-p-placeholder-slide"/>
                    })}
                </Slider>
            </div>
        )
    }
}

export default DPRelatedPSlider