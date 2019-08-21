import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    margin: 10,
  },
  media: {
    height: 175,
  }
});

const ResultCard = (props) => {
  const classes = useStyles();

  return (
    <>
    <Grid item>
      <Card className={classes.card}>
      <CardActionArea>
        <CardMedia 
          className={classes.media}
          image={props.image} />
        <CardContent>
          <Typography 
            variant="h5" 
            component="h2">
            {props.title}
          </Typography>
          <Typography 
            variant="body2" 
            component="p" 
            color="textSecondary">
            {props.author}
          </Typography>
          <Typography 
            variant="body1" 
            component="p" 
            color="textPrimary">
            {props.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button 
          size="small" 
          color="primary" 
          variant="contained">
            Save Book
        </Button>
        <Button 
          size="small" 
          color="secondary" 
          variant="contained">
            View Details
        </Button>
      </CardActions>
    </Card>
    </Grid>
  </>
  )
};

export default ResultCard;