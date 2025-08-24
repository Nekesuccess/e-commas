import React, { useState } from 'react'
import "./Header.css"
import { FaHeart } from "react-icons/fa";
import { MdShoppingCartCheckout } from "react-icons/md";
import { GrSearch } from "react-icons/gr";
import { FaUserCircle } from "react-icons/fa";
import { RiMenuUnfoldFill, RiMenuUnfold2Fill } from "react-icons/ri";
import Shop from './Shop';

const Header = () => {

    const [dropdown_shop, setDropdown_shop] = useState(false);
    const [search_dropdown, setSearch_dropdown] = useState(false);
    const [proflie_dropdown, setProflie_dropdown] = useState(false);
    const [show_Menuinfo, setShow_Menuinfo] = useState(false);

  return (
    <>
        <header className="header_container">
            <article className='header_wrap' >
                <div className='logo_Space'>
                    <h1>NEKE STORE</h1>
                </div>

                <div className="link_profile">
                    <nav>
                        <ul>
                            <li>HOME</li>
                            <li>ABOUT</li>
                            <li onMouseEnter={()=> setDropdown_shop(true)}>SHOP</li>
                            <li>PRODUCT</li>
                        </ul>
                    </nav>

                    <div className="all_icon">
                        <div className="cart_Icon_count">
                            <MdShoppingCartCheckout className='icon'/>
                            <div className="icon_count_num">0</div>
                        </div>
                        <div className="cart_Icon_count">
                            <FaHeart />
                            <div className="icon_count_num">0</div>
                        </div>

                        <GrSearch onMouseEnter={()=> setSearch_dropdown(true)} />
                        <FaUserCircle onMouseEnter={()=> setProflie_dropdown(true)}/>

                        {
                            !show_Menuinfo ? (<RiMenuUnfoldFill className='menu_icon'
                                onClick={()=> setShow_Menuinfo(true)}
                            />)
                            :(<RiMenuUnfold2Fill className='menu_icon'
                                onClick={()=> setShow_Menuinfo(false)}
                            />)
                        }
                        
                    </div>

                    {
                        dropdown_shop ? (
                        <div className="dropdown_shop" onMouseLeave={()=> setDropdown_shop(false)}>
                        <Shop />
                        </div>)
                        :null
                    }

                    {
                        search_dropdown ? <div className="search_dropdown" 
                        onMouseLeave={()=> setSearch_dropdown(false)}>
                        </div>
                        :null
                    }
                    
                    {
                        proflie_dropdown ? <div className="proflie_dropdown"
                        onMouseLeave={()=> setProflie_dropdown(false)}>
                        </div>
                        :null
                    }
                    
                    

                    

                    
                </div>
            </article>
        </header>
    </>
  )
}

export default Header
