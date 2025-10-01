import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSection = () => {
    const sliderData = [
        { id: 1, imgUrl: "https://placehold.co/1100x300/F7D0B3/F7D0B3", name: "one" },
        { id: 1, imgUrl: "https://placehold.co/1100x300/f5f242/f5f242", name: "two" },
        { id: 1, imgUrl: "https://placehold.co/1100x300/6dd5f2/6dd5f2", name: "three" },
        { id: 1, imgUrl: "https://placehold.co/1100x300/f0acfc/f0acfc", name: "four" },
        { id: 1, imgUrl: "https://placehold.co/1100x300/9ee6d7/9ee6d7", name: "five" }
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
                            <img className="mx-auto w-full" src={s.imgUrl} alt={s.name} />
                        </div>
                    )}
                </Slider>
            </div>
        </div>
    )
}

export default HeroSection