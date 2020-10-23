import Container from '@material-ui/core/Container';
import React, { useEffect, useState } from "react";
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch
} from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./components/Dashboard";
//components
import Login from "./components/Login";
import Register from "./components/Register";

toast.configure();


const App = () => {
    const checkAuthenticated = async () => {
        try {
            const res = await fetch("http://localhost:3000/auth/login", {
                method: "POST",
                headers: { jwt_token: localStorage.token },
            });

            const parseRes = await res.json();

            parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        checkAuthenticated();
    }, []);

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const setAuth = (isAuth: boolean): void => {
        setIsAuthenticated(isAuth);
    };

    return (
        <Container component="main" maxWidth="xs">
            <Router>
                <div className="container">
                    <Switch>
                        <Route exact path="/">
                            <Redirect to="/home" />
                        </Route>
                        <Route
                            exact
                            path="/login"
                            render={(props) =>
                                !isAuthenticated ? (
                                    <Login {...props} setAuth={setAuth} />
                                ) : (
                                        <Redirect to="/dashboard" />
                                    )
                            }
                        />
                        <Route
                            exact
                            path="/register"
                            render={(props) =>
                                !isAuthenticated ? (
                                    <Register {...props} setAuth={setAuth} />
                                ) : (
                                        <Redirect to="/dashboard" />
                                    )
                            }
                        />
                        <Route
                            exact
                            path="/dashboard"
                            render={(props) =>
                                isAuthenticated ? (
                                    <Dashboard {...props} setAuth={setAuth} />
                                ) : (
                                        <Redirect to="/login" />
                                    )
                            }
                        />
                    </Switch>
                </div>
            </Router>
        </Container>
    );
}

export default App;
