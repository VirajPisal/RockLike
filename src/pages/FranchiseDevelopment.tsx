import ServiceDetailPage from "../components/services/ServiceDetailPage";
import { allServicesDetailData } from "../data/servicesDetailedData";

export default function FranchiseDevelopment() {
  const config = allServicesDetailData["franchise-development"];
  return <ServiceDetailPage config={config} />;
}
