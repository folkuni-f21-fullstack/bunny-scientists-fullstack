import '../loginPage/LoginPage.scss'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Credentials } from '../../models/data'

type Props = {
    isAdminView: boolean;
    setIsAdminView: (isAdminView: boolean) => void;
}

const LoginPage = ({ setIsAdminView, isAdminView }: Props) => {
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const navigate = useNavigate();

    //function körs när användaren clickar på "logga in" knappen
    const handleLogin = async (event: any) => {
        event.preventDefault();
        //state som skickas och ska jämföras
        let user: Credentials = {
            username: username,
            password: password
        }

        //skickar user till /api/credentials
        const sendingCredentials = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        }
        const credentialsResult = await fetch('/api/credentials', sendingCredentials)
        console.log(credentialsResult) //visar resultatet vi får från databasen
        if (credentialsResult.status === 200) {
            setIsAdminView(true);
            navigate("/admin");
        } else {
            //alert('Wrong username/password')
        }
    }

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
    )
}

export default LoginPage
