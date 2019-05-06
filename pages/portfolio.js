import Navibar from "../components/Navibar";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";
import imageData from "../components/image-data";
export default function Index() {
  return (
    <div>
      <Navibar />
      <Portfolio images={imageData} />
      <Footer />
    </div>
  );
}
