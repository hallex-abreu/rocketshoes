import React from 'react';
import './style.scss';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md'

function Cart() {
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
          <tr>
            <td>
              <img src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom2.jpg?ts=1586961574&ims=326x" alt="tenis"/>
            </td>
            <td>
              <strong>Tênis Muito massa</strong>
              <span>R$ 129,90</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#7159c1"/>
                </button>
                <input type="number" readOnly value={2}/>
                <button type="button">
                  <MdAddCircleOutline size={20} color="#7159c1"/>
                </button>
              </div>
            </td>
            <td>
              <strong>R$ 258,80</strong>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdDelete size={20} color="#7159c1"/>
                </button>
              </div>
            </td>
          </tr>
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

export default Cart;