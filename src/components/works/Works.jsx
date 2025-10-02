const Works = ({ image1, image2 }) => {
  return (
    <>
      <div className="w-1/2 group  h-full relative hover:rounded-4xl overflow-hidden transition-all">
        <img className="h-full w-full object-cover" src={image1} alt="" />
        <div className="opacity-0 transition-all group-hover:opacity-100 absolute top-0 flex items-center justify-center left-0 h-full w-full bg-black/10">
          <h2 className=" uppercase text-4xl font-[font-300] border-2 px-4 pt-2 text-white border-white rounded-full">
            View Projects
          </h2>
        </div>
      </div>
      <div className="group relative w-1/2 h-full hover:rounded-4xl overflow-hidden bg-blue-500 ">
        <img className="h-full w-full object-cover" src={image2} alt="" />
        <div className="opacity-0 transition-all group-hover:opacity-100 absolute top-0 flex items-center justify-center left-0 h-full w-full bg-black/10">
          <h2 className=" uppercase text-4xl font-[font-300] border-2 px-4 pt-2 text-white border-white rounded-full">
            View Projects
          </h2>
        </div>
      </div>
    </>
  );
};

export default Works;
