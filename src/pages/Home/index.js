import React, {useState, useEffect} from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { connect } from 'react-redux';
import * as CartActions from '../../store/modules/cart/actions';
import './style.scss';
import api from '../../services/api';
import { formatPrice } from '../../util/format';

import '../../styles/global.scss'

function Home({dispatch}) {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    async function showProducts(){
      const response = await api.get('/products');
      setProducts(response.data);
    }
    showProducts();
 },[])
  function handleAddProducts(product){   
    dispatch(
      CartActions.addToCart(product)
    )
  }

  return (
   <ul>
     {
       products.map(products =>(
        <li key={products.id}>
          <img src={products.image} alt="tenis"/>
          <strong>{products.title}</strong>
          <span>{formatPrice(products.price)}</span>
          <button type="button" onClick={()=>{handleAddProducts(products)}}>
            <div>
              <MdAddShoppingCart size={16} color="#fff"/> 3
            </div>
            <span>Adicionar ao carrinho</span>
          </button>
        </li>
       ))
     }
   </ul>
  );
}

export default connect()(Home); //conecta com o redux