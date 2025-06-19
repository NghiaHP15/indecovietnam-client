import Container from "@/components/Container";
import HomeBanner from "@/components/HomeBanner";
import HomeCategory from "@/components/HomeCategory";
import LatestBlog from "@/components/LatestBlog";
import ProductGrid from "@/components/ProductGrid";
import ShopByBrands from "@/components/ShopByBrands";
import { getCategories } from "@/sanity/queries";

const Home = async () => {
  const categories = await getCategories(6);

  return (
    <Container>
      <HomeBanner />
      <ProductGrid />
      <HomeCategory categories={categories}/>
      <ShopByBrands/>
      <LatestBlog/>
    </Container>
  );
}
export default Home;
