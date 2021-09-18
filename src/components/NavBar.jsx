
import {FaSearch } from 'react-icons/fa'

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FcHome } from 'react-icons/fc';



const NavBar = () => {
    const [toggle, setToggle] = useState(true)


    const menuToggle = () =>{
        setToggle(!toggle)
             }
        
    

    return (
        
            <header>
                <div className='headerWrapper'>
                    <div className='wrapper' onClick={menuToggle}>
                        <Link to = '/'><FcHome size={20}/></Link>
                    </div>
                    
                    <div className="ubication">
                        <span>50 Retos Java Script-React</span>
                    </div>
                    <div className='logoWrapper'>
                        <Link to='/' >LOGO</Link>
                    </div>
                </div>
                <div className="logo">
                    <Link to='/' >LOGO</Link>
                </div>

                <div className='rightContainer'>
                    <div className="search-bar" >
                        <input placeholder='search...'></input>
                        
                    </div>
                    <span className='search'><FaSearch/></span>
                    

                    <div className='login'>
                        <span><Link to='/'>Ingreso</Link></span>
                    </div>
                </div>
                
                <style jsx>{`
                    header{
                        position: fixed;
                        width: 100%;
                        z-index: 999;
                        background-color: rgb(214, 206, 206);
                        display: flex;
                        align-items: center;
                        padding: 24px 40px;
                        justify-content: space-between;
                    }
                    .headerWrapper{
                        display: flex;
                        justify-content: space-around;
                    }
                    .wrapper{
                        padding-right: 40px;
                        margin-right: 40px;
                        border-right: 1px solid black;
                    }
                    .rightContainer{
                        display: flex;
                        justify-content:end;
                        gap: 10px;
                        align-items: center;
                    }
                    .menuWrapper{
                        display:none;
                    }
                    .logoWrapper, .search{
                        visibility: hidden;
                    }
                    .nav_cart{
                        cursor: pointer;
                        position: relative;
                    }
                    .nav_cart span{
                        color:red;
                        position: absolute;
                        top:-12px;
                        right: -7px;
                        background: crimson;
                        font-size: 10px;
                        color: white;
                        padding: 3px 5px;
                        border-radius: 50%;
                        z-index: -1;
                    }
                    @media (max-width: 1024px){
                        .search-bar, .ubication, .logo{
                            display: none;
                        }
                        .logoWrapper, .search{
                        visibility: visible;
                        }
                        }


                                        
                `}</style>

            </header>

    )
}

export default NavBar