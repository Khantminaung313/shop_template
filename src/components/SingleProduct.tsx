import { ChangeEvent, useState } from "react";
import { BsCart, BsHeart, BsHeartFill } from "react-icons/bs";
import {
	IoBagCheckOutline,
	IoStar,
	IoStarHalfOutline,
	IoStarOutline,
} from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
import { productsData } from "../db";

const SingleProduct = () => {
	const { productName } = useParams();
	const [quantity, setQuantity] = useState<number>(1);
	const product = productsData.filter(
		(product) => product.name === productName
	)[0];
	const [currentImg, setCurrentImg] = useState(product.thumbnail);
	const increaseQty = () => {
		quantity < 1001 && setQuantity((prev) => prev + 1);
	};

	const decreaseQty = () => {
		quantity > 1 && setQuantity((prev) => prev - 1);
	};
	const renderRating = (rating: number) => {
		switch (rating) {
			case 1:
				return (
					<div className="d-flex gap-1">
						<IoStar />
						<IoStarOutline />
						<IoStarOutline />
						<IoStarOutline />
						<IoStarOutline />
					</div>
				);
			case 1.5:
				return (
					<div className="d-flex gap-1">
						<IoStar />
						<IoStarHalfOutline />
						<IoStarOutline />
						<IoStarOutline />
						<IoStarOutline />
					</div>
				);
			case 2:
				return (
					<div className="d-flex gap-1">
						<IoStar />
						<IoStar />
						<IoStarOutline />
						<IoStarOutline />
						<IoStarOutline />
					</div>
				);

			case 2.5:
				return (
					<div className="d-flex gap-1">
						<IoStar />
						<IoStar />
						<IoStarHalfOutline />
						<IoStarOutline />
						<IoStarOutline />
					</div>
				);

			case 3:
				return (
					<div className="d-flex gap-1">
						<IoStar />
						<IoStar />
						<IoStar />
						<IoStarOutline />
						<IoStarOutline />
					</div>
				);

			case 3.5:
				return (
					<div className="d-flex gap-1">
						<IoStar />
						<IoStar />
						<IoStar />
						<IoStarHalfOutline />
						<IoStarOutline />
					</div>
				);

			case 4:
				return (
					<div className="d-flex gap-1">
						<IoStar />
						<IoStar />
						<IoStar />
						<IoStar />
						<IoStarOutline />
					</div>
				);

			case 4.5:
				return (
					<div className="d-flex gap-1">
						<IoStar />
						<IoStar />
						<IoStar />
						<IoStar />
						<IoStarHalfOutline />
					</div>
				);

			case 5:
				return (
					<div className="d-flex gap-1">
						<IoStar />
						<IoStar />
						<IoStar />
						<IoStar />
						<IoStar />
					</div>
				);

			default:
		}
	};

	const handleOnchange = (event: ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		setQuantity(parseInt(value));
	};

	const handleCurrentImg = (thumbnail: string) => {
		setCurrentImg(thumbnail);
	}

	return (
		<div>
			<div className="container">
				<div className="py-8 text-d_blue">
					<Link to="/products">Products</Link>
					<span className="text-d_gray">{` > `}</span>
					<Link to={`/products/${productName}`}>{productName}</Link>
				</div>
				<div className="grid grid-cols-1 lg:grid-cols-2 md:space-x-4 space-y-4 md:space-y-0">
					<div className="p-2">
						<div className="product-img-container w-full max-w-[550px] mx-auto h-[350px] lg:h-[400px] max-h-[600px] md:h-[500px] border-2 border-dotted border-d_gray rounded-lg">
							<img
								className="w-full h-full object-cover object-center"
								src={currentImg}
								alt="slide1"
							/>
						</div>
						<div className="product-selector d-flex space-x-1 py-2 justify-center max-w-[550px] mx-auto w-full">
							<button className="w-20 h-20 overflow-hidden border border-d_gray/20" onClick={() => handleCurrentImg(product.thumbnail)}>
								<img
									className="w-full h-full object-cover object-center"
									src={product.thumbnail}
									alt="slide1"
								/>
							</button>
							<button className="w-20 h-20 overflow-hidden border border-d_gray/20" onClick={() => handleCurrentImg("/assets/slide2.jpg")}>
								<img
									className="w-full h-full object-cover object-center"
									src="/assets/slide2.jpg"
									alt="slide2"
								/>
							</button>
							<button className="w-20 h-20 overflow-hidden border border-d_gray/20" onClick={() => handleCurrentImg("/assets/slide3.jpg")}>
								<img
									className="w-full h-full object-cover object-center"
									src="/assets/slide3.jpg"
									alt="slide3"
								/>
							</button>
						</div>
					</div>
					<div className="md:p-4 space-y-8">
						<h1 className="text-4xl font-bold">{product.name}</h1>
						<div className="text-orange-500 d-flex gap-1">
							{renderRating(product.rating)}
						</div>
						<p className="text-d_gray text-sm md:text-base">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Doloremque explicabo dolores ad, veniam eius
							repudiandae deleniti dignissimos dolorem nisi, dicta
							aliquid nulla. Nisi quis maxime temporibus itaque
							quidem assumenda. Porro deleniti obcaecati facere
							assumenda odit quo dolorum doloremque fugit totam
							nemo dolores esse mollitia tempora sed, amet
							corporis cum, vitae laboriosam ducimus quisquam
							libero. Quod doloremque ad et aliquam fugit minus
							rerum obcaecati, a ullam perspiciatis error earum
							dolorum praesentium libero animi nam in recusandae!
							Fugiat ab possimus impedit, pariatur laborum
							voluptas itaque. Eligendi, ea. Nemo possimus iste
							harum deleniti, nihil nisi expedita magnam ipsum
							beatae corporis sunt provident molestiae.
						</p>
						<div className="d-flex space-x-2 items-center">
							<span className="text-lg">
								Add To White List -{" "}
							</span>
							<BsHeart className="text-2xl fill-pink-400" />
							<BsHeartFill className="text-2xl fill-pink-400 hidden" />
						</div>
						<div className="d-flex space-x-8 items-center mb-4">
							<strong className="text-bold text-lg text-d_gray uppercase">Quantity - </strong>
							<div className="d-flex space-x-2 inline-block">
								<button
									className="text-xl font-bold px-3 border hover:bg-d_gray hover:text-white border-d_gray text-d_gray leading-10"
									onClick={() => decreaseQty()}
								>
									-
								</button>
								<input
									className="w-20 outline-none border border-d_gray text-center pl-4"
									type="number"
									value={quantity}
									onChange={handleOnchange}
									min={1}
								/>
								<button
									className="text-xl font-bold px-3 border hover:bg-d_gray hover:text-white border-d_gray text-d_gray leading-10"
									onClick={() => increaseQty()}
								>
									+
								</button>
							</div>
						</div>
						<div className="d-flex space-x-8 items-center mt-12">
							<button className="d-flex space-x-2 items-center p-2 bg-d_blue text-white hover:bg-d_gray transition-all duration-300 ease-linear rounded-sm">
								<span>Add To Cart</span> <BsCart />
							</button>
							<button className="d-flex space-x-2 items-center p-2 bg-orange-500 text-white hover:bg-d_gray hover:text-orange-500 transition-all duration-300 ease-linear rounded-sm">
								<span>Checkout Now</span> <IoBagCheckOutline />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleProduct;
