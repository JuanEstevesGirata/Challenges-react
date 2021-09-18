import React from 'react'

const Sounds = () => {
    const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

    

    const handleSound = (sound) => {
        document.getElementById(sound).play();
    } 

    return (
        <div>
            <audio src="sounds/applause.mp3" id="applause"></audio>
            <audio src="sounds/boo.mp3" id="boo"></audio>
            <audio src="sounds/gasp.mp3" id="gasp"></audio>
            <audio src="sounds/tada.mp3" id="tada"></audio>
            <audio src="sounds/victory.mp3" id="victory"></audio>
            <audio src="sounds/wrong.mp3" id="wrong"></audio>

            <div id="buttons">
                {sounds.map((sound)=><button className='btn' onClick={()=>handleSound(sound)}>{sound}</button>)}
            </div>

            <style jsx>
                {`
                body{
                    background-color: rgb(161,100,223);
                    font-family: 'Poppins', sans-serif;
                    margin: 0;
                    display:flex;
                    flex-wrap: wrap;
                    align-items: center;
                    justify-content: center;
                    min-height: 100vh;
                    overflow:hidden;
                    text-align: center;
                }

                .btn{
                    background-color: rebeccapurple;
                    border:none;
                    border-radius: 5px;
                    color:#fff;
                    margin: 1rem;
                    padding: 1.5rem 3rem;
                    font-family: inherit;
                    font-size: 16px;
                    cursor:pointer;
                }

                .btn:focus{
                    outline:0;
                }

                .btn:hover{
                    opacity:0.9;
                }
                
                `}
            </style>
        </div>
    )
}

export default Sounds
