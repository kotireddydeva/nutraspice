import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSection = () => {
    const sliderData = [
        { id: 1, imgUrl: "https://res.cloudinary.com/dyz8l9er0/image/upload/v1759924519/NutraSpice-Offer_t83vtw.png", name: "one" },
        { id: 1, imgUrl: "https://res.cloudinary.com/dyz8l9er0/image/upload/v1759924519/NutraSpice-Offer_t83vtw.png", name: "two" },
        { id: 1, imgUrl: "https://res.cloudinary.com/dyz8l9er0/image/upload/v1759924519/NutraSpice-Offer_t83vtw.png", name: "three" },
        { id: 1, imgUrl: "https://res.cloudinary.com/dyz8l9er0/image/upload/v1759924519/NutraSpice-Offer_t83vtw.png", name: "four" },
        { id: 1, imgUrl: "https://res.cloudinary.com/dyz8l9er0/image/upload/v1759924519/NutraSpice-Offer_t83vtw.png", name: "five" }
    ]
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
    };
    return (
        <div className="max-w-[90%] mx-auto">
            <div className="slider-container">
                <Slider {...settings}>
                    {sliderData.map((s) =>
                        <div key={s.id}>
                            <img className="mx-auto h-64" src={s.imgUrl} alt={s.name} />
                        </div>
                    )}
                </Slider>
            </div>
        </div>
    )
}

export default HeroSection