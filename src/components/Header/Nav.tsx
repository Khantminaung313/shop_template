import { Link, useLocation } from "react-router-dom";

const Nav = ({catData}) => {

	const location = useLocation();

	const renderCatData = (dataName, title) => {
		return (
			<div className="pl-4">
				<h5 className="font-semibold text-d_gray text-xl mb-2">
					{title}
				</h5>
				<ul>
					{dataName.map((data, index) => (
						<li
							key={index}
							className="hover:text-d_blue cursor-pointer capitalize mb-1 group"
						>
							<Link to={data.link}>{data.name}</Link>
						</li>
					))}
				</ul>
			</div>
		);
	};

	return (
		<>
			<div className="container hidden lg:block border-b border-d_gray/10 relative">
				<ul className="d-flex justify-center items-center gap-4 nav-list">
					<li className="categories-nav group py-3">
						<span className={`${location.pathname === "/" && "active"}`}>
							<Link to={`/`}>Home</Link>
						</span>
					</li>
					<li className="categories-nav group py-3">
						<span className={`${location.pathname === "/products" && "active"}`}>Shoe</span>
						<div className="categories-data-container">
							<div className="nav-data p-4 w-full absolute left-0 top-[80%] bg-d_white grid grid-cols-4 border-b border-x border-d_gray/20 divide-x divide-d_gray/10">
								{renderCatData(catData.shoeData, "Shoes")}
								{renderCatData(catData.WomenDatas, "Women's")}
								{renderCatData(catData.MenDatas, "Men's")}
								{renderCatData(catData.kidData, "Kid's")}
							</div>
						</div>
					</li>
					<li className="categories-nav group py-3">
						<span>Shorts</span>
						<div className="categories-data-container shadow-sm ">
							<div className="nav-data p-4 w-full absolute left-0 top-[80%] bg-d_white grid grid-cols-4 border-b border-x border-d_gray/20 divide-x divide-d_gray/10">
								{renderCatData(catData.shortsData, "Shorts")}
								{renderCatData(catData.kidData, "Kid's")}
								{renderCatData(catData.MenDatas, "Men's")}
								{renderCatData(catData.WomenDatas, "Women's")}
							</div>
						</div>
					</li>
					<li className="categories-nav group py-3">
						<span>Glasses</span>
						<div className="categories-data-container">
							<div className="nav-data p-4 w-full absolute left-0 top-[80%] bg-d_white grid grid-cols-5 border-b border-x border-d_gray/20 divide-x divide-d_gray/10">
								{renderCatData(catData.glassesData, "Glasses")}
								{renderCatData(catData.sunGlassData, "Sun Glasses")}
								{renderCatData(catData.kidData, "Kid's")}
								{renderCatData(catData.MenDatas, "Men's")}
								{renderCatData(catData.WomenDatas, "Women's")}
							</div>
						</div>
					</li>
					<li className="categories-nav group py-3">
						<span className={`${location.pathname === "/about" && "active"}`}>
							<Link to={`/about-us`}>About Us</Link>
						</span>
					</li>
					<li className="categories-nav group py-3">
						<span className={`${location.pathname === "/contact-us" && "active"}`}>
							<Link to={`/contact-us`}>Contact Us</Link>
						</span>
					</li>
				</ul>
			</div>
		</>
	);
};

export default Nav;
