import React from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';



const HoverBoard = () => {
    const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
    const SQUARES_NR = 500;
    const container = document.querySelector("#container");
    const squares = [1,2,3,4,5]
    const square = useRef(null)
    console.log(square)
      
    
    function change (){
        square.current.style.background='red';
    }

    function getRamdomColor(){
        return colors[Math.floor(Math.random()*colors.length)]
    }
    function setColorToEl(element){
        const color = getRamdomColor();
        element.style.background = color;
        element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
    }
    
    
    function removeColorFromEl(element){
        element.style.background = '#1d1d1d';
        element.style.boxShadow = `0 0 2px #000`;
    }
   

    return (
        <>
            <div className='body'>
                <div id='container'>
                    {squares.map((e)=>(<div className='square' ref={square} onClick={change}></div>))}
                </div>
            </div>
            <style jsx>
                {`
                .body{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    min-height: 100vh;
                    background-color: #111;
                    margin: 0;
                  }
                  
                  #container{
                    display: flex;
                    flex-wrap: wrap;
                    max-width: 400px;
                  }
                  
                  .square{
                    background-color: #1d1d1d;
                    height: 160px;
                    width: 160px;
                    margin: 2px;
                    box-shadow: 0 0 2px #000;
                    transition: 2s ease;
                  }
                  .square:hover{
                    transition-duration: 0s;
                  }
                
                `}
            </style>
        </>
    )
}

export default HoverBoard
