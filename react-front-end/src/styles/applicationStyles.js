import { makeStyles } from '@material-ui/core/styles';

const applicationStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
  },

  avatar: {
    alignSelf: "center",
    width: theme.spacing(12),
    height: theme.spacing(12),
  },

  buttonContainer: {
    display: "flex",
    marginTop: "20px"
  },

  accept: {
    maxWidth: 800,
    margin: "auto",
    marginTop: "10px",
    fontWeight: 'bold',
    padding: '0.5em',
    color: theme.palette.base.main,
    backgroundColor: theme.palette.accent.main,
    "&:hover": {
      color: theme.palette.accent.main,
      backgroundColor: theme.palette.base.main
    }
  },

  reject: {
    maxWidth: 800,
    margin: "auto",
    marginTop: "10px",
    fontWeight: 'bold',
    padding: '0.5em',
    color: theme.palette.base.main,
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.base.main
    }
  }

}));

export default applicationStyles;
