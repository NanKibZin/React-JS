import { Categories,mockData } from "../assets/mockData";
import HeroImage from "../assets/Img/Screenshot 2024-12-28 083353.png";
import InfoSection from "../components/InfoSection";
import CategorySection from "../components/CategorySection";
import { setProducts } from "../redux/productSlice";
import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import Shop from "./Shop";

const Home = () => {
  const dispatch=useDispatch();
  const products=useSelector(state=>state.product)
  useEffect(()=>{
  dispatch(setProducts(mockData));
  }, [])
  return (
    <>
    
    <div className=" bg-white mt-2 px-4 md:px16 lg:px-24">
      <div className="container mx-auto py-4 flex flex-col md:flex-row">
      <div className="w-full md:w-3/12 ">
        <div className="bg-red-600 text-white text-xs font-bold px-2 py-2.5">SHOP BY CATEGORIES</div>
        <ul className="space-y-4 bg-gray-100 p-3 border">
          {Categories.map((categories, index) => (
            <li key={index} className="flex items-center text-sm font-medium">
              <div className="w-3 h-2 border border-red-500 rounded-full mr-2"></div>
              {categories}
            </li>
          ))}
        </ul>
    </div>
      <div className="w-full md:w-9/12 mt-8 md:mt-0 h-95 relative">
        <img 
          src={HeroImage}
          alt=""
          className=" h-96 w-full"
        />
        <div className=" absolute top-16 left-8">
          <p className=" text-gray-600 mb-4 ">Code with Yousaf</p>
          <h2 className=" text-3xl font-bold">WELCOME TO E-SHOP</h2>
          <p className="text-xl mt-2.5 font-bold text-gray-800">MILLIONS+ PRODUCT</p>
          <button className=" bg-red-600 px-8 py-1.5 text-white mt-4 hover:bg-red-700 transform transition-transform duration-300 hover:scale-105">SHOP BU</button>
        </div>
      </div>
      </div>
      <InfoSection/>
      <CategorySection/>
      <div className="text-2x1 font-bold mb-6 text-center">
        <h2 className="container mx-auto py-12">Top Product</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-10">
          {products?.products?.slice(0, 5).map(((product)=>(
            <ProductCard key={product.id} product={product}/>
          )))}
        </div>
      </div>
  
    </div>
    <Shop/>
    </>
  );
};

export default Home;
