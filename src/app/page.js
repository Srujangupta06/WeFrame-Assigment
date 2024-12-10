
import SubscriberBox from "@/components/SubscriberBox";
import ServicesOverview from "@/components/ServicesOverview";
import { productItemInfo } from "@/constants";
export default function Home() {
  return (
    <div className="py-4">
      <ServicesOverview />
      <SubscriberBox />
    </div>
  );
}
