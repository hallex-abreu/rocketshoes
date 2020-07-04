import React from 'react';
import { connect } from 'react-redux';
import * as CartActions from '../../store/modules/cart/actions';
import './style.scss';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md'

function Cart({cart, dispatch}) {

  function handleDeleteProduct(id){
 
    dispatch(
      CartActions.removeToCart(id)
    )
  }

  function increment(product){
    dispatch(
      CartActions.updateAmount(product.id, product.amount + 1)
    )
  }
  function decrement(product){
    dispatch(
      CartActions.updateAmount(product.id, product.amount - 1)
    )
  }

  return (
    <div className="container-cart">
      <table>
        <thead>
          <tr>
            <th/>
            <th>Produto</th>
            <th>QTD</th>
            <th>Subtotal</th>
            <th/>
          </tr>
        </thead>
        <tbody>
          {
          cart.map(product => (
            <tr key={product.id}>
              <td>
                <img src={product.image} alt={product.title}/>
              </td>
              <td>
                <strong>{product.title}</strong>
                <span>{product.priceFormatted}</span>
              </td>
              <td>
                <div>
                  <button type="button" onClick={()=>{decrement(product)}}>
                    <MdRemoveCircleOutline size={20} color="#7159c1"/>
                  </button>
                  <input type="number" readOnly value={product.amount}/>
                  <button type="button" onClick={()=>{increment(product)}}>
                    <MdAddCircleOutline size={20} color="#7159c1"/>
                  </button>
                </div>
              </td>
              <td>
                <strong>R$ 258,80</strong>
              </td>
              <td>
                <div>
                  <button type="button" onClick={()=>{handleDeleteProduct(product.id)}}>
                    <MdDelete size={20} color="#7159c1"/>
                  </button>
                </div>
              </td>
            </tr>
          ))
          }
        </tbody>
      </table>
      <div className="finalizar">
        <button type="button">Finalizar Pedido</button>
        <div className="total">
          <span>Total</span>
          <strong>R$ 1573,90</strong>
        </div>
      </div>
    </div>
  );
}

export default connect(state =>({
  cart: state.cart
}))(Cart);