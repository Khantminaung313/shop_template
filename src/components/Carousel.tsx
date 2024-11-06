import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Carousel = () => {
	const slides = [
		{
			title: "The best shop in the world",
			intro: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, obcaecati?",
			thumbnail: "/assets/slide1.jpg",
			btn_text: "Shop Now",
			btn_link: "/products",
		},
		{
			title: "The best shop in the world",
			intro: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, obcaecati?",
			thumbnail: "/assets/slide2.jpg",
			btn_text: "Shop Now",
			btn_link: "/products",
		},
		{
			title: "The best shop in the world",
			intro: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, obcaecati?",
			thumbnail: "/assets/slide3.jpg",
			btn_text: "Shop Now",
			btn_link: "/products",
		},
	];

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
	};

	return (
		<div className="container my-4 lg:my-12">
			<Slider {...settings}>
				{slides.map((slide, index) => {
					return (
						<div
							key={index}
							className="relative max-h-[650px] w-full rounded-lg overflow-hidden"
						>
							<img
								className="w-full h-full object-cover object-center"
								src={slide.thumbnail}
								alt={slide.title}
							/>
							<div className="absolute top-[50%] translate-y-[-50%] left-12">
								<h2 className="text-2xl lg:text-4xl font-bold max-w-[300px] uppercase mb-4 text-d_blue">
									{slide.title}
								</h2>
								<p className="text-d_white lg:text-d_gray text-sm lg:text-base max-w-[60vw] sm:max-w-[450px] mb-4">
									{slide.intro}
								</p>
								<Link
									className="px-2 py-1 text-xs lg:text-base lg:px-4 lg:py-2 bg-d_blue rounded-md text-d_white relative group"
									to={slide.btn_link}
								>
									{slide.btn_text}
                                    <span className="absolute top-[40%] left-[0%] group-hover:left-[110%] translate-y-[-50%] text-d_blue text-4xl font-bold -z-10 duration-500 transition-all ease-linear"> &rarr; </span>
								</Link>
							</div>
						</div>
					);
				})}
			</Slider>
		</div>
	);
};

export default Carousel;
