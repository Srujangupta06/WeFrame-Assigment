const SectionTitle = ({ mainHeading, link }) => {
  return (
    <div className="lg:flex lg:justify-between lg:items-center lg:px-8 px-6">
      <h2 className="text-xl font-semibold text-[#393939] lg:text-2xl lg:font-normal">
        {mainHeading}
      </h2>
      <h5 className="underline text-[14px] text-[#393939] cursor-pointer my-4">
        {link}
      </h5>
    </div>
  );
};

export default SectionTitle;
