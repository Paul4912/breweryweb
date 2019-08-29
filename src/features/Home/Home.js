import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";

import CardBootstrapContainer from './CardBootstrapContainer';

function Home(props) {

  const useStyles = makeStyles(theme => ({
    root: {
      padding: "2px 4px",
      display: "inline-flex",
      alignItems: "center",
      width: 400,
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1
    },
    iconButton: {
      padding: 10
    },
    divider: {
      height: 28,
      margin: 4
    }
  }))
  const classes = useStyles();

  const cards = props.data.map(element => {
    return <CardBootstrapContainer data={element} />
  })

  const banner = <div className='home-banner'>
      <img className='home-logo' src='logo.png' alt=''></img>
      <Paper className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Search"
        inputProps={{ "aria-label": "search" }}
      />
      <IconButton className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
      </Paper>
      <Link to="/EnterProduct">
        <Button variant="dark" size="lg">
          List a product
        </Button>
      </Link>
    </div>

  return (
    <div className="HomePage">
      {banner}
      {cards}
    </div>
  );
}

export default Home;