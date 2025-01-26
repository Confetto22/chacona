import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";

const SecHeading = ({ currPage, bgPic }) => {
  return (
    <section className={`secheading h-[70vh] ${bgPic}`}>
      <div className="h-full w-full bg-[#000000d2] px-8 py-28 flex items-center justify-center text-stone-100">
        <div className="pageDets flex items-center md:gap-4 gap-2 md:text-[1.7rem] text-[.9rem] tracking-wide">
          <Link
            to={"/"}
            className=" flex items-center gap-1 font-bold underline underline-offset-4 hover:text-[var(--theme-red)] ease-in duration-300 "
          >
            <AiOutlineHome />
            Home
          </Link>{" "}
          <p>-</p> <p className="font-extralight  ">{currPage}</p>
        </div>
      </div>
    </section>
  );
};

export default SecHeading;
