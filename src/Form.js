import React, { useContext } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";

import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import CheckBox from "@material-ui/core/CheckBox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockIcon from "@material-ui/icons/Lock";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles/FormStyles";
import { LanguageContext } from "./contexts/LanguageContext";
const words = {
  english: {
    email: "Email Address",
    signIn: "Sign In",
    password: "Password",
    remember: "Remember Me"
  },
  french: {
    email: "Se Connecter",
    signIn: "Adresse Electronique",
    password: "Mot de Passe",
    remember: "Souviens-toi De Moi"
  },
  spanish: {
    email: "Registrase",
    signIn: "Correo Electronico",
    password: "Contrasena",
    remember: "Recuerdame"
  }
};
function Form(props) {
  const { language, changeLanguage } = useContext(LanguageContext);
  const { classes } = props;
  const { email, signIn, password, remember } = words[language];
  return (
    <main className={classes.main}>
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockIcon />
        </Avatar>
        <Typography variant="h5">{signIn}</Typography>
        <Select value={language} onChange={changeLanguage}>
          <MenuItem value="english">English</MenuItem>
          <MenuItem value="french">French</MenuItem>
          <MenuItem value="spanish">Spanish</MenuItem>
        </Select>
        <form className={classes.form}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">{email}</InputLabel>
            <Input id="name" name="email" autoFocus></Input>
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">{password}</InputLabel>
            <Input id="password" name="password"></Input>
          </FormControl>
          <FormControlLabel
            control={<CheckBox color="primary" />}
            label={remember}
          />
          <Button
            variant="contained"
            type="submit"
            fullWidth
            color="primary"
            className={classes.submit}
          >
            {signIn}
          </Button>
        </form>
      </Paper>
    </main>
  );
}

export default withStyles(styles)(Form);
