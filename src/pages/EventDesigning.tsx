import ServiceDetailPage from "../components/services/ServiceDetailPage";
import { allServicesDetailData } from "../data/servicesDetailedData";

export default function EventDesigning() {
  const config = allServicesDetailData["event-designing"];
  return <ServiceDetailPage config={config} />;
}
