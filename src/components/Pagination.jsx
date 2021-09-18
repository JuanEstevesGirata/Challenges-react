import React, { useEffect, useRef, useState } from 'react'


const Pagination = (props) => {
    const {hadleNextPage, hadlePrevPage, page} = props;
    
    const progress = useRef(null)
   
    const circles = document.querySelectorAll('.circle')
    

    useEffect(() => {
            
        const actives = document.querySelectorAll('.active')
        progress.current.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%'

    }, [page])







    return (
        <>
        <div className="container">
            
            <div className="progress-container">
                <div className="progress" id="progress" ref={progress}></div>
                <div className={page>=1 ? 'circle active': 'circle'} >1</div>
                <div className={page>=2 ? 'circle active': 'circle'} >2</div>
                <div className={page>=3 ? 'circle active': 'circle'} >3</div>
                <div className={page>=4 ? 'circle active': 'circle'} >4</div>
                <div className={page>=5 ? 'circle active': 'circle'} >5</div>
            </div>
            <div>
                <button className="btn" id="prev" disabled={(page<=1 ? true : false )} onClick={hadleNextPage}>Prev</button>
                <button className="btn" id="next" disabled={(page === circles.length ? true : false )} onClick={hadlePrevPage}>Next</button>
            </div>
            

        </div>
        <style jsx>{`
            
            .container {
                position: relative;
                text-align: center;
                align-items: center;
                top: 200px;
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

export default Pagination;
