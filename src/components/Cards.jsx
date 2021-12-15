import { Container, makeStyles } from "@material-ui/core";
import Post from "./Card";
import {list} from '../api/db.js'

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
}));

const Cards = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      {list.map((item)=><Post key={item.id} title={item.name} img={item.images} route={item.route}/>)}
      {/* // <Post title="Choose the perfect design" img="https://images.pexels.com/photos/7319337/pexels-photo-7319337.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
      // <Post title="Simply Recipes Less Stress. More Joy" img="https://images.pexels.com/photos/7363671/pexels-photo-7363671.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
      // <Post title="What To Do In London" img="https://images.pexels.com/photos/7245535/pexels-photo-7245535.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
      // <Post title="Recipes That Will Make You Crave More" img="https://images.pexels.com/photos/7245477/pexels-photo-7245477.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
      // <Post title="Shortcut Travel Guide to Manhattan" img="https://images.pexels.com/photos/7078467/pexels-photo-7078467.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
      // <Post title="Killer Actions to Boost Your Self-Confidence" img="https://images.pexels.com/photos/7833646/pexels-photo-7833646.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/> */}
    </Container>
  );
};

export default Cards;
// import React, {useState, useEffect, useRef} from 'react'
// import Card from './Card'
// import {StyleCard } from '../assets/css/Cards'
// import {list} from '../api/db.js'

// const Cards = () => {

  

//     return (
//         <div>
//             <StyleCard>
//                 {/* {list.filter((val)=>{if(searchTerm ==""){
//                     return val
//                 }else if(val.first_name.tolowerCase().includes(searchTerm.tolowerCase())){

//                 }
//                 }).map((item)=><Card key={item.id} data={item}/>)
//                 }   */}
//                 {list.map((item)=><Card key={item.id} data={item}/>)
                
//                 }
            
//             </StyleCard>

          
//         <style jsx>{`

//             .input{
//                 position: relative;
//                 top: 100px;
//             }
            
//             .container {
//                 text-align: center;
//                 align-items: center;
//                 justify-content: center;
//                 display: flex;
//                 flex-direction: column;
//                 height: 100vh;
//                 overflow: hidden;
//                 }

//                 .progress-container {
//                     display: flex;
//                     justify-content: space-between;
//                     position: relative;
//                     margin-bottom: 30px;
//                     max-width: 100%;
//                     width: 350px;
//                 }

//                 .progress-container::before {
//                     content: '';
//                     background-color: var(--line-empty);
//                     position: absolute;
//                     top: 50%;
//                     left: 0;
//                     height: 4px;
//                     width: 100%;
//                     transform: translateY(-50%);
//                     z-index: -1;
//                 }

//                 .progress {
//                     background-color: var(--line-fill);
//                     position: absolute;
//                     top: 50%;
//                     left: 0;
//                     height: 4px;
//                     width: 0%;
//                     transform: translateY(-50%);
//                     z-index: -1;
//                     transition: 0.4s ease;
//                 }

//                 .circle {
//                     background-color: #ffffff;
//                     color:#999;
//                     border-radius: 50%;
//                     height: 30px;
//                     width: 30px;
//                     display: flex;
//                     justify-content: center;
//                     align-items: center;
//                     border: 3px solid var(--line-empty);
//                     transition: 0.4s ease;
//                 }

//                 .circle.active {
//                     border-color: var(--line-fill);
//                 }

//                 .btn {
//                     background-color: var(--line-fill);
//                     color: #ffffff;
//                     border: 0;
//                     border-radius: 6px;
//                     cursor: pointer;
//                     padding: 8px 30px;
//                     margin: 5px;
//                     font-size: 14px;
//                 }

//                 .btn:active {
//                 transform: scale(0.95);
//                 }

//                 .btn:focus {
//                     outline: none;
//                 }

//                 .btn:disabled {
//                     background-color: var(--line-empty);
//                     cursor: not-allowed;
//                     color: #333;
//                 }
//             `}
            
//         </style>

//         </div>
        
//     )
// }

// export default Cards
