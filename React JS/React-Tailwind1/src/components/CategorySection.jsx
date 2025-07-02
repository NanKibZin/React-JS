import boy from "../assets/Img/—Pngtree—a boy using virtual reality_17008299.png"
import women from "../assets/Img/—Pngtree—photo men doctor physician chest_13143575.png"
import men from "../assets/Img/—Pngtree—professional women working in laptop_14649175.png"
const CategorySection = () => {
    const categories=[
        {
            title:"Men",
            imageUrl:men,
        },
        {
            title:"Women",
            imageUrl:women
        },
        {
            title:"Kids",
            imageUrl:boy
        }
    ]
  return (
    <div className=' mt-8 container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 cursor-pointer '>
      {categories.map((category,index)=>(
        <div key={index} className=' bg-red-500 relative h-64 transform transition-transform duration-300 hover:scale-105 odd:bg-yellow-300 even:bg-blue-500 px-9 '>
              <img src={category.imageUrl} alt="" className='w-96 h-full object-cover rounded-lg shadow-sm ml-16'/>
              <div className=' absolute top-20 left-12'>
                <p className=' text-xl font-bold'>{category.title}</p>
                <p className=' text-gray-600'>View All</p>
              </div>
        </div>
      ))}
    </div>
  )
}

export default CategorySection
