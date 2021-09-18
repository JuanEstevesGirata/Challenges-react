import React, {useState} from 'react'
import Card from './Card'
import {StyleCard } from '../assets/css/Cards'
import {list} from '../api/db.js'
import ProgressSteps from '../challenges/ProgressSteps'
import Pagination from './Pagination'

const Cards = () => {

    const [page, setPage] = useState(1)


    const hadleNextPage = () =>{
        setPage(page+1)
    }

    const hadlePrevPage = () =>{
        setPage(page-1)
    }

    const page1 = list.filter((item)=>item.id<=4)
    const page2 = list.filter((item)=>item.id<=8 & item.id>4)
    const page3 = list.filter((item)=>item.id<=12 & item.id>8)
    const page4 = list.filter((item)=>item.id>12)

    console.log(page2)

    return (
        <div>
            <StyleCard>
                {page===1 
                ?page1.map((item)=><Card key={item.id} data={item}/>)
                : (page===2 
                    ?page2.map((item)=><Card key={item.id} data={item}/>)
                    : (page===3 
                        ?page3.map((item)=><Card key={item.id} data={item}/>)
                        : page4.map((item)=><Card key={item.id} data={item}/>)
                    )
                )
                }
            
            </StyleCard>

            <Pagination page={page} hadleNextPage={hadleNextPage} hadlePrevPage={hadleNextPage}/>

            <button onClick={hadleNextPage}>+</button>
            <button onClick={hadlePrevPage}>-</button>
        </div>
        
    )
}

export default Cards
