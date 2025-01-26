import SecHeading from "../components/common/SecHeading";
import { IoBedOutline } from "react-icons/io5";
import { PiBathtub } from "react-icons/pi";
import { RxRulerSquare } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { properties } from "../components/common/Properties";
// import { properties } from "../components/common/Properties";

const Listings = () => {
  const navigate = useNavigate();
  return (
    <section className="listings">
      <SecHeading
        currPage={"Listings"}
        bgPic={
          "bg-[url('https://res.cloudinary.com/dv9aqxptd/image/upload/v1737551381/chacona/modern-urban-buildings-view_vkt1dx.jpg')]"
        }
      />
      <section className="p-8 flex flex-col gap-12">
        <div className="flex flex-col gap-5 py-2 listing_heading">
          <p className="font-[400] text-[2rem] text-stone-800">
            Properties Listing
          </p>
          <h3>
            showing {properties.length}{" "}
            {properties.length > 1 ? "properties" : "property"}
          </h3>
          <hr className=" mx-auto h-[0.5px] bg-[#e4e4e4] w-full border-none" />
        </div>
        <div className="all_properties grid grid-cols-1 md:grid-cols-3 gap-y-8 gap-x-5">
          {properties.map((property) => (
            <div
              className="property max-w-[600px] rounded-lg bg-[#fbfbfb] "
              key={property.name}
            >
              <div className="overflow-hidden rounded-t-lg">
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full aspect-[16/8] object-cover rounded-t-lg hover:scale-110 ease-in duration-500"
                />
              </div>
              <div className="p-5 flex flex-col gap-2">
                <p className="text-[1.5rem] font-semibold text-stone-800">
                  {property.name}
                </p>
                <p className="text-[.9rem] text-[#0c3251] font-bold ">
                  <span className="text-[1.2rem] text-[var(--theme-red)]">
                    {property.moreDets.price}
                  </span>{" "}
                  <span className="text-stone-600 font-[300]">/ night</span>
                </p>
                <p className="text-stone-500">{property.desc}</p>
                <div className="roomDets flex flex-row pr-7 items-center justify-between  text-[.8rem] font-semibold">
                  <div className="flex items-center gap-5">
                    <p>
                      <IoBedOutline /> Bed : {property.roomDets.beds}
                    </p>
                    <p>|</p>
                    <p>
                      <PiBathtub /> Baths : {property.roomDets.Baths}
                    </p>
                    <p>|</p>
                    <p>
                      <RxRulerSquare /> {property.roomDets.area}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => navigate(`/listings/${property.name}`)}
                  className="capitalize  px-8 py-2 rounded-full border-2  hover:border-[var(--theme-red)] border-dotted text-[.8rem] hover:bg-[#f9ece9] hover:text-[var(--theme-red)] ease-in duration-200 "
                >
                  details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Listings;
