import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

import { MdShoppingBasket } from 'react-icons/md';

import logo from '../../assets/imagens/logo.svg';

function Header() {
  return (
      <div className="container">
          <Link to="/">
            <img src={logo} alt="logo"/>
          </Link>

          <Link to="/cart" className="cart">
            <div className="info">
                <strong>Meu Carrinho</strong>
                <span>3 itens</span>
            </div>
            <MdShoppingBasket size={36} color="#fff"/>
          </Link>
      </div>
  )
}

export default Header;