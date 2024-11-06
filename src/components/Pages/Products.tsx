import Slider from "react-slick";
import { productsData } from "../../db";
import ProductCard from "../ProductCard";
import ProductCarousel from "../ProductCarousel";
const Products = () => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
	};

	const popularProducts = productsData
		.filter((product) => product.rating > 4.0)
		.sort((a, b) => b.rating - a.rating)
		.slice(0, 3);

	return (
		<div>
			<div className="container">
				<div className="mb-8 border border-d_gray/20">
					<Slider {...settings}>
						{popularProducts.map((product, index) => <ProductCarousel product={product} key={index} rank={index}/>)}
					</Slider>
				</div>
				<div className="w-full py-2 sm:grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3">
					{productsData.map((product) => {
						return (
							<ProductCard key={product.id} product={product} />
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Products;
