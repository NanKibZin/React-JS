import { useSelector } from 'react-redux'
import ProductCart from '../components/ProductCart'

const FilterData = () => {
    const filterProducts=useSelector(state=>state.product.filteredData)
  return (
    <div className=" ml-20 container sm:grid-cols-3 grid grid-cols-5 gap-4">
             <h2>Search</h2>
                {filterProducts.map(((product)=>(
           <ProductCart key={product.id} product={product}/>
          )))}
 </div>
  )
}

export default FilterData
