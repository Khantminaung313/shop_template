import Header from "./Header";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import TopHeader from "./TopHeader";

const HeaderSection = () => {
	const categoriesData ={
			shoeData : [
				{
					name: "Air Force",
					link: "/products?catSlug=air-force",
				},
				{
					name: "Air Max",
					link: "/products?catSlug=air-max",
				},
				{
					name: "Air Max",
					link: "/products?catSlug=air-max",
				},
				{
					name: "Air Max",
					link: "/products?catSlug=air-max",
				},
			],
			WomenDatas : [
				{
					name: `women's T-shirt`,
					link: "products?catSlug=women-t-shirt",
				},
				{
					name: `women's T-shirt`,
					link: "products?catSlug=women-t-shirt",
				},
				{
					name: `women's T-shirt`,
					link: "products?catSlug=women-t-shirt",
				},
				{
					name: `women's T-shirt`,
					link: "products?catSlug=women-t-shirt",
				},
			],
			MenDatas : [
				{
					name: `men's T-shirt`,
					link: `products?catSlug=men-t-shirt`,
				},
				{
					name: `men's T-shirt`,
					link: `products?catSlug=men-t-shirt`,
				},
				{
					name: `men's T-shirt`,
					link: `products?catSlug=men-t-shirt`,
				},
			],
			kidData : [
				{
					name: `kid's shirt`,
					link: `products?catSlug=kid-t-shirt`,
				},
				{
					name: `kid's shirt`,
					link: `products?catSlug=kid-t-shirt`,
				},
				{
					name: `kid's shirt`,
					link: `products?catSlug=kid-t-shirt`,
				},
				{
					name: `kid's shirt`,
					link: `products?catSlug=kid-t-shirt`,
				},
			],
			shortsData : [
				{
					name: "Red short",
					link: "products?catSlug=red-shorts",
				},
				{
					name: "Blue short",
					link: "products?catSlug=blue-shorts",
				},
				{
					name: "White short",
					link: "products?catSlug=white-shorts",
				},
			],
			glassesData : [
				{
					name: "Glass 1",
					link: "products?catSlug=glass1",
				},
				{
					name: "Glass 2",
					link: "products?catSlug=glass2",
				},
				{
					name: "Glass 3",
					link: "products?catSlug=glass3",
				},
				{
					name: "Glass 4",
					link: "products?catSlug=glass4",
				},
			],
			sunGlassData : [
				{
					name: "Sun Glass 1",
					link: "products?catSlug=sun-glass-1",
				},
				{
					name: "Sun Glass 2",
					link: "products?catSlug=sun-glass-2",
				},
				{
					name: "Sun Glass 3",
					link: "products?catSlug=sun-glass-3",
				},
				{
					name: "Sun Glass 4",
					link: "products?catSlug=sun-glass-4",
				},
				{
					name: "Sun Glass 5",
					link: "products?catSlug=sun-glass-5",
				},
			]
		};
	const categories = [
		{
			name: "Shorts",
			link: "/products?catSlug=shorts",
			subCats: [
				{
					name: "Women's",
					link: "/products?catSlug=shorts/women's",
					subCats: [
						{
							name: `women's T-shirt`,
							link: "products?catSlug=women-t-shirt",
						},
						{
							name: `women's T-shirt`,
							link: "products?catSlug=women-t-shirt",
						},
						{
							name: `women's T-shirt`,
							link: "products?catSlug=women-t-shirt",
						},
						{
							name: `women's T-shirt`,
							link: "products?catSlug=women-t-shirt",
						},
					]
				},
				{
					name: "Men's",
					link: "products/catSlug=shorts/men's",
					subCats: [
						{
							name: `men's T-shirt`,
							link: `products?catSlug=men-t-shirt`,
						},
						{
							name: `men's T-shirt`,
							link: `products?catSlug=men-t-shirt`,
						},
						{
							name: `men's T-shirt`,
							link: `products?catSlug=men-t-shirt`,
						},
					]
				},
				{
					name: "Kid's",
					link: "products/catSlug=shorts/kid's",
					subCats: [
						{
							name: `kid's shirt`,
							link: `products?catSlug=kid-t-shirt`,
						},
						{
							name: `kid's shirt`,
							link: `products?catSlug=kid-t-shirt`,
						},
						{
							name: `kid's shirt`,
							link: `products?catSlug=kid-t-shirt`,
						},
						{
							name: `kid's shirt`,
							link: `products?catSlug=kid-t-shirt`,
						},
					]
				}
				
			]
		},
	]
	const navLinks = [
		{
			name: "Home",
			slug: "/"
		},
		{
			name: "Categories",
			slug: "/categories"
		},
		{
			name: "About-us",
			slug: "/about-us"
		},
		{
			name: "Contact-us",
			slug: "/contact-us"
		},
	]
	return (
		<>
			<div className="fixed w-full left-0 top-0 z-40 bg-d_white">
				<TopHeader />
				<Header />
				<Nav catData={categoriesData}/>
				<MobileNav categories={categories} navLinks={navLinks}/>
			</div>
		</>
	);
};

export default HeaderSection;
