import React, { useContext } from "react"
import { ShopifyContext } from "../../../../../context/shopify";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import MPImg from "./m-p-img/m-p-img"
import "./m-p-gallery.scss"

const NextArrow = ({ onClick }) => {
    return (
        <div className="slick-next" onClick={onClick}>
            <span class="material-symbols-outlined">navigate_next</span>
        </div>
    );
};

const PrevArrow = ({ onClick }) => {
    return (
        <div className="slick-prev" onClick={onClick}>
            <span class="material-symbols-outlined">navigate_before</span>
        </div>
    );
};

const MPGallery = () => {

    /* Global */
    const {
        storeDisplay
    } = useContext(ShopifyContext)

    /* Locale */
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    }

    /* JSX */
    return (
        <div className="m-p-gallery-container">
            <Slider {...settings}>
                {storeDisplay?.product?.images.map((image, i) => {
                    return <MPImg key={i} image={image}/>
                })}
            </Slider>
        </div>
    )
}

export default MPGallery