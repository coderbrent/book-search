import React from 'react'
import { Typography, Container, Paper } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'

class HeaderPanel extends React.Component {
  render() {
    return(
      <>
      <Container maxWidth="md">
        <Grid container alignItems="center">
        <Paper style={{ 
          backgroundColor: "slategrey", 
          width: "100%", 
          height: "100%" 
        }}>
          <Typography 
            align="center" 
            variant="h1"
            style={{
              color: 'white', 
              fontWeight: "bolder",
              padding: 25
            }}>
              Book Search
          </Typography>
        </Paper>
        </Grid>
      </Container>
      </>
    )  
  }
}

export default HeaderPanel;