import { services } from "@/constants";
const ServicesOverview = () => {
  return (
    <section className="mb-5">
      <div className="flex flex-col items-center py-4">
        <h3 className="text-[#393939] text-xl">
          On s’occupe de{" "}
          <span className="text-[#5CD2DD] font-semibold mb-2">tout</span>
        </h3>
        <p className="text-[#9C9C9C] text-[16px] mb-2">
          Office ipsum you must be muted. It meeting commitment busy pain.
        </p>
        <ul className="flex items-center justify-center gap-x-16 mt-8">
          {services.map((service) => (
            <li className="flex flex-col items-center gap-y-2">
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
