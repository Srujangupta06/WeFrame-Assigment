import { services } from "@/constants";
const ServicesOverview = () => {
  return (
    <section className="mb-8  px-6 lg:px-8">
      <div className="flex flex-col items-center py-4">
        <h3 className="text-[#393939] text-xl mb-3">
          On s’occupe de{" "}
          <span className="text-[#5CD2DD] font-semibold">tout</span>
        </h3>
        <p className="text-[#9C9C9C] text-[16px] mb-6">
          Office ipsum you must be muted. It meeting commitment busy pain.
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
          {services.map((service) => (
            <li className="flex flex-col items-center gap-y-2 mt-4 mx-4">
              <img src={service.iconUrl} alt={service.title} className="w-12 h-12" />
              <h4 className="text-[#393939] text-sm">{service.title}</h4>
              <p className="text-[#9C9C9C] text-sm">{service.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default ServicesOverview;
