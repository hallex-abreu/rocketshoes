import React, {useState, useEffect} from 'react';
import { MdAddShoppingCart } from 'react-icons/md'
import './style.scss';
import api from '../../services/api';
import { formatPrice } from '../../util/format';

import '../../styles/global.scss'

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    async function showProducts(){
      const response = await api.get('/products');
      setProducts(response.data);
    }
    showProducts();
  },[])

  return (
   <ul>
     {
       products.map(products =>(
        <li key={products.id}>
          <img src={products.image} alt="tenis"/>
          <strong>{products.title}</strong>
          <span>{formatPrice(products.price)}</span>
          <button type="button">
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

export default Home;