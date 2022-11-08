import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Credentials } from "../../models/data";
import "../loginPage/LoginPage.scss";

type Props = {
  isAdminView: boolean;
  setIsAdminView: (isAdminView: boolean) => void;
};

const LoginPage = ({ setIsAdminView, isAdminView }: Props) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [wrongCredentials, setWrongCredentials] = useState<boolean>(false);
  const navigate = useNavigate();

  //är man inloggad så kan man inte komma tillbaka till /login utan att logga ut först
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/admin");
    }
  }, []);

  //function körs när användaren clickar på "logga in" knappen
  const handleLogin = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    //state som skickas och ska jämföras
    let user: Credentials = {
      username: username,
      password: password,
    };

    //skickar user till /api/credentials
    const sendingCredentials = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    };

    const credentialsResult = await fetch(
      "/api/credentials",
      sendingCredentials
    );
    if (credentialsResult.status === 200) {
      localStorage.setItem("user", JSON.stringify(credentialsResult));
      setIsAdminView(true);
      navigate("/admin");
    } else {
      //visar användaren om den skrivit in fel användarnamn/lösenord
      setWrongCredentials(true);
    }
  };

  return (
    <main className="login-wrapper">
      <div className="login-container">
        <h2>Logga in som admin</h2>
        <hr />
        <section>
          <form action="" onSubmit={handleLogin}>
            <label htmlFor="">Användarnamn</label>
            <input
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              required
            />
            <label htmlFor="">Lösenord</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
            <input className="login-button" type="submit" value="logga in" />
          </form>
          {wrongCredentials ? (
            <p className="credentials-alert">Wrong username and or password!</p>
          ) : (
            <></>
          )}
        </section>
      </div>
    </main>
  );
};

export default LoginPage;
