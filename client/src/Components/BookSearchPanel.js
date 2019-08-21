import React from 'react'
import { Typography, Container, Paper, TextField, Box } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import ResultCard from '../Components/ResultCard'

class BookSearchPanel extends React.Component {
  constructor(props) {
    super(props);
    this.getBooks = this.getBooks.bind(this);
    this.state = {
      searchQuery: null,
      searchResults: [],
      progressPercentage: 0
    }
  }

  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value })
  }

  getBooks(props) {
    // const key = "AIzaSyDz2zhG8Q8pzSQMB5WXdYzhD6EBMTJz0XE"
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.searchQuery}`)
      .then(res => res.json())
      .then((data) => {
          this.setState({ searchResults: data.items })
          console.log(this.state.searchResults)
          })
      .catch(console.log)
  }

  render() {
    return(
      <>
      <Container maxWidth="lg">
      <Grid>
        <Paper style={{ backgroundColor: "white", width: "auto", height: 'auto' }}>
          <Typography align="left" variant="h5" style={{ color: '#444', fontWeight: "bold", padding: 5 }}>
            Search Here For A Book!
          </Typography>
          <Box padding={2}>
            <TextField
              id="searchQuery"
              label="Book Title"
              style={{ marginBottom: 10 }}
              placeholder="Harry Potter"
              fullWidth={true}
              name="searchQuery"
              margin="normal"
              type="name"
              variant="outlined"
              onChange={this.changeHandler}
              InputLabelProps={{
                shrink: true,
              }} />
            <Button 
              variant="contained" 
              color="secondary"
              width="50%"
              onClick={this.getBooks} >
              Search
            </Button>
          </Box>
        </Paper>
        <Grid container direction="row" alignItems="center">
         { this.state.searchResults.map((Book, index) => 
          ( <ResultCard 
              key={Book.id}
              image={Book.volumeInfo.imageLinks.smallThumbnail}
              title={Book.volumeInfo.title}
              author={Book.volumeInfo.authors} />)
          )}
        </Grid>
        </Grid>
    </Container>
  </>
    )  
  }
}

export default BookSearchPanel;