// import mainBg from "../assets/chacona1.jpg";

const HomePage = () => {
  return (
    <section className="homepage h-screen w-screen">
      <div className="cover flex flex-col items-center justify-center gap-9 px-8">
        <h1 className="text-stone-100 capitalize md:text-5  md:text-6xl text-4xl text-center underline-offset-4">
          Your Perfect Space For <br />{" "}
          <span className="underline">every occasion</span>
        </h1>
        <button className="exploreBt text-stone-100 bg-[var(--theme-red)] px-12 py-3 rounded-sm capitalize text-[1.1rem] tracking-wider hover:text-[var(--theme-red)] hover:bg-white ease-in duration-300">
          explore
        </button>
      </div>
    </section>
  );
};

export default HomePage;
