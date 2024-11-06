
const Apperance = () => {
  return (
    <div className='min-h-[50vh] max-w-lg mx-auto'>
      <div>
        <h1 className="text-d_gray underline font-bold italic mb-4 text-xl">Select Themes</h1>
        <div className="d-flex justify-between">
        <div>
          <label className="text-lg text-d_gray font-bold mb-2" htmlFor="dark">Dark Theme</label>
          <div id="dark" className="w-44 h-32 rounded-md border-4 border-d_gray/20 hover:border-d_blue transition-all duration-100 ease-linear overflow-hidden">
            <img className="w-full h-full object-cover object-center" src="https://images.pexels.com/photos/365633/pexels-photo-365633.jpeg?auto=compress&cs=tinysrgb&w=1280" alt="" />
          </div>
        </div>
        <div>
          <label className="text-lg text-d_gray font-bold mb-2" htmlFor="light">Light Theme</label>
          <div id="light" className="w-44 h-32 rounded-md border-4 border-d_gray/20 hover:border-d_blue transition-all duration-100 ease-linear overflow-hidden">
            <img className="w-full h-full object-cover object-center" src="https://images.pexels.com/photos/531972/pexels-photo-531972.jpeg?auto=compress&cs=tinysrgb&w=1280" alt="" />
          </div>
        </div>
      </div>

      </div>
      <div className="d-flex space-x-4 items-center mt-12">
        <span>Select Colors</span>
        <div>
          <ul className="d-flex space-x-2 items-center">
            <li className="w-10 h-10 rounded-full bg-red-500 border-2 border-d_gray/80 hover:border-d_black"></li>
            <li className="w-10 h-10 rounded-full bg-blue-500 border-2 border-d_gray/80 hover:border-d_black"></li>
            <li className="w-10 h-10 rounded-full bg-green-500 border-2 border-d_gray/80 hover:border-d_black"></li>
            <li className="w-10 h-10 rounded-full bg-orange-500 border-2 border-d_gray/80 hover:border-d_black"></li>
            <li className="w-10 h-10 rounded-full bg-purple-500 border-2 border-d_gray/80 hover:border-d_black"></li>
            <li className="w-10 h-10 rounded-full bg-pink-500 border-2 border-d_gray/80 hover:border-d_black"></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Apperance