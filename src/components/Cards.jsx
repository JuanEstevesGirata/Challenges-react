import { Container, makeStyles } from "@material-ui/core";
import Post from "./Card";
import { list } from '../api/db.js'
import './card.css';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
}));

const Cards = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <div className="containergrid">
        {list.map((item) => <Post key={item.id} title={item.name} description={item.description} img={item.images} route={item.route} />)}
      </div>
    </Container>
  );
};

export default Cards;
