import {FormEvent, useState} from "react";

export function RegistrationPage() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const registrationHandler = (e: FormEvent) => {
        e.preventDefault();
        fetch('http://localhost:3001/register', {
            method: 'POST',
            body: JSON.stringify({
            }),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));
    }

    return <div>
        <h1>Registration Page</h1>

        <form onSubmit={registrationHandler}>
            <div>

                <label>Username</label>
                <input type="text" placeholder="username"/>
            </div>
            <div>
                <label>Password</label>
                <input type="password" placeholder="password"/>
            </div>
            <div>
                <button type="submit">Register</button>
            </div>
        </form>
    </div>
}