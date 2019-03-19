import React from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import HomeRounded from '@material-ui/icons/HomeRounded';

const styles = theme => ({
  btn: {
    // width: "100%",
    display: 'flex',
    alignItems: 'flex-start'
  },
  svg: {
    // margin: "0 auto 0 0"
  }
});

const DrawerButtons = props => {
  const { classes } = props;
  return <Button 
    component={Link} to="/" 
    // varient="contained" 
    color="default"
    className={classes.btn}>
      <HomeRounded className={classes.svg}/>
      Home
    </Button>
}

DrawerButtons.propTypes = {
  classes: PropTypes.object.isRequired
};


export default withStyles(styles)(DrawerButtons);
