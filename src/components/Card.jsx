import React from 'react';
import {StyleCard } from '../assets/css/Card';
import {AiFillGithub} from 'react-icons/ai';
import {GrDeploy} from 'react-icons/gr';





const Card = ({data}) => {
  const {name, description, images, deploy, gitLab} = data;


  
    return (
        <StyleCard>
                
                
              <div className='title'>
                <span>{name}</span>
              </div>        
            
              <div className="card">
                <div className="imgBx">
                    <img src={images} alt={name}/>
                </div>
                <div className="details">
                    <h1>What is {name}?</h1>
                    <p>{description}</p>
                </div>
              </div>

              <div className='button'>
                <a href={gitLab} target="_blank" rel="noopener noreferrer"><button>CÓDIGO<AiFillGithub/></button></a>
                <a href={deploy}><button>DEPLOY<GrDeploy/></button></a>
              </div>
              <style jsx>
                {`
                  .details p{
                    color: white
                  }
                `}
              </style>
        </StyleCard>
      );
    };
    


export default Card
