import React, { useEffect, useState } from "react"
import { useReletedProducts } from "../../../../../hooks/useReletedProducts"
import DPRelatedPSlide from "./d-p-releted-slide/d-p-releted-slide"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./d-p-related-p-slider.scss"

const NextArrow = ({ onClick }) => {
    return (
        <div className="slick-next" onClick={onClick}>
            <span className="material-symbols-outlined">navigate_next</span>
        </div>
    );
};

const PrevArrow = ({ onClick }) => {
    return (
        <div className="slick-prev" onClick={onClick}>
            <span className="material-symbols-outlined">navigate_before</span>
        </div>
    );
};

const DPRelatedPSlider = () => {

    /* Global */
    const { products } = useReletedProducts()

    /* Locale */
    const [slides, setSlides] = useState([])
    const slidesInView = 8

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: slidesInView,
        initialSlide: 0,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    }

    /* Triggers */
    useEffect(() => {
        updateSlides()
    }, [products])

    /* Functions */
    const updateSlides = () => {
        if (products?.length >= slidesInView) {
            setSlides(products)
            return 
        }
    
        const repeatCount = slidesInView - products.length
    
        let extendedProducts = []
        for (let i = 0; i < repeatCount; i++) {
            extendedProducts = extendedProducts.concat(products)
        }
        const generate = extendedProducts.slice(0, slidesInView)
        setSlides(generate)
    }

    /* JSX */
    if (products?.length > 0) {
        return (
            <div className="d-p-related-p-slider-container">
                <Slider {...settings}>
                    {slides?.map((product, i) => {
                        return <DPRelatedPSlide key={i} product={product}/>
                    })}
                </Slider>
            </div>
        )
    }
}

export default DPRelatedPSlider