import React, { useState } from 'react'
import {GrFormClose as Close} from 'react-icons/gr'
import {FaBars as Menu} from 'react-icons/fa'
import {FiMail as Mail} from 'react-icons/fi'
import {AiFillHome as Home} from 'react-icons/ai'
import {RiContactsFill as Contact} from 'react-icons/ri'


const RotatingNavigation = () => {
    const [nav, setNav] = useState(false)


    const handleNav = () =>{
        setNav(!nav)
    }

    return (
        <>
            <div className={nav ? `container show-nav`: `container`}>
                <div className="circle-container">
                    <div className="circle">
                        <button id="close" onClick={handleNav}>
                            <Close/>
                        </button>
                        <button id="open" onClick={handleNav}>
                            <Menu/>
                        </button>
                    </div>
                </div>

                <div className="content">
                    <h1>Amazing Blog Post</h1>
                    

                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, ea. Et quibusdam sapiente minus dolores repellat. Unde ullam rerum debitis blanditiis, earum atque! Atque similique animi expedita fuga itaque, culpa reprehenderit corporis. Tempora, ipsam deserunt velit ullam rerum repellat quibusdam facere enim nulla voluptatum quasi eligendi pariatur reiciendis suscipit sit culpa, omnis amet praesentium. Eum quisquam voluptate consequuntur modi fugiat laborum a, vero quibusdam hic eligendi voluptas excepturi ex ipsum nam dicta minus magnam quidem sapiente veniam voluptatibus nesciunt! Error consectetur modi suscipit ea unde eum itaque, asperiores, ab perferendis earum accusantium dolorem magnam. Ad facere excepturi numquam odit expedita.</p>
                    <h1>Blog Post 2</h1>
                    
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, ea. Et quibusdam sapiente minus dolores repellat.
                        Unde ullam rerum debitis blanditiis, earum atque! Atque similique animi expedita fuga itaque, culpa reprehenderit
                        corporis. Tempora, ipsam deserunt velit ullam rerum repellat quibusdam facere enim nulla voluptatum quasi eligendi
                        pariatur reiciendis suscipit sit culpa, omnis amet praesentium. Eum quisquam voluptate consequuntur modi fugiat
                        laborum a, vero quibusdam hic eligendi voluptas excepturi ex ipsum nam dicta minus magnam quidem sapiente veniam
                        voluptatibus nesciunt! Error consectetur modi suscipit ea unde eum itaque, asperiores, ab perferendis earum
                        accusantium dolorem magnam. Ad facere excepturi numquam odit expedita.</p>
                </div>
            </div>

            <nav>
                <ul>
                    <li><Home/>Home</li>
                    <li><Mail/>About</li>
                    <li><Contact/>Contact</li>

                </ul>
            </nav>

            <style jsx>{`
            body{
    
                background-color: #333;
                color:#222;
                font-family: 'Lato', sans-serif;
                margin: 0;
                overflow-x:hidden;
            }

            .container{
                position: relative;
                top: 60px;
                background-color:#fafafa;
                min-height:100vh;
                width:100vw;
                padding:50px;
                transform-origin: top left;
                transition:transform 0.5s linear;
            }

            .container .show-nav{
                transform: rotate(-20deg);
            }

            .circle-container{
                position:fixed;
                top:-100px;
                left: -100px;
            }

            .circle{
                background-color: ${nav ? 'rgb(226,226,226)' : 'black'};
                height:200px;
                width: 200px;
                border-radius: 50%;
                position: relative;
                top: 60px;
                transition: transform 0.5s linear;
            }

            .circle button{
                position:absolute;
                top:50%;
                left:50%;
                height: 100px;
                background: transparent;
                border:0;
                font-size: 26px;
                color:#fff;
                cursor: pointer;
            }

            .circle button:focus{
                outline:0;
            }

            .circle button#open{
                left:60%;
            }

            .circle button#close{
                top:50%;
                left: 40%;
                transform:rotate(45deg);
                transform-origin: top left;
                font-size: 50px;
                
            }

            .container.show-nav .circle{
                transform: rotate(-70deg)
            }

            nav{
                position: fixed;
                bottom:40px;
                left: 0px;
       
                width: 150px;
            }

            nav ul{
                list-style-type: none;
                padding-left: 30px;
            }

            nav ul li{
                text-transform: uppercase;
                color:black;
                margin: 40px 0;
                transform: translateX(-100%);
                transition: transform 0.4s ease;

            }

            nav ul li i{
                font-size: 20px;
                margin-right: 10px;
            }
            

            .container.show-nav + nav li{
                transform: translateX(0);
                transition-delay: 0.4s;
            }

            .content {
                max-width: 1000px;
                margin: 0 auto;
            }

            .content small {
                font-style: italic;
                color:#222
            }

            .content h1{
                margin-bottom: 0;
            }

            .content p{
                font-size: 16px;
                color: #333;
                line-height: 1.5;
            } 
                
                
                
                `}</style>
            
        </>
    )
}

export default RotatingNavigation
