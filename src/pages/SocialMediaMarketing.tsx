import ServiceDetailPage from "../components/services/ServiceDetailPage";
import { allServicesDetailData } from "../data/servicesDetailedData";

export default function SocialMediaMarketing() {
  const config = allServicesDetailData["social-media-marketing"];
  return <ServiceDetailPage config={config} />;
}
