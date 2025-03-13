import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import arrow_icon from '../../assets/arrow_icon.png'
import { useContext } from 'react';
import { CoinContext } from '../../context/CoinContext';


const Navbar = () => {

    const {setCurrency} = useContext(CoinContext);

    const currencyHandler = (event) => {
        switch (event.target.value) {   
            case 'usd': {
                setCurrency({name: 'usd', symbol: '$'});
                break;
            }
            case 'eur': {
                setCurrency({name: 'eur', symbol: '€'});
                break;
            }
            case 'pln': {
                setCurrency({name: 'pln', symbol: 'zł'});
                break;
            }
            default: {
                setCurrency({name: 'usd', symbol: '$'});
                break;
            }
                
        }
    }


    return (
        <div className='navbar'>
            <img className='logo' src={logo} alt="" />
            <ul>
                <li>Home</li>
                <li>Features</li>
                <li>Pricing</li>
                <li>Blog</li>
            </ul>
            <div className="nav-right">
                <select onChange={currencyHandler}>
                    <option value="usd">USD</option>
                    <option value="eur">EUR</option>
                    <option value="pln">PLN</option>
                </select>
                <button>Sign Up <img src={arrow_icon} alt="" /></button>
            </div>
        </div>
    )
}

export default Navbar