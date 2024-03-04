import React, { useContext, useEffect, useState } from "react"
import { ShopifyContext } from "../../../../../context/shopify";
import PShare from "../../../parts/p-share/p-share"
import MPImg from "./m-p-img/m-p-img"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import "./m-p-gallery.scss"

const MPGallery = () => {

    /* Global */
    const {
        storeDisplay
    } = useContext(ShopifyContext)

    /* Locale */
    const [imageCount, setImageCount] = useState(storeDisplay?.product?.images?.length || 0);

    const settings = {
        dots: true,
        infinite: imageCount > 1,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };

    const galleryStyle = {
        '--number-of-dots': storeDisplay?.product?.images?.length,
    };

    /* Triggers */
    useEffect(() => {
        updateSettings()
    }, [storeDisplay?.product?.images?.length]);
    
    /* Functions */
    const updateSettings = () => {
        setImageCount(storeDisplay?.product?.images?.length || 0);
    }

    /* JSX */
    return (
        <div className="m-p-gallery-container" style={galleryStyle}>
            <PShare/>
            <Slider {...settings}>
                {storeDisplay?.product?.images?.map((image, i) => {
                    return <MPImg key={i} image={image}/>
                })}
            </Slider>
        </div>
    )
}

export default MPGallery