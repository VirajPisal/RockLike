import ServiceDetailPage from "../components/services/ServiceDetailPage";
import { allServicesDetailData } from "../data/servicesDetailedData";

export default function PerformanceMarketing() {
  const config = allServicesDetailData["performance-marketing"];
  return <ServiceDetailPage config={config} />;
}
