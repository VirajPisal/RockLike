import ServiceDetailPage from "../components/services/ServiceDetailPage";
import { allServicesDetailData } from "../data/servicesDetailedData";

export default function Branding() {
  const config = allServicesDetailData["branding"];
  return <ServiceDetailPage config={config} />;
}
