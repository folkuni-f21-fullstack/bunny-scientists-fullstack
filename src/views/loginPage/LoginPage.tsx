import "../loginPage/LoginPage.scss";
import { useNavigate } from "react-router-dom";
type Props = {
  isAdminView: boolean;
  setIsAdminView: (isAdminView: boolean) => void;
};

const LoginPage = ({ setIsAdminView, isAdminView }: Props) => {
  const navigate = useNavigate();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setIsAdminView(true);
    navigate("/admin");
  };

  //required === username.id
  //required === username.password
  //checka med databas om input stämmer

  return (
    <main className="login-wrapper">
      <div className="login-container">
        <h2>Logga in som admin</h2>
        <div className="line"></div>
        <section>
          <form action="" onSubmit={handleSubmit}>
            <label htmlFor="">Användarnamn</label>
            <input type="text" required />
            <label htmlFor="">Lösenord</label>
            <input type="password" required />
            <input className="login-button" type="submit" value="logga in" />
          </form>
        </section>
      </div>
    </main>
  );
};

export default LoginPage;
