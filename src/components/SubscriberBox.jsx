const SubscriberBox = () => {
  return (
    <section className="mb-5">
      <div className="px-6  flex flex-col lg:items-start gap-y-4 lg:gap-x-4  lg:flex-row lg:px-8 ">
        <div className="w-full lg:w-6/12">
          <img
            src="https://res.cloudinary.com/djv3sgbxn/image/upload/v1733679731/subscriber-box_as8rql.png"
            alt="image"
            className="rounded-lg"
          />
        </div>
        <div className="w-full lg:w-6/12 bg-[#FFF3F9] rounded-lg lg:px-4 lg:py-4 px-2 py-2">
          <h2 className="font-semibold text-2xl mb-2">
            S’inscrire & économiser<span className="text-[#5CD2DD]"> 10%</span>
          </h2>
          <p className="text-[#BDA2B0] text-[16px] mb-2">
            Office ipsum you must be muted. Synergize helicopter prioritize
            anyway job due harvest most opportunity didn't. Yet busy any meeting
            shark light marginalised 4-blocker message. Productize corporate
            nail caught synergy highlights lunch. Company another pushback items
            dear or any.
          </p>
          <div className="md:flex md:justify-between md:items-center">
            <input
              type="email"
              className="border-[1px] border-[#F5E1EB] text-[#A68A98] text-sm w-full md:w-8/12 px-4 py-2 outline-none rounded-md mb-2"
              placeholder="john@doe.com"
            />
            <button
              className="text-sm text-white bg-[#5CD2DD] flex items-center gap-x-2 px-4 py-2 rounded-md border-none outline-none hover:bg-[#6ebcc3] hover:transition-all duration-300"
              
            >
              S’inscrire
              <img
                src="https://res.cloudinary.com/djv3sgbxn/image/upload/v1733670568/arrow-right-icon_vl7no1.png"
                className="w-[16px]"
                alt="arrow-right"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SubscriberBox;
