import Featured from "@/components/Featured";
import Header from "@/components/Header";
import NewProducts from "@/components/NewProducts";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

export default function HomePage({FeaturedProduct, newProducts}) {

  return (
    <div>
      <Header />
      <Featured product={FeaturedProduct} />
      <NewProducts products={newProducts} />
    </div>
  );
}



export async function getServerSideProps(){
  const featuredProductId = '6700054c409b6f7a8bcbfb22'
  await mongooseConnect()
  const FeaturedProduct =await Product.findById(featuredProductId)
  const newProducts = await Product.find({},null,{sort:{'_id': -1},limit: 8})
  return{
    props:{
      FeaturedProduct: JSON.parse(JSON.stringify(FeaturedProduct)),
      newProducts: JSON.parse(JSON.stringify(newProducts)),
    },   
  }
}