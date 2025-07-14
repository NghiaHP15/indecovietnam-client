import HomeBanner from "@/components/HomeBanner";
import HomeBlog from "@/components/HomeBlog";
import HomeCategories from "@/components/HomeCategory";
import HomeDesign from "@/components/HomeDesign";
import HomeGallery from "@/components/HomeGallery";
import HomeProduct from "@/components/HomeProduct";
import Slider from "@/components/HomeSlider";
import { ProductStatus } from "@/constants/enum";

const Home = async () => {

  return (
    <>
      <Slider/>
      <HomeCategories />
      <HomeBanner/>
      <HomeProduct type={ProductStatus.NEW}/>
      <HomeProduct type={ProductStatus.HOT}/>
      <HomeProduct type={ProductStatus.SALE}/>
      <HomeDesign/>
      <HomeBlog/>
      <HomeGallery/>
    </>
  );
}
export default Home;
