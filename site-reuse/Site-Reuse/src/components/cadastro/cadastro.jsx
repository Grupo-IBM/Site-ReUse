import { useState } from "react";
import { useForm } from "react-hook-form";
import { isEmail } from "validator";
import "./cadastro.scss";

const GoodForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const watchPassword = watch("password");

  const [formData ,setFormData] = useState({});
  const [duplicateData, setDuplicateData] = useState(false); // Estado para verificar duplicatas
  const [showEmailError, setShowEmailError] = useState(false); // Estado para controlar a exibição do erro de email

  const checkForDuplicateData = (data) => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    return storedUsers.some((user) => user.email === data.email);
  };

  const onSubmit = (data) => {
    if (checkForDuplicateData(data)) {
      setDuplicateData(true); // Dados duplicados
      setShowEmailError(true); // Exibir mensagem de erro
      return; // Não prosseguir com o cadastro
    }

    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const updatedUsers = [...storedUsers, data];
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    setFormData(data);
    alert("Cadastro realizado com sucesso! Você será levado para a área de login");
    reset({
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
    });
    setTimeout(() => {
      window.location.href = "/Login";
    }, 1000);
  };

  // Adicione um evento onChange ao campo de email para ocultar o erro quando o usuário apagar o email
  const handleEmailChange = () => {
    setShowEmailError(false);
  };

  return (
    <>
      <div className="banner">
        <div className="container">
          <div className="header">
            <h2 className="titulo">Fazer Cadastro</h2>
          </div>
          <div className="form">
            <div className="app-container">
              {duplicateData && showEmailError && (
                <p className="error-message">Já existe um cadastro com este e-mail.</p>
              )}
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
                  onChange={handleEmailChange} // Adicione este evento onChange
                />
                {errors?.email?.type === "required" && (
                  <p className="error-message">Email é Obrigatório.</p>
                )}

                {errors?.email?.type === "validate" && (
                  <p className="error-message">Email inválido</p>
                )}

                {/* Exiba a mensagem de erro apenas se showEmailError for verdadeiro */}
                {showEmailError && (
                  <p className="error-message">Já existe um cadastro com este e-mail.</p>
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
                    A senha precisa de pelo menos 6 caracteres
                  </p>
                )}
              </div>

              <div className="form-control">
                <label>Confirmação de senha</label>
                <input
                  className={errors?.passwordConfirmation && "input-error"}
                  type="password"
                  placeholder="Repita a senha"
                  {...register("passwordConfirmation", {
                    required: true,
                    validate: (value) => value === watchPassword,
                  })}
                />
                {errors?.passwordConfirmation?.type === "required" && (
                  <p className="error-message">
                    A confirmação de senha é obrigatória
                  </p>
                )}

                {errors?.passwordConfirmation?.type === "validate" && (
                  <p className="error-message">As senhas não combinam</p>
                )}
              </div>
              <div className="form-control">
                <button onClick={handleSubmit(onSubmit)}>Criar conta</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GoodForm;
