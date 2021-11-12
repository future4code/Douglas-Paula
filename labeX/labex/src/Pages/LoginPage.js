import React, { useState } from "react";
import '../App.css';
import { BASE_URL } from "./url";
import axios from "axios";
import { useHistory } from "react-router";

function Login() {

  const history = useHistory();

  const [form, setForm] = useState({email:"", password:""})

  const onChange = (event) => {
      setForm({...form, [event.target.name]: event.target.value})
  }

  const onSubmitLogin = (event) => {

      event.preventDefault();
      axios
        .post(
          `${BASE_URL}/login`,
          form
        )
        .then((response) => {
          history.push("/AdminHomePage");
          console.log("Deu certo", response.data);
        })
        .catch((error) => {
          console.log("Deu errado", error.response);
        });
    };

  
  return(
      <div>
          <h1>Login Page</h1>
          <form onSubmit={onSubmitLogin}>

              <input
                  name={"email"}
                  required
                  type={"email"}
                  value={form.email}
                  placeholder="Email"
                  onChange={onChange}
                  label={"Email"}
              />

              <input
                  name={"password"}
                  label={"Senha"}
                  required
                  type={"password"}
                  value={form.password}
                  placeholder="Senha"
                  onChange={onChange}
              />

              <button>Fazer login</button>
          </form>
      </div>
  )
}

export default Login;