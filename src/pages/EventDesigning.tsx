import ServiceDetailPage from "../components/services/ServiceDetailPage";
import { allServicesDetailData } from "../data/servicesDetailedData";
import EventPortfolioSection from "../components/events/EventPortfolioSection";

export default function EventDesigning() {
  const config = allServicesDetailData["event-designing"];
  return (
    <div>
      <ServiceDetailPage config={config} />
      <EventPortfolioSection showTitle={true} />
    </div>
  );
}
