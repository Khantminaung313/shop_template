const Partners = () => {
	return (
		<div className="container d-flex justify-center flex-wrap items-center max-sm:py-4 py-20 border-t border-d_gray/20 space-x-4 lg:space-x-8">
			<div className="w-16 sm:w-24 lg:w-36 h-[80px] lg:h-[120px] overflow-hidden opacity-70 hover:opacity-100">
				<img className="w-full  object-cover object-center" src="/assets/adidas-svgrepo-com.png" alt="adidas" />
			</div>
            <div className="w-16 sm:w-24 lg:w-36 h-[80px] lg:h-[120px] overflow-hidden opacity-70 hover:opacity-100">
				<img className="w-full object-cover object-center" src="/assets/puma-logo-logo-svgrepo-com.png" alt="puma" />
			</div>
			<div className="w-16 sm:w-24 lg:w-36 h-[80px] lg:h-[120px] overflow-hidden opacity-70 hover:opacity-100">
				<img className="w-full object-cover object-center" src="/assets/brand-nike-svgrepo-com.png" alt="nike" />
			</div>
			<div className="w-16 sm:w-24 lg:w-36 h-[80px] lg:h-[120px] overflow-hidden opacity-70 hover:opacity-100">
				<img className="w-full object-cover object-center" src="/assets/zara-svgrepo-com.png" alt="zara" />
			</div>
		</div>
	);
};

export default Partners;
