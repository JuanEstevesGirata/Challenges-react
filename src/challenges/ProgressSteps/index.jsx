import React, { useEffect, useRef, useState } from 'react'


const ProgressSteps = () => {
    const [currentStep, updateCurrentStep] = useState(1)

    
    const progress = useRef(null)

    
    const circles = document.querySelectorAll('.circle')
    // const circles = useRef(null)

    useEffect(() => {
            
                const actives = document.querySelectorAll('.active')
                progress.current.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%'
        
            
            
        
        
    }, [currentStep])



    const handlePrev = () =>{
        updateCurrentStep(currentStep-1)
    }

    const handleNext = () =>{
        updateCurrentStep(currentStep+1)
        
    }




    return (
        <>
        <div className="container">
            
            <div className="progress-container">
                <div className="progress" id="progress" ref={progress}></div>
                <div className={currentStep>=1 ? 'circle active': 'circle'} >1</div>
                <div className={currentStep>=2 ? 'circle active': 'circle'} >2</div>
                <div className={currentStep>=3 ? 'circle active': 'circle'} >3</div>
                <div className={currentStep>=4 ? 'circle active': 'circle'} >4</div>
            </div>
            <div>
                <button className="btn" id="prev" disabled={(currentStep<=1 ? true : false )} onClick={handlePrev}>Prev</button>
                <button className="btn" id="next" disabled={(currentStep === circles.length ? true : false )} onClick={handleNext}>Next</button>
            </div>
            

        </div>
        <style jsx>{`
            
            .container {
                text-align: center;
                align-items: center;
                justify-content: center;
                display: flex;
                flex-direction: column;
                height: 100vh;
                overflow: hidden;
                }

                .progress-container {
                    display: flex;
                    justify-content: space-between;
                    position: relative;
                    margin-bottom: 30px;
                    max-width: 100%;
                    width: 350px;
                }

                .progress-container::before {
                    content: '';
                    background-color: var(--line-empty);
                    position: absolute;
                    top: 50%;
                    left: 0;
                    height: 4px;
                    width: 100%;
                    transform: translateY(-50%);
                    z-index: -1;
                }

                .progress {
                    background-color: var(--line-fill);
                    position: absolute;
                    top: 50%;
                    left: 0;
                    height: 4px;
                    width: 0%;
                    transform: translateY(-50%);
                    z-index: -1;
                    transition: 0.4s ease;
                }

                .circle {
                    background-color: #ffffff;
                    color:#999;
                    border-radius: 50%;
                    height: 30px;
                    width: 30px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border: 3px solid var(--line-empty);
                    transition: 0.4s ease;
                }

                .circle.active {
                    border-color: var(--line-fill);
                }

                .btn {
                    background-color: var(--line-fill);
                    color: #ffffff;
                    border: 0;
                    border-radius: 6px;
                    cursor: pointer;
                    padding: 8px 30px;
                    margin: 5px;
                    font-size: 14px;
                }

                .btn:active {
                transform: scale(0.95);
                }

                .btn:focus {
                    outline: none;
                }

                .btn:disabled {
                    background-color: var(--line-empty);
                    cursor: not-allowed;
                    color: #333;
                }
            `}
            
        </style>
        </>

    )
}

export default ProgressSteps
