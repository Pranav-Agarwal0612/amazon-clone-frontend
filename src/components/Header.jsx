import React from "react";
import '../styles/Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'

function Header() {
    return (
        <div className="header">
            {/* logo */}
            <img className="header__logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />

            {/* search options */}
            <div className="header__search">
                {/* input bar */}
                <input className="header__searchInput" type="text" />
                <SearchIcon className="header__searchIcon" />

                {/* navigation area */}
                <div className="header__nav">
                    <div className="header__option">
                        <span className="header__optionLineOne">Hello Guest</span>
                        <span className="header__optionLineTwo">Sign In</span>
                    </div>
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>

                    {/* cart */}
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon className="header__shoppingBasketIcon" />
                        <span className="header__optionLineTwo header__basketCount">0</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
