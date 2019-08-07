import React from 'react'
import { Typography, Container, Paper, TextField, Box } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'

class BookSearchPanel extends React.Component {
  constructor(props) {
    super(props);
    this.getBooks = this.getBooks.bind(this);
    this.state = {
      search: '',
      searchResults: []
    }

  }

  getBooks(props) {
    // const key = "AIzaSyDz2zhG8Q8pzSQMB5WXdYzhD6EBMTJz0XE"
    fetch(`https://www.googleapis.com/books/v1/volumes?q=quilting`)
      .then(res => res.json())
      .then((data) => {
          this.setState({ searchResults: data })
          console.log(this.state.searchResults.items)
          })
      .catch(console.log)
  }

  render() {
    return(
      <>
      <Container maxWidth="xl">
      <Grid>
        <Paper style={{ backgroundColor: "white", width: "auto", height: 'auto' }}>
          <Typography align="left" variant="h5" style={{ color: 'darkblue', fontWeight: "bold" }}>
            Search Here For A Book!
          </Typography>
          <Box padding={4}>
            <TextField
              id="outlined-full-width"
              label="Search A Book Here"
              style={{ margin: 10 }}
              placeholder="Book Title"
              fullWidth
              margin="normal"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }} />
            <Button 
              variant="contained" 
              color="secondary"
              fullWidth="true"
              onClick={this.getBooks} >
              Search
            </Button>
          </Box>
        </Paper>
      <Grid alignItems="center" style={{ margin: 10, width: 'auto'}}>
        <Paper style={{ backgroundColor: "white" }}>
          <Typography align="left" variant="h6" style={{ color: 'darkblue', fontWeight: "bold", margin: 5 }}>
            Search Results:
          </Typography>
        </Paper>
      </Grid>
    </Grid>
    </Container>
  </>
    )  
  }
}

export default BookSearchPanel;