import React from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'


const ScrollAnimation = () => {

   useEffect(() => {
       Aos.init({duration:2000})
   }, [])

    return (
        <>
            <div className='app'>
                <h1>Scroll to see the animation</h1>
                <div className='grid'>
                    <div className="box"><h2>Content</h2></div>
                    <div className="box" data-aos="fade-up"><h2>fade-up</h2></div>
                    <div className="box" data-aos="fade-down"><h2>fade-down</h2></div>
                    <div className="box" data-aos="fade-right"><h2>fade-right</h2></div>
                    <div className="box" data-aos="fade-left"><h2>fade-left</h2></div>
                    <div className="box" data-aos="fade-up-right"><h2>fade-up-right</h2></div>
                    <div className="box" data-aos="fade-up-left"><h2>fade-up-left</h2></div>
                    <div className="box" data-aos="fade-down-right"><h2>fade-down-right</h2></div>
                    <div className="box" data-aos="fade-down-left"><h2>fade-down-left</h2></div>
                    <div className="box" data-aos="flip-left"><h2>flip-left</h2></div>
                    <div className="box" data-aos="flip-right"><h2>flip-right</h2></div>
                    <div className="box" data-aos="flip-up"><h2>flip-up</h2></div>
                    <div className="box" data-aos="flip-down"><h2>flip-down</h2></div>
                    <div className="box" data-aos="zoom-in"><h2>zoom-in</h2></div>
                    <div className="box" data-aos="zoom-out"><h2>zoom-up</h2></div>
                </div>
            </div>
            <style jsx>
                {`
                .app {
                    font-family: "Roboto", sans-serif;
                    margin: 0;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    min-height: 100vh;
                    overflow-x: hidden;
                    color: white;
                }
                
                h1 {
                    margin: 10px;
                    color: white;
                }
                
                .grid{
                    max-width: 50%;
                    margin: auto;
                }
                .box {
                    margin: 20px;
                    margin-top: 150px;
                    background-color: rgb(134, 60, 60);
                    overflow: hidden;
                    width: 400px;
                    height: 200px;
                    max-height: 35vh;
                    border-radius: 10px;
                    justify-content: center;
                    align-items: center;
                    box-shadow: 0 12px 18px -6px black;
                    text-align: center;
                   
                }
                
                
               
                .box h2 {
                    color: #fff;
                    font-size: 45px;
                }
                
                
                `}
            </style>
        </>
    )
}

export default ScrollAnimation
