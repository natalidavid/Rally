import { makeStyles } from "@material-ui/core/styles";
import zIndex from "@material-ui/core/styles/zIndex";
import { Autorenew } from "@material-ui/icons";

const taskInfoStyles = makeStyles({
  root: {
    backgroundColor: "#94A8A3",
    margin: 0,
    height: "100%",
    width: "100%",
    position: "absolute",
    boxShadow: "0px",
    border: "none",
    outline: "none"
  },
  "&ListItemText": {
    fontSize: 14,
  },

  orgTaskImage: {
    position: "absolute",
    width: "100%",
    opacity: 0.8,
  },

  InfoCard: {
    position: "relative",
    width: "100%",
    height: "60vh",
    top: "30vh",
    margin: "auto 0",
    backgroundColor: "#F5F5F5",
    borderRadius: "52px",
    zIndex: 999,

  },
  CardContent: {
    padding: "5vh 7vw",
    // overflow: "auto",
  },
  taskicons: {
    fontSize: "26px",
    color: "#4B6253",
  },
  orgName: {
    fontSize: "14px",
    fontWeight: 700,
    color: "#B6C7C3",
    lineHeight: "16px",
  },
  taskName: {
    fontSize: "28px",
    fontWeight: 500,
    color: "#4B6253"
  },
  description: {
    color: "#4B6253",
    fontSize: "14px",
    fontWeight: "bold",
    paddingTop: "1vh"
  },
  backButton: {
    position: "absolute",
    margin: 0,
    top: 10,
    left: 10,
    color: "white",
    zIndex: 99,
  },
  buttonRound: {
    borderRadius: 50,
    backgroundColor: "#FFA945",
    position: "absolute",
    margin: "auto",
    zIndex: 1000,
    bottom: -10,
    left: 0,
    right: 0,
  }
});

export default taskInfoStyles;
