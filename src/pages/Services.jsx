import { useState } from "react";
import SecHeading from "../components/common/SecHeading";
import { FaAirbnb } from "react-icons/fa";

const allServices = [
  {
    name: "Airbnb (Long/Short Stay)",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum voluptatem voluptatibus eos atque provident officiis sapiente iste temporibus. Laboriosam, neque.",
    icon: <FaAirbnb className=" text-[2rem]" />,
  },
  {
    name: "House Parties",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum voluptatem voluptatibus eos atque provident officiis sapiente iste temporibus. Laboriosam, neque.",
    icon: <FaAirbnb className=" text-[2rem]" />,
  },
  {
    name: "Video/Photoshoot",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum voluptatem voluptatibus eos atque provident officiis sapiente iste temporibus. Laboriosam, neque.",
    icon: <FaAirbnb className=" text-[2rem]" />,
  },
  {
    name: "Music/Movie Shoot",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum voluptatem voluptatibus eos atque provident officiis sapiente iste temporibus. Laboriosam, neque.",
    icon: <FaAirbnb className=" text-[2rem]" />,
  },
  {
    name: "Bridal Showers",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum voluptatem voluptatibus eos atque provident officiis sapiente iste temporibus. Laboriosam, neque.",
    icon: <FaAirbnb className=" text-[2rem]" />,
  },
  {
    name: "Bachelors Night",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum voluptatem voluptatibus eos atque provident officiis sapiente iste temporibus. Laboriosam, neque.",
    icon: <FaAirbnb className=" text-[2rem]" />,
  },
  {
    name: "Wedding Engagement",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum voluptatem voluptatibus eos atque provident officiis sapiente iste temporibus. Laboriosam, neque.",
    icon: <FaAirbnb className=" text-[2rem]" />,
  },
  {
    name: "Movie/Games Night",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum voluptatem voluptatibus eos atque provident officiis sapiente iste temporibus. Laboriosam, neque.",
    icon: <FaAirbnb className=" text-[2rem]" />,
  },
];

const Services = () => {
  const [hovered, setHovered] = useState("");
  return (
    <section className="">
      <SecHeading
        currPage={"Services"}
        bgPic={
          "bg-[url('https://res.cloudinary.com/dv9aqxptd/image/upload/v1737551381/chacona/modern-urban-buildings-view_vkt1dx.jpg')]"
        }
      />
      <div className="allServices grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-8 gap-6">
        {allServices.map((service) => (
          <div
            key={service.name}
            className={`single_service  ${
              hovered === service.name
                ? "bg-[url('https://img.freepik.com/free-photo/vertical-low-angle-shot-modern-glass-business-buildings-touching-sky_181624-5904.jpg?t=st=1736959095~exp=1736962695~hmac=c531f1f072a07152d7c514831452e39bf3360a0db439aad1cc099708a836c76c&w=360')] ease-in duration-300"
                : "bg-[#FBFBFB]"
            } bg-cover bg-center  max-w-[400px] rounded-sm`}
            onMouseOver={() => setHovered(service.name)}
            onMouseOut={() => setHovered("")}
          >
            <div
              className={`cardCover  flex flex-col items-start gap-6 py-8 px-6  ${
                hovered === service.name
                  ? "bg-[#000000a7] text-stone-200"
                  : "bg-transparent "
              }`}
            >
              <div
                className={`p-7  rounded-md ease-in duration-300  ${
                  hovered === service.name
                    ? "bg-[var(--theme-red)] text-white "
                    : "bg-white text-[var(--theme-red)]"
                }`}
              >
                {service.icon}
              </div>

              <h2 className="text-[1.7rem] uppercase font-semibold">
                {service.name}
              </h2>
              <p
                className={` ${
                  hovered === service.name ? "text-stone-200" : "text-stone-600"
                }`}
              >
                {service.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
