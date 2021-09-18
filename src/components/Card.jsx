import React from 'react';
import {StyleCard } from '../assets/css/Card';
import {AiFillGithub} from 'react-icons/ai';
import {GrDeploy} from 'react-icons/gr';


import imgs from '../assets/static/1.PNG';
import { Link } from 'react-router-dom';



const Card = ({data}) => {
  const {name, description, images, deploy} = data;
  const gitLab= 'https://gitlab.com/';

  
    return (
        <StyleCard>
                
                
              <div className='title'>
                <span>{name}</span>
              </div>        
            
              <div className="card">
                <div className="imgBx">
                    <img src={images[0]} alt={name}/>
                </div>
                <div className="details">
                    <h1>What is {name}?</h1>
                    <p>{description}</p>
                </div>
              </div>

              <div className='button'>
                <a href={gitLab} target="_blank" rel="noopener noreferrer"><button>CÓDIGO<AiFillGithub/></button></a>
                <Link to={deploy}><button>DEPLOY<GrDeploy/></button></Link>
              </div>
            
        </StyleCard>
      );
    };
    


export default Card
