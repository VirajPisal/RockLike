import ServiceDetailPage from "../components/services/ServiceDetailPage";
import { allServicesDetailData } from "../data/servicesDetailedData";

export default function VideoProduction() {
  const config = allServicesDetailData["video-production"];
  return <ServiceDetailPage config={config} />;
}
