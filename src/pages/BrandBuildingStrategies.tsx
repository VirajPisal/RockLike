import ServiceDetailPage from "../components/services/ServiceDetailPage";
import { allServicesDetailData } from "../data/servicesDetailedData";

export default function BrandBuildingStrategies() {
  const config = allServicesDetailData["brand-building-strategies"];
  return <ServiceDetailPage config={config} />;
}
