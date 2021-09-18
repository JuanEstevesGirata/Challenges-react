import React, { useEffect, useRef } from 'react'

const BlurryLoading = () => {


    const loadText = useRef(null)
    const bg = useRef(null)

    useEffect(() => {
        let load = 0

        let int = setInterval(blurring, 30)
    
        function blurring() {
            load++
    
            if(load>99){
            clearInterval(int);
    
            }
            
            loadText.current.innerText = load + "%"
            loadText.current.style.opacity = multipl(load, 0 , 100 , 1 , 0 )
            bg.current.style.filter =`blur(${multipl(load, 0 , 100 , 0 , 20 )}px)` 
    
        }
    
        const multipl = ( num , min , max , out_max , out_min ) => {
            return (num - min) * ( out_max - out_min) / (max - min) + out_min
        } 
    }, [])

    


    return (
        <>
            <div className='container'>
                <section className="bg" ref={bg}></section>
                <div className="loading-text" ref={loadText}>0%</div>
            </div>         
                <style jsx>{`
                    
                    .container {
                    font-family: "Ubuntu", sans-serif;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 100vh;
                    margin: 0;
                    overflow: hidden;
                    }

                    .bg {
                        position: absolute;
                        top: 0px;
                        left: 0px;
                        width: 100vw;
                        height: 100vh;
                        background-image: url(https://images.unsplash.com/photo-1576161787924-01bb08dad4a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2104&q=80);
                        background-size:100%;
                        background-repeat: no-repeat;
                        filter: blur(0px);
                        padding: 3rem;
                    }

                    .loading-text {
                    font-size: 50px;
                    color: #ffffff;
                    }    
                    
                `}</style>
            </>
    )
}

export default BlurryLoading
