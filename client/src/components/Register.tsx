import { Button, Grid, makeStyles, TextField, Theme } from "@material-ui/core";
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import React, { FC, Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export interface IRegisterProps {
    setAuth: (isAuth: boolean) => void
}

const useStyles = makeStyles((theme: Theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));



const Register: FC<IRegisterProps> = ({ setAuth }) => {
    const [inputs, setInputs] = useState({
        password: "",
        username: "",
    });

    const classes = useStyles({});

    const { password, username } = inputs;

    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
    }

    const onSubmitForm = async (e) => {
        console.log("gay")
        e.preventDefault();
        try {
            const body = { username, password };
            const response = await fetch("http://localhost:3000/auth/register", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(body),
            });
            const parseRes = await response.json();

            if (parseRes.jwtToken) {
                localStorage.setItem("token", parseRes.jwtToken);
                setAuth(true);
                toast.success("Register Successfully");
            } else {
                setAuth(false);
                toast.error(parseRes);
            }
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <Fragment>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: '100vh' }}
            >
                <Grid item xs={12}>
                    <h1 className="mt-5 text-center">Register</h1>
                    <form id="register-user-form" onSubmit={onSubmitForm}>
                        <TextField
                            value={username}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Username"
                            name="username"
                            autoComplete="username"
                            autoFocus
                            onChange={e => onChange(e)}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={e => onChange(e)}
                            value={password}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            endIcon={<AccountBoxIcon></AccountBoxIcon>}
                            type="submit"
                        >
                            Send
                </Button>
                    </form>
                    <Link to="/login"> Sign in</Link>
                </Grid  >
            </Grid>
        </Fragment>
    );
};

export default Register;
