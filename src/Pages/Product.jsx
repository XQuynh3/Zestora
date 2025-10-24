import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelationProducts from '../Components/RelationProducts/RelationProducts';

const Product = () => {
  const {all_product}= useContext(ShopContext);
  const {productID} = useParams();
  const product = all_product.find((e)=> e.id === Number(productID));
  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RelationProducts/>
    </div>
  )
}

export default Product
