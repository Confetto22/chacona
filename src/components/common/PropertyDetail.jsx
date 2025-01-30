import { useParams } from "react-router-dom";
import { IoBedOutline } from "react-icons/io5";
import { PiBathtub } from "react-icons/pi";
import { RxRulerSquare } from "react-icons/rx";
import SecHeading from "./SecHeading";
import { properties } from "./Properties";
import { Link } from "react-router-dom";
import { LuSofa } from "react-icons/lu";
import { SlLocationPin } from "react-icons/sl";
// import { IoMdCheckboxOutline } from "react-icons/io";
import { IoWifiOutline } from "react-icons/io5";
import { TbToolsKitchen2 } from "react-icons/tb";
import { AiOutlineCar } from "react-icons/ai";
import { MdOutlinePool } from "react-icons/md";
import { LuCctv } from "react-icons/lu";
import { FaPowerOff } from "react-icons/fa6";
import { MdOutlineLocalLaundryService } from "react-icons/md";
import { SiAdguard } from "react-icons/si";
import { TbDoorExit } from "react-icons/tb";
import { PiBathtubLight } from "react-icons/pi";
import { TbAirConditioning } from "react-icons/tb";
import { LiaTelegram } from "react-icons/lia";
import { FaWhatsapp } from "react-icons/fa";

// import { FaInstagram } from "react-icons/fa";
// import { FaWhatsapp } from "react-icons/fa";
// import { FaFacebookF } from "react-icons/fa";
// import { FiPhone } from "react-icons/fi";

// const reachOut = [
//   {
//     name: "Instagram",
//     icon: <FaInstagram />,
//     refLink: "#",
//   },
//   {
//     name: "WhatsApp",
//     icon: <FaWhatsapp />,
//     refLink: "#",
//   },
//   {
//     name: "Facebook",
//     icon: <FaFacebookF />,
//     refLink: "#",
//   },
//   {
//     name: "Phone",
//     icon: <FiPhone />,
//     refLink: "#",
//   },
// ];

export const features = [
  {
    name: "Free Wi-Fi",
    icon: <IoWifiOutline />,
  },
  {
    name: "Kitchen",
    icon: <TbToolsKitchen2 />,
  },
  {
    name: "Free Parking Space",
    icon: <AiOutlineCar />,
  },
  {
    name: "Pool",
    icon: <MdOutlinePool />,
  },
  {
    name: "Security Cameras",
    icon: <LuCctv />,
  },
  {
    name: "Power Backup",
    icon: <FaPowerOff />,
  },
  {
    name: "Laundry Service",
    icon: <MdOutlineLocalLaundryService />,
  },
  {
    name: "Security Guard",
    icon: <SiAdguard />,
  },
  {
    name: "Emergency Exit",
    icon: <TbDoorExit />,
  },
  {
    name: "Jacuzzi",
    icon: <PiBathtubLight />,
  },
  {
    name: "Air Conditioning",
    icon: <TbAirConditioning />,
  },
];

const PropertyDetail = () => {
  const { name } = useParams();

  const filterProperty = properties.filter(
    (newFilter) => newFilter.name === name
  );
  console.log(filterProperty);
  // console.log(filterProperty[0].);
  const iconStyle = "text-[1.2rem] font-semibold";

  return (
    <section className="property_detail">
      <SecHeading
        currPage={`Listings / Property Details`}
        bgPic={
          "bg-[url('https://res.cloudinary.com/dv9aqxptd/image/upload/v1737551381/chacona/modern-urban-buildings-view_vkt1dx.jpg')]"
        }
      />

      <section className="more_dets_body flex flex-col gap-8 p-8">
        <div className="more_detail_head  shadow-[var(--soft-shadow)]  mt-12 p-5 py-8 rounded-md flex flex-col items-start md:gap-2 gap-5">
          <p className="text-[1.7rem] font-bold">{name}</p>
          <div className="flex  w-full md:items-center items-start justify-between flex-col md:flex-row md:gap-7 gap-3">
            <Link
              to={"https://maps.app.goo.gl/5nkwC2V6YZ7R1t3B7"}
              target="_blank"
              className="flex items-center gap-1 text-stone-500 ease-in duration-200 hover:text-[var(--theme-red)] hover:underline underline-offset-2 text-[.9rem]"
            >
              <SlLocationPin /> North Legon, Accra Ghana
            </Link>
            <div className="flex  items-center gap-2 ">
              <p className="font-semibold md:text-[1.4rem] px-1 rounded-md bg-[var(--theme-red)] text-[#fff]">
                {filterProperty[0].moreDets.price}
              </p>
              <p className="font-[300] md:text-[1.1rem] text-stone-500">
                / night
              </p>
            </div>
          </div>

          <div className=" flex items-center gap-5 flex-wrap text-[.9rem] text-stone-500">
            <p>
              <IoBedOutline className={iconStyle} />{" "}
              {filterProperty[0].moreDets.beds}
            </p>

            <p>
              <PiBathtub className={iconStyle} />{" "}
              {filterProperty[0].moreDets.baths}
            </p>

            <p>
              <LuSofa className={iconStyle} />{" "}
              {filterProperty[0].moreDets.rooms}
            </p>
            <p>
              <RxRulerSquare className={iconStyle} />{" "}
              {filterProperty[0].moreDets.area}
            </p>
          </div>
        </div>
        <section className="flex flex-col md:flex-row md:items-start md:gap-8 gap-14">
          <section className="more_dets_area md:max-w-[70%] rounded-lg md:py-8 md:px-10 p-4 flex flex-col items-start gap-14">
            <div className="flex flex-col items-start gap-6">
              <div className="property_img rounded-md w-full">
                <img
                  src={filterProperty[0].moreDets.detsImg}
                  alt={name}
                  className="w-full rounded-md aspect-[4/3] max-h-[500px] object-cover"
                />
              </div>
              <p className="font-semibold  md:text-[1.4rem] tracking-wide">
                Property Brief
              </p>
              <p className="md:text-[.9rem] text-[.8rem] text-stone-500  md:leading-7 md:pr-16 tracking-[1px]">
                {filterProperty[0].moreDets.brief}
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <h2 className="md:text-[1.4rem] font-semibold">
                Features & Amenities
              </h2>
              <div className="amenities grid grid-cols-2   w-full md:grid-cols-3 gap-x-14 gap-y-7">
                {filterProperty[0].moreDets.features.map((feature) => (
                  <p
                    className="flex items-center gap-1 text-[.8rem] md:text-[.9rem] font-semibold text-stone-600"
                    key={feature.name}
                  >
                    <span className="text-[1.5rem] text-[var(--theme-red)]">
                      {feature.icon}
                    </span>
                    {feature.name}
                  </p>
                ))}
              </div>
            </div>
            <div className="w-full flex flex-col items-start gap-5">
              <h2 className="md:text-[1.4rem] font-semibold">Location</h2>
              <Link
                to={"https://maps.app.goo.gl/5nkwC2V6YZ7R1t3B7"}
                target="_blank"
                className="flex items-center gap-1 text-stone-500 ease-in duration-200 hover:text-[var(--theme-red)] hover:underline underline-offset-2 text-[.9rem]"
              >
                <SlLocationPin /> North Legon, Accra Ghana
              </Link>

              <div className=" w-full min-h-[50vh] rounded-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2850.754723939817!2d-0.1921088353708633!3d5.697435679280006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9d725cb656df%3A0xae091aa8588e3ca4!2sChacona%20Luxury%20Properties!5e0!3m2!1sen!2sgh!4v1737731105174!5m2!1sen!2sgh"
                  className="w-full min-h-[50vh] rounded-md"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <p className="capitalize text-stone-500">
              chacona luxury properties
            </p>
          </section>
          <div className="side_info min-h-[60vh] max-h-[80vh] flex flex-col gap-4  w-full rounded-md md:sticky md:top-0 p-5">
            {/* <h2 className="md:text-[1.4rem] font-semibold capitalize">
              contact
            </h2>
            <p> Reach us through the links below</p> */}
            <h2 className="text-[1.2rem] md:text-[1.4rem] font-semibold text-stone-700">
              Message To Book
            </h2>
            <form
              className=" contact_form grid grid-cols-1 gap-3"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="text"
                className="border "
                placeholder="Name *"
                required
              />
              <input type="email" className="border " placeholder="Email" />
              <input
                type="tel"
                className="border "
                placeholder="Phone No. *"
                required
                minLength={"10"}
                maxLength={"10"}
              />
              <textarea
                name="description"
                placeholder="Message *"
                required
                className="border "
              ></textarea>
              <button className="text-[.9rem] md:text-[1rem] rounded-md py-2 w-full duration-200 ease-in capitalize hover:bg-[#fdfff5] flex items-center gap-1 justify-center hover:gap-3">
                <span>
                  <LiaTelegram />
                </span>{" "}
                book now
              </button>
            </form>
            <Link
              to={"https://wa.me/message/V2KUXF7PS74CP1"}
              className="whastapp_btn bg-[#17980E] text-white hover:bg-white hover:text-[#17980e] flex items-center justify-center gap-1 hover:gap-3 py-2 rounded-md ease-in duration-300 w-full"
              target="_blank"
            >
              {" "}
              <span>
                <FaWhatsapp />
              </span>{" "}
              WhatsApp Us!
            </Link>
          </div>
        </section>
      </section>
    </section>
  );
};

export default PropertyDetail;
