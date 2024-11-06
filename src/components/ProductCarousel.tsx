import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";

interface Product {
	id: number;
	name: string;
	price: number;
	thumbnail: string;
	discount: number;
	intro: string;
	color: string;
	rating: number
  }

type ProductCardProps = {
	product: Product;
	rank: number
  };

const ProductCarousel: React.FC<ProductCardProps> = ({ product, rank }) => {
	return (
		<div className="w-full h-[250px] md:h-[300px] lg:h-[320px] xl:h-[350px] d-flex lg:gap-8 shadow-[inset_80px_-11px_33px_13px_#ebf8ff,inset_20px_0px_100px_100px_#ebf4ff] p-2" key={product.name}>
			<div className="w-full p-2 sm:p-4">
				<div className="mb-2 sm:mb-4">
					<h2 className="text-base sm:text-xl lg:text-3xl text-orange-500 font-bold text-center uppercase">
						Products of the week
					</h2>
					<p className="text-d_gray text-center text-sm">
						Popular product for this week
					</p>
				</div>

				<div className="mb-4 lg:mb-8">
					<h5 className="text-orange-500 text-lg md:text-xl lg:text-2xl mb-2 lg:mb-4">
						Ranking - #{rank + 1}
					</h5>
					<div className="d-flex justify-between space-x-4 px-2">
						<ul className="text-xs sm:text-base lg:text-lg text-d_gray">
							<li><span className="hidden sm:inline">Name - {product.name}</span> <strong className="sm:hidden">{product.name}</strong> </li>
							<li><span className="hidden sm:inline">Type - </span>{product.intro}</li>
						</ul>
						<ul className="text-xs sm:text-base lg:text-lg text-end text-d_gray">
							<li>
								<del>
									Original Price - $
									<strong className="text-red-500">
										{product.price}
									</strong>
								</del>
							</li>
							<li className="mb-2 font-bold text-d_gray">
                            Promotion Price - $
								<span className="text-d_blue">
									{product.price - product.price * (product.discount / 100)}
								</span>
							</li>
						</ul>
					</div>
				</div>
				<div className="w-full flex justify-end gap-2 sm:gap-4">
					<button className="px-2 py-1 sm:px-8 sm:py-1 text-xs sm:text-base bg-d_gray hover:bg-d_blue text-white transition-colors duration-100 ease-linear rounded-sm sm:rounded-md">
						<Link to={`/products/${product.name}`}>View Product</Link>
					</button>
					<button className="px-2 py-1 sm:px-8 sm:py-2 text-xs sm:text-base d-flex gap-1 sm:gap-2 items-center bg-orange-400 hover:bg-d_blue rounded-sm sm:rounded-md transition-colors duration-200 ease-linear">
						Add to cart <BsCart />
					</button>
				</div>
			</div>
            <div className="w-[40%] hidden sm:block h-auto border-1 border-dotted border-d_blue rounded-lg overflow-hidden">
				<img
					className="w-full h-full object-fill object-center"
					src={product.thumbnail}
					alt={product.name}
				/>
			</div>
		</div>
	);
};

export default ProductCarousel;
