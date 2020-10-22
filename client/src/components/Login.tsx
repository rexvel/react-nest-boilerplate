import React, { FC, Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";


export interface ILoginProps {
    setAuth: (isAuth: boolean) => void
}



const Login: FC<ILoginProps> = ({ setAuth }) => {
    const [inputs, setInputs] = useState({
        username: "",
        password: ""
    });

    const { username, password } = inputs;

    const onChange = (e: React.FormEvent<HTMLInputElement>) =>{
    const { name, value } = e.target as HTMLButtonElement;
        setInputs({ ...inputs, [name]: value });
    }

    const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const body = { username, password };
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

            if (parseRes.jwtToken) {
                localStorage.setItem("token", parseRes.jwtToken);
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
        <Fragment>
            <h1 className="mt-5 text-center">Login</h1>
            <form onSubmit={onSubmitForm}>
                <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={e => onChange(e)}
                    className="form-control my-3"
                />
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={e => onChange(e)}
                    className="form-control my-3"
                />
                <button className="btn btn-success btn-block">Submit</button>
            </form>
            <Link to="/register">register</Link>
        </Fragment>
    );
};

export default Login;
