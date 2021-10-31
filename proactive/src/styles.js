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
    marginTop: "10px",
    marginBottom: "5px",
  },
  buttonGroup: {
    width: "400px",
  },
  footer: {
    marginTop: "auto",
    padding: "3px 2px",
  },
  copyRightIcon: {
    fontSize: 13,
    paddingTop: "4px",
  },
  headerLink: {
    textDecoration: "none",
    color: theme.palette.background.paper,
  },
  LoginFirstBox: {
    marginTop: 5,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export default useStyles;
