import { IoStar, IoStarHalfOutline, IoStarOutline } from "react-icons/io5";

const WhiteLIst = () => {
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
  return (
    <div className="container py-4">
        <h1 className="text-2xl lg:text-3xl font-bold text-d_gray text-center my-4">Your WhiteList</h1>
        <div className="flex justify-between items-start lg:items-center py-2 border-b border-d_gray/20 grid-rows-1 max-h-[100px] sm:max-h-[200px] line-clamp-1">
            <div className="img-container min-w-[100px] w-40 min-h-[100px] max-h-32">
                <img className="w-full h-full object-cover object-center" src="/assets/slide1.jpg" alt="" />
            </div>
            <div className="px-2 text-start space-y-1 sm:space-y-2 lg:space-y-4">
                <h5 className="text-base lg:text-xl font-bold">Air Max L 350 </h5>
                <div className="text-orange-500">
                    {renderRating(4.5)}
                </div>
                <p className="text-d_gray text-sm lg:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi voluptatem, dolores quidem soluta tempore ipsam.</p>

            </div>
            <div className="d-flex justify-center items-center min-w-[100px] pt-4 lg:pt-0">
                <button className="text-white bg-d_blue text-sm lg:text-base px-2 py-2 lg:px-4 lg:py-2 rounded">View Product</button>
            </div>
        </div>
    </div>
  )
}

export default WhiteLIst