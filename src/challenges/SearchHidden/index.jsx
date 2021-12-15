import React, { useRef, useState } from 'react'
import {BsSearch} from 'react-icons/bs'


const SearchHidden = () => {
    const [searchBar, setsearchBar] = useState(false)

    const input = useRef(null)

    
    const handleClick = () =>{
        setsearchBar(!searchBar)
        input.current.focus()
    }

    return (
        <>
        <div className='container'>
            <div className={!searchBar ? "search" : "search active"  }>
                <input type="text" class="input" placeholder="Search..." ref={input}/>
                <button className="btn" onClick={handleClick}>
                    <BsSearch/>
                </button>
                
            </div>
            </div>
            <style jsx>{`

                .container{
                    display: flex;
                    align-items: center;
                    justify-content: center; 
                    position: relative;
                    top: 150px;
                }


                .search {
                display: flex;
                align-items: center;
                justify-content: center; 
                overflow: hidden;
                position: relative;
                height: 50px;


                }

                .search .input {
                border: 0;
                background-color: #fff;
                font-size: 18px;
                padding: 15px;
                height: 50px;
                margin: 0;
                width: 50px;
                transition: width 0.3s ease;
                }

                .btn {
                border: 0;
                cursor: pointer;
                height: 50px;
                width: 50px;
                background-color: #fff;
                font-size: 24px;
                position: absolute;
                top: 0;
                left: 0;
                transition: transform 0.3s ease;
                }

                .btn:focus,
                .input:focus {
                outline: none;
                }

                .search.active .input {
                width: 250px;

                }

                .search.active .btn {
                transform: translateX(200px);
                }
                
                `}
              
              
            </style>  
        </>
    )
}

export default SearchHidden
