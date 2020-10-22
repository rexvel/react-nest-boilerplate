import React, { FC, Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export interface IRegisterProps {
    setAuth: (isAuth: boolean) => void
}


const Register: FC<IRegisterProps> = ({ setAuth }) => {
    const [inputs, setInputs] = useState({
        password: "",
        username: "",
    });

    const { password, username } = inputs;



    const onChange = (e: React.FormEvent<HTMLInputElement>) => {
        const { name, value } = e.target as HTMLButtonElement;
        setInputs({ ...inputs, [name]: value });
    }

    const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
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
            <h1 className="mt-5 text-center">Register</h1>
            <input
                type="text"
                name="username"
                value={username}
                placeholder="name"
                onChange={(e) => onChange(e)}
                className="form-control my-3"
            />
            <form onSubmit={onSubmitForm}>
                <input
                    type="password"
                    name="password"
                    value={password}
                    placeholder="password"
                    onChange={(e) => onChange(e)}
                    className="form-control my-3"
                />
                <button className="btn btn-success btn-block">Submit</button>
            </form>
            <Link to="/login">login</Link>
        </Fragment>
    );
};

export default Register;
