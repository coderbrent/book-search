import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  }
});

const ResultCard = ({ data }) => {
  const classes = useStyles();

  return (
    <>
      { data.map(book => (
        <Card className={classes.card}>
        <CardActionArea>
          <CardMedia 
            className={classes.media}
            image={book.image} />
          <CardContent>
            <Typography 
              variant="h5" 
              component="h2">
                {book.title}
            </Typography>
            <Typography 
              variant="body2" 
              component="p" 
              color="textSecondary">
                {book.authors}
            </Typography>
            <Typography 
              variant="body1" 
              component="p" 
              color="textPrimary">
                {book.desc}
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
            View Book
        </Button>
        </CardActions>
      </Card>
    ))}
  </>
  )
};

export default ResultCard;