import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { productsData } from "../db";
import ProductCard from "./ProductCard";

const ProductSection = () => {
	const popularProducts = productsData
		.filter((product) => product.rating >= 4.5)
		.sort((a, b) => b.rating - a.rating);
	const newProducts = productsData.filter(
		(product) => product.newProduct === true
	);

	return (
		<div className="py-2 lg:py-12 container">
			<div className="mb-4 border-b border-d_gray/20 py-4 lg:py-8">
				<h2 className="text-2xl font-extrabold text-d_gray tracking-wide mb-4 d-flex items-end gap-2 ">
					Popular Products{" "}
					<Link to="/products">
						<HiOutlineArrowNarrowRight className="w-10 hover:translate-x-2 transition-transform duration-300 ease-linear font-bold" />
					</Link>{" "}
				</h2>
				<div className="w-full py-2 sm:grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3">
					{popularProducts.map((product) => {
						return (
							<ProductCard key={product.id} product={product} />
						);
					})}
				</div>
			</div>
			<div className="mb-4 border-b border-d_gray/20 py-4 lg:py-8">
				<h2 className="text-2xl font-extrabold text-d_gray tracking-wide mb-4 d-flex items-end gap-2">
					New Products{" "}
					<Link to="/products">
						<HiOutlineArrowNarrowRight className="w-10 hover:translate-x-2 transition-transform duration-300 ease-linear font-bold" />
					</Link>{" "}
				</h2>
				<div className="w-full py-2 sm:grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3">
					{newProducts.map((product) => {
						return (
							<ProductCard key={product.id} product={product} />
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default ProductSection;
