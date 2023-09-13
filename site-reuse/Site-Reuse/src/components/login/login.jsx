
import { useForm } from "react-hook-form";
import { isEmail } from "validator";
import './login.scss'
import { Link } from "react-router-dom"; 

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => { 
    const users = JSON.parse(localStorage.getItem("users"));

    if (users) {
      const user = users.find((u) => u.email === data.email && u.password === data.password);

      if (user) {
        alert(`Olá, ${user.name}! Seja bem vindo ao ReUSe`);
        setTimeout(() => {
          window.location.href = "/Usuario";
        }, 1000);
      } else {
        alert("Email ou senha incorretos");
      }
    } else {
      alert("Nenhum usuário cadastrado");
    }
    reset({
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
    });
  };

  return (
    <>
      <div className="banner">
        <div className="container">
          <div className="header">
            <h2 className="titulo">Fazer Login</h2>
          </div>
          <div className="form">
            <div className="app-container">
              <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label>Nome</label>
                <input
                  className={errors?.name && "input-error"}
                  type="text"
                  placeholder="Seu nome"
                  {...register("name", { required: true })}
                />
                {errors?.name?.type === "required" && (
                  <p className="error-message">Nome é Obrigatório.</p>
                )}
              </div>
                <div className="form-control">
                  <label>E-mail</label>
                  <input
                    className={errors?.email && "input-error"}
                    type="email"
                    placeholder="Seu Email"
                    {...register("email", {
                      required: true,
                      validate: (value) => isEmail(value),
                    })}
                  />
                  {errors?.email?.type === "required" && (
                    <p className="error-message">Email é Obrigatório.</p>
                  )}
                  {errors?.email?.type === "validate" && (
                    <p className="error-message">Email inválido</p>
                  )}
                </div>

                <div className="form-control">
                  <label>Senha</label>
                  <input
                    className={errors?.password && "input-error"}
                    type="password"
                    placeholder="Senha"
                    {...register("password", { required: true, minLength: 6 })}
                  />

                  {errors?.password?.type === "required" && (
                    <p className="error-message">Senha é Obrigatório.</p>
                  )}

                  {errors?.password?.type === "minLength" && (
                    <p className="error-message">
                      A senha precisa ter pelo menos 6 caracteres
                    </p>
                  )}
                </div>
                
                <div className="form-control">
                  <button type="submit">Fazer Login</button>
                </div>
                <Link to="/Cadastro" className="voltar">
                    Voltar para cadastrar
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
