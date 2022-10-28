import "../loginPage/LoginPage.scss";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Credentials } from '../../models/data';

type Props = {
    isAdminView: boolean;
    setIsAdminView: (isAdminView: boolean) => void;
};

const LoginPage = ({ setIsAdminView, isAdminView }: Props) => {
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    //const [user, setUser] = useState<string>()
    //const [credentials, setCredentials] = useState<Credentials[]>([]);

    const navigate = useNavigate();

    const handleLogin = async (event: any) => {
        event.preventDefault();
        //state som postas och ska jämföras
        let user = {
            username: username,
            password: password
        }
        console.log(user)
        const sendingCredentials = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        }
        const credentialsResult = await fetch('/api/credentials', sendingCredentials)
        //if (credentialsResult == true ?)

        //post ska användas och skicka in user som argument till bodyn
        //let credentialsResult = await fetch('/api/credentials/login', {
        //    mode: 'cors',
        //})
        //credentialsResult = await credentialsResult.json()
        console.log(credentialsResult) //loggar ut credentials, alltså användarna som finns
        //credentialsResult.success
        if (credentialsResult.status === 200) { //if success then proceed
            setIsAdminView(true);
            navigate("/admin");
        } else {
            //alert('Wrong username/password')
        }
    };

    // if setCredentials.username === setUsername return true
    // if setCredentials.password === setPassword return true
    // else return false + alert

    //required === username.id
    //required === username.password
    //checka med databas om input stämmer

    return (
        <main className="login-wrapper">
            <div className="login-container">
                <h2>Logga in som admin</h2>
                <hr />
                <section>
                    <form action="" onSubmit={handleLogin}>
                        <label htmlFor="">Användarnamn</label>
                        <input type="text" onChange={(e) => setUsername(e.target.value)} value={username} required />
                        <label htmlFor="">Lösenord</label>
                        <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} required />
                        <input className="login-button" type="submit" value="logga in" />
                    </form>
                </section>
            </div>
        </main>
    );
};

export default LoginPage;
