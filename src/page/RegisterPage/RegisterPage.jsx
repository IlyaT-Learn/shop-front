import React, { useCallback, useState } from "react";
import styles from "./RegisterPage.module.scss";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Loader from "../../components/atoms/Loader/Loader";

const RegisterPage = ({ onRegisterClick, registerRequestLoaderShow }) => {
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const passwordConfirmError = !!(password && passwordConfirm && password !== passwordConfirm);

  const handlePasswordChange = useCallback((e) => setPassword(e.target.value), [setPassword]);

  const handlePasswordConfirmChange = useCallback((e) => setPasswordConfirm(e.target.value),
    [setPasswordConfirm]);

  const handleRegisterClick = useCallback(() => {
    if (!passwordConfirmError) {
      onRegisterClick({
        password
      });
    }
  }, [password, passwordConfirmError, onRegisterClick]);

  return (
    <div className={styles.container}>
      <Loader show={registerRequestLoaderShow}/>
      <div>
        <p>If you already have an account with us, please login at the login page.</p>

        <h3>Your Personal Details</h3>
        <div>

        </div>

        <h3>Your Password</h3>
        <div>
          <TextField
            value={password}
            onChange={handlePasswordChange}
            label="Password"
            variant="outlined"
          />
          <TextField
            value={passwordConfirm}
            onChange={handlePasswordConfirmChange}
            error={passwordConfirmError}
            label="Password Confirm"
            helperText={passwordConfirmError ? "Пароли не совпадают" : undefined}
            variant="outlined"
          />
        </div>

        <Button variant="contained" color="secondary" disabled={passwordConfirmError} onClick={handleRegisterClick}>
          Register
        </Button>
      </div>
    </div>
  );
};

export default RegisterPage;