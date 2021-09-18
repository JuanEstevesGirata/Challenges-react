import React from 'react'

const Autocomplete = () => {
    return (
        <>
            <div className='container'>
                <div className="header">
                            <h2>DATA SCIENTIST | FULL STACK-DEVELOPER | ENGINER INDUSTRIAL | EMPRENDEDOR<span>&#160;</span></h2>
                </div>
            </div>
           

            <style jsx>
                {`
                
                .container{
                    
                    margin: 0;
                    display:flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    height: 100vh;
                    overflow:hidden;
                    
                }


                .header{
                    display: grid;
                    justify-items: center;
                    color: #FFF;
                    font-family: 'Caveat Brush', cursive; 
                }

                .header h2{
                    margin-top: 2em;
                    position: relative;
                    background: black;
                }
                .header span{
                    position: absolute;
                    right: 0;
                    width: 0;
                    background-color: var(--black);
                    border-left: 1px solid var(--white);
                    background: black;
                    animation: maquina 5s infinite alternate steps(100);
                }


                @keyframes maquina {
                    from {
                        width: 100%;
                    }
                    to {
                        width: 0;
                    }

                }
                
                `}
            </style>
        </>
    )
}

export default Autocomplete
