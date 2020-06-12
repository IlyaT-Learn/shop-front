import React, {useCallback, useState} from 'react';
import styles from './RegisterPage.module.scss';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Loader from '../../components/atoms/Loader/Loader';

const RegisterPage = ({onRegisterClick, registerRequestLoaderShow}) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [mail, setMail] = useState('');
    const [phone, setPhone] = useState('');

    const passwordCorrect = (password.length > 0) && (password === passwordConfirm);
    const emailCorrect = mail.includes('@') && mail.includes('.');
    const phoneCorrect = phone.includes('+') && phone.length === 13;
    const firstNameCorrect = firstName.length > 2;
    const lastNameCorrect = lastName.length > 2;
    const loginCorrect = login.length > 3;

    const handleFirstNameChange = useCallback((e) => setFirstName(e.target.value), [setFirstName]);
    const handleLastNameChange = useCallback((e) => setLastName(e.target.value), [setLastName]);
    const handleLoginChange = useCallback((e) => setLogin(e.target.value), [setLogin]);
    const handlePasswordChange = useCallback((e) => setPassword(e.target.value), [setPassword]);
    const handleMailChange = useCallback((e) => setMail(e.target.value), [setMail]);
    const handlePhoneChange = useCallback((e) => setPhone(e.target.value), [setPhone]);

    const handlePasswordConfirmChange = useCallback((e) => setPasswordConfirm(e.target.value), [setPasswordConfirm]);

    const handleRegisterClick = useCallback(() => {
        onRegisterClick({
            firstName,
            lastName,
            login,
            password,
            mail,
            phone
        })
    }, [firstName, lastName, login, password, mail, phone, passwordCorrect, emailCorrect, phoneCorrect, onRegisterClick]);

    return (
        <div className={styles.container}>
            <Loader show={registerRequestLoaderShow}/>
            <div>
                <p>Если у вас уже есть учетная запись, пожалуйста, войдите на страницу входа.</p>
                <h2>Ваши личные данные</h2>
                <div className={styles.field}>
                    <TextField
                        value={firstName}
                        onChange={handleFirstNameChange}
                        error={!firstNameCorrect}
                        helperText={firstNameCorrect}
                        label="Имя"
                        variant="outlined"
                    />
                </div>

                <div className={styles.field}>
                    <TextField
                        value={lastName}
                        error={!lastNameCorrect}
                        onChange={handleLastNameChange}
                        label="Фамилия"
                        variant="outlined"
                    />
                </div>

                <div className={styles.field}>
                    <TextField
                        value={login}
                        error={!loginCorrect}
                        onChange={handleLoginChange}
                        label="Логин"
                        variant="outlined"
                    />
                </div>

                <div className={styles.fieldContainer}>
                    <div className={styles.field}>
                        <TextField
                            value={password}
                            onChange={handlePasswordChange}
                            label="Пароль"
                            variant="outlined"
                        />
                    </div>
                    <div className={styles.field}>
                        <TextField
                            value={passwordConfirm}
                            onChange={handlePasswordConfirmChange}
                            error={!passwordCorrect}
                            label="Подтверждение пароля"
                            helperText={passwordCorrect ? undefined : 'Пароли не совпадают'}
                            variant="outlined"
                        />
                    </div>
                </div>

                <div className={styles.field}>
                    <TextField
                        value={mail}
                        onChange={handleMailChange}
                        error={!emailCorrect}
                        helperText={emailCorrect ? undefined : 'Неверный адрес почты'}
                        label="Почта"
                        variant="outlined"
                    />
                </div>

                <div className={styles.field}>
                    <TextField
                        value={phone}
                        onChange={handlePhoneChange}
                        error={!phoneCorrect}
                        helperText={phoneCorrect ? undefined : 'Некорректный номер'}
                        label="Телефон"
                        variant="outlined"
                    />
                </div>

                <div className={styles.field}>
                    <Button variant="contained" color="secondary"
                            disabled={
                                !passwordCorrect ||
                                !emailCorrect ||
                                !phoneCorrect ||
                                !firstNameCorrect ||
                                !lastNameCorrect ||
                                !loginCorrect}
                            onClick={handleRegisterClick}
                    > Register </Button>
                </div>
            </div>
        </div>
    )
        ;
};

export default RegisterPage;
