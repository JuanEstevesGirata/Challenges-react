import React from 'react'
import { useEffect, useState } from 'react';

const DadJokes = () => {
    const [jokes, setJokes] = useState(false)
    const [joke, setJoke] = useState(null)

    useEffect(() => {
            
    async function generateJoke (){
        //llama a la API
        const response = await fetch('https://icanhazdadjoke.com/', {
        headers: {
                'Accept': 'application/json'
            }
        });
    
        const res = await response.json();

        setJoke(res)
  
        console.log(res)
        }
        generateJoke();
    }, [jokes])
    
    


    return (
        <div>
           <div class="container">
                <h3>Don't Laugh Challenge</h3>
                {(joke && 
                    <div id="joke" class="joke">{joke.joke}</div>    )}
                
                <button id="jokeBtn" class="btn" onClick={()=>setJokes(!jokes)}>Get Another Joke</button>
            </div>
            <style jsx>
                {`
                    
                    body{
                    font-family: 'Roboto', sans-serif;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    height: 100vh;
                    overflow: hidden;
                    margin: 0;
                    padding: 20px;
                    }

                    .container{
                    background-color: #fff;
                    border-radius:10px;
                    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1); 
                    padding: 50px 20px;
                    max-width: 100%;
                    width:800px;
                    text-align:center;
                    }

                    h3{
                    margin: 0;
                    letter-spacing: 2px;
                    opacity: 0.5;
                    }

                    .joke{
                    font-size: 30px;
                    line-height: 40px;
                    margin: 50px auto;
                    max-width: 600px;
                    }

                    .btn{
                    background-color: #9f68e0;
                    border: 0;
                    border-radius: 10px;
                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);
                    color: #fff;
                    font-size:16px;
                    padding: 14px 40px;
                    cursor: pointer;
                    }

                    .btn:active{
                    transform: scale(0.98);
                    }

                `}    
            </style> 
        </div>
    )
}

export default DadJokes
