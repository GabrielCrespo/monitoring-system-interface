import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(4, 0, 2),
  },
  icon: {
    marginRight: theme.spacing(2), // margin-right: 20px
  },
  box: {
    marginTop: "5px",
  },
  buttonGroup: {
    width: "400px",
  },
  footer: {
    //backgroundColor: "red",
    backgroundColor: theme.palette.background.paper,
    padding: "10px 0",
    position: "absolute",
    bottom: "0",
    width: "100%",
  },
}));


export default useStyles;