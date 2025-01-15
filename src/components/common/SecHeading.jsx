import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";

const SecHeading = ({ currPage }) => {
  return (
    <section className="secheading h-[70vh] ">
      <div className="h-full w-full bg-[#000000d2] px-8 py-28 flex items-center justify-center text-stone-100">
        <div className="pageDets flex items-center gap-4 text-[1.7rem] tracking-wide">
          <Link
            to={"/"}
            className=" flex items-center gap-1 font-bold underline underline-offset-4 hover:text-[var(--theme-red)] ease-in duration-300"
          >
            <AiOutlineHome />
            Home
          </Link>{" "}
          <p>-</p> <p className="font-extralight">{currPage}</p>
        </div>
      </div>
    </section>
  );
};

export default SecHeading;
