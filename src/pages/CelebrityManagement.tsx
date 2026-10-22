import ServiceDetailPage from "../components/services/ServiceDetailPage";
import { allServicesDetailData } from "../data/servicesDetailedData";

export default function CelebrityManagement() {
  const config = allServicesDetailData["celebrity-management"];
  return <ServiceDetailPage config={config} />;
}
