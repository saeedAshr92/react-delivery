import React from "react";
import AppBarBase from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid"
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";

const useStyles = makeStyles(
  theme => (
    {
      root: {
        direction: "rtl"
      },
      menuButton: {
        marginLeft: "auto"
      },
      listItem: {
        textAlign: "center"
      },
      drawerPaper: {
        marginTop: theme.mixins.toolbar.minHeight
      },
      drawerModal: {
        zIndex: theme.zIndex.appBar
      }
    }
  )
);

const FullList = (props) => {
  const classes = useStyles();
 
  return (
    <List>
      <ListItem component={Link} to ="/"  onClick={props.onItemClick} className={classes.listItem}>
        <ListItemText >خانه</ListItemText>
      </ListItem>
      <ListItem  component={Link} to ="/card" onClick={props.onItemClick} className={classes.listItem}>
        <ListItemText>سبد خرید</ListItemText>
      </ListItem>

    </List>
  );
};

export default function AppBar() {
  const classes = useStyles();

  const [isOpen, setState] = React.useState(false);

  const toggleDrawer = open => event => {
    setState(open);
  };

  return (
    <React.Fragment>
      <AppBarBase position="relative" className={classes.appBar}  >
        <Toolbar >
          <Grid container direction="row" justify="space-between" alignItems="center"   >

            <Typography variant="h6" color="inherit"  >
              تهیه غذای واسوبی
          </Typography>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              className={classes.menuButton}
              onClick={toggleDrawer(!isOpen)}
            >
              <MenuIcon />
            </IconButton>


          </Grid>
        </Toolbar>
      </AppBarBase>
      <Drawer
        variant="temporary"
        anchor="right"
        open={isOpen}
        onClose={toggleDrawer(false)}
        classes={{
          paper: classes.drawerPaper,
          modal: classes.drawerModal
        }}
      >
        <FullList onItemClick ={toggleDrawer(!isOpen)} />
      </Drawer>
    </React.Fragment>
  );
}
