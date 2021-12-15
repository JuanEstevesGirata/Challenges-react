import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: theme.spacing(5),
    width: 400
  },
  media: {
    height: 150,
    [theme.breakpoints.down("sm")]: {
      height: 150,
    },
  },
}));

const Post = ({ img, title, route , description}) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia className={classes.media} image={img} title="My Post" />
        <CardContent>
          <Typography gutterBottom variant="h5">
            <Link to={route}>{title}</Link>
          </Typography>
          <Typography variant="body2">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            GitHub
          </Button>
          <Button size="small" color="primary">
          <Link to={route}>View</Link>
          </Button>
        </CardActions>
      </CardActionArea>

    </Card>
  );
};

export default Post;


// import React from 'react';
// import {StyleCard } from '../assets/css/Card';
// import {AiFillGithub} from 'react-icons/ai';
// import {GrDeploy} from 'react-icons/gr';





// const Card = ({data}) => {
//   const {name, description, images, deploy, gitLab} = data;


  
//     return (
//         <StyleCard>
                
                
//               <div className='title'>
//                 <span>{name}</span>
//               </div>        
            
//               <div className="card">
//                 <div className="imgBx">
//                     <img src={images} alt={name}/>
//                 </div>
//                 <div className="details">
//                     <h1>What is {name}?</h1>
//                     <p>{description}</p>
//                 </div>
//               </div>

//               <div className='button'>
//                 <a href={gitLab} target="_blank" rel="noopener noreferrer"><button>CÓDIGO<AiFillGithub/></button></a>
//                 <a href={deploy}><button>DEPLOY<GrDeploy/></button></a>
//               </div>
//               <style jsx>
//                 {`
//                   .details p{
//                     color: white
//                   }
//                 `}
//               </style>
//         </StyleCard>
//       );
//     };
    


// export default Card
