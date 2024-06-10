import "./styles/login.css";
// import { SetStateAction, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { message } from "antd";

export const LoginPage = () => {
  // const [ip, setIp] = useState("");
  // const [user, setuser] = useState("");
  // const [password, setpassword] = useState("");
  // const handleUser = (e: { target: { value: SetStateAction<string>; }; }) => {
  //   setuser(e.target.value);
  // };
  // const handlePassword = (e: { target: { value: SetStateAction<string>; }; }) => {
  //   setpassword(e.target.value);
  // };
  // const navigate = useNavigate();

  // axios
  //     .post(`http://${ip}/admin`, {user, password})
  //     .then((res) => {
  //         setTimeout(() => {
  //                 console.log(res);
  //                 message.success('Connecté avec succès');
  //                 sessionStorage.setItem("user", JSON.stringify(res));
  //                 // setuser(res.data.user)
  //                 navigate('/acceuil');
  //             }, 1000);
  //     })
  //     .catch((err) => {
  //         setTimeout(() => {
  //             console.log(url_request);
  //             console.error(err);
  //             message.error('Mot de passe ou nom d\'utilisateur incorrect', 10);
  //         }, 1000);
  //     });
  // }
  return (
    <div className="ContenaireLogin">
      <div className="BackgroundLogin"></div>
      <div className="LoginForm">
        <form action="/login" method="post" className="login">
          <div className="titreLogin">
            <p>Connexion</p>
          </div>

          <div className="email">
            <label>Adresse e-mail</label>
            <input
              className="inputEmail"
              placeholder="example@gmail.com"
              type="email"
            ></input>
          </div>
          <div className="password">
            <label>Password</label>
            <input
              className="inputPassword"
              placeholder="Entrer votre password"
              type="password"
            ></input>
          </div>
          <div className="oublier">
            <p>Mot de passe oublié</p>
          </div>
          <div className="connexion">
            <button className="buttonLogin">SE CONNECTER</button>
          </div>
          <div className="signupLogin">
            <p className="pasDeCompte">Vous n’avez pas un compte?</p>
            <p className="creerCompte">Créer un compte</p>
          </div>
        </form>
      </div>
    </div>
  );
}

