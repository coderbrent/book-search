import React from 'react'
import { Typography, Paper, Box } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Books from '../Components/ResultCard'

class ResultsPanel extends React.Component {
  render() {
    return(
      <>
      <Grid alignItems="center" style={{ margin: 10, width: 'auto'}}>
        <Paper style={{ backgroundColor: "white" }}>
          <Typography align="left" variant="h6" style={{ color: 'darkblue', fontWeight: "bold", margin: 5 }}>
            Search Results:
          </Typography>
          <Box padding={2}>
            <Books data={this.state.books} />
          </Box>
        </Paper>
      </Grid>
      </>
    )  
  }
}

export default ResultsPanel;