/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Slide = ({ name, description, link, image }) => {
  return (
    <div className="flex flex-col lg:flex-row  gap-[86px] bg-[#1313130D] lg:rounded-3xl w-full py-[136px] px-[120px]">
      {/* Text Section */}
      <div className="flex-1">
        <h1 className="text-[#131313] font-bold text-[56px] mb-4">{name}</h1>
        <p className="mb-8">{description}</p>
        <Link
          to={link}
          className="px-[28px] py-[10px] rounded-lg bg-[#23BE0A] text-lg font-semibold text-white hover:bg-gray-500 ease-in duration-300"
        >
          Details
        </Link>
      </div>
      {/* Image Section */}
      <div className="mx-auto">
        <img className="w-[318px] h-[394px] mx-auto" src={image} alt="" />
      </div>
    </div>
  );
};

export default Slide;
