import { Button, makeStyles, Theme } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export interface ILoginProps {
    setAuth: (isAuth: boolean) => void
}


const useStyles = makeStyles((theme: Theme) => ({
    button: {
        margin: theme.spacing(1),
    },
}));

const Login: FC<ILoginProps> = ({ setAuth }) => {

    const classes = useStyles({});


    const [inputs, setInputs] = useState({
        username: "",
        password: ""
    });

    const { username, password } = inputs;

    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {

        setInputs({ ...inputs, [e.target.name]: e.target.value });
    }

    const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        console.log('gay')
        e.preventDefault();
        try {
            const body = { username, password };
            console.log(username, password)
            const response = await fetch(
                "http://localhost:3000/auth/login",
                {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify(body)
                }
            );

            const parseRes = await response.json();

            if (parseRes.token) {
                localStorage.setItem("token", parseRes.token);
                setAuth(true);
                toast.success("Logged in Successfully");
            } else {
                setAuth(false);
                toast.error(parseRes);
            }
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '100vh' }}
        >

            <Grid item xs={12}>
                <h1 className="mt-5 text-center">Login</h1>
                <form id="login-user-form" onSubmit={onSubmitForm}>
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
                <Link to="/register">register</Link>
            </Grid  >
        </Grid>
    );
};

export default Login;
