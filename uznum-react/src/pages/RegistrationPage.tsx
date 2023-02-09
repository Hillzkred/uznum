import {RegistrationForm} from "./registration/RegistrationForm";
import {expressRegister} from "../default.config";
import { useState } from "react";

export function RegistrationPage() {
    const [error, setError] = useState("");
    const handleRegister = (username: string, password: string) => {
        fetch(expressRegister, {
            method: 'POST',
            body: JSON.stringify({
                username,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    setError(data.error);
                } else {
                    alert("Registration successful! Please log in.");
                }
            })
            .catch(error => {
                setError(error.message);
            });
    };
    return (
        <div>
            {error && <div>{error}</div>}
            <RegistrationForm registrationHandler={handleRegister} />
        </div>
    );
}
