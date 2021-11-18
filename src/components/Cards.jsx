import React, {useState, useEffect, useRef} from 'react'
import Card from './Card'
import {StyleCard } from '../assets/css/Cards'
import {list} from '../api/db.js'
import Pagination from './Pagination'

const Cards = () => {

    const [page, setPage] = useState(1)
    const [searchTerm, setSearchTerm] = useState('')
    



    const hadleNextPage = () =>{
        setPage(page+1)
    }

    const hadlePrevPage = () =>{
        setPage(page-1)
    }

    const page1 = list.filter((item)=>item.id<=6)
    const page2 = list.filter((item)=>item.id<=12 & item.id>6)
    const page3 = list.filter((item)=>item.id<=18 & item.id>12)
    const page4 = list.filter((item)=>item.id<=24 & item.id>12)
    const page5 = list.filter((item)=>item.id>24)

  

    return (
        <div>
            <input type='text' placeholder='Search...' className={'input'} onChange={event=>{setSearchTerm(event.target.value)}}/>
            <StyleCard>
                {/* {list.filter((val)=>{if(searchTerm ==""){
                    return val
                }else if(val.first_name.tolowerCase().includes(searchTerm.tolowerCase())){

                }
                }).map((item)=><Card key={item.id} data={item}/>)
                }   */}
                {page===1 
                ?page1.map((item)=><Card key={item.id} data={item}/>)
                : (page===2 
                    ?page2.map((item)=><Card key={item.id} data={item}/>)
                    : (page===3 
                        ?page3.map((item)=><Card key={item.id} data={item}/>)
                        : (page===4
                        ?page4.map((item)=><Card key={item.id} data={item}/>)
                        :page5.map((item)=><Card key={item.id} data={item}/>)
                        )
                    )
                )
                }
            
            </StyleCard>

            <Pagination hadleNextPage={hadleNextPage} hadlePrevPage={hadlePrevPage}/>

            {/* <button onClick={hadleNextPage}>+</button>
            <button onClick={hadlePrevPage}>-</button> */}
            {/* <div className="container">
            
                <div className="progress-container">
                    <div className="progress" id="progress" ref={progress}></div>
                    <div className={page>=1 ? 'circle active': 'circle'} >1</div>
                    <div className={page>=2 ? 'circle active': 'circle'} >2</div>
                    <div className={page>=3 ? 'circle active': 'circle'} >3</div>
                    <div className={page>=4 ? 'circle active': 'circle'} >4</div>
                </div>
                <div>
                    <button className="btn" id="prev" disabled={(page<=1 ? true : false )} onClick={handlePrev}>Prev</button>
                    <button className="btn" id="next" disabled={(page === circles.length ? true : false )} onClick={handleNext}>Next</button>
                </div>
                

            </div> */}
        <style jsx>{`

            .input{
                position: relative;
                top: 100px;
            }
            
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

        </div>
        
    )
}

export default Cards
