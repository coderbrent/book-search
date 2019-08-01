import React from 'react'
import { Typography, Container, Paper } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'

class HeaderPanel extends React.Component {
  render() {
    return(
      <>
      <Container maxWidth="xl">
        <Grid alignItems="center">
          <Paper style={{ backgroundColor: "indianred", width: "auto", height: 115 }}>
            <Typography align="center" variant="h1" style={{ color: 'white', fontWeight: "bold" }}>Google Book Search</Typography>
          </Paper>
        </Grid>
      </Container>
      </>
    )  
  }
}

export default HeaderPanel;