import React from 'react'
import { Typography } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'

class ResultsPanel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
  }

  render() {
    return(
      <>
      <Grid container alignItems="center" style={{ marginTop: 10 }}>
        <Typography align="left" variant="h6" style={{ color: 'darkblue', fontWeight: "bold", margin: 5 }}>
          Search Results:
        </Typography>

      </Grid>
      </>
    )  
  }
}

export default ResultsPanel;