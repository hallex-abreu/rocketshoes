import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './style.scss';

import { MdShoppingBasket } from 'react-icons/md';

import logo from '../../assets/imagens/logo.svg';

function Header({cart}) {

  return (
      <div className="container">
          <Link to="/">
            <img src={logo} alt="logo"/>
          </Link>

          <Link to="/cart" className="cart">
            <div className="info">
                <strong>Meu Carrinho</strong>
                <span>{cart.length} itens</span>
            </div>
            <MdShoppingBasket size={36} color="#fff"/>
          </Link>
      </div>
  )
}

export default connect(state =>({
  cart: state.cart, //Nome do reducer que eu quero acessar 
}))(Header);