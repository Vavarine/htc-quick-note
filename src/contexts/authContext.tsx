import { createContext, PropsWithChildren, useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { json, Outlet, useNavigate } from "react-router-dom";
import { api } from "../services/api";

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
};

type UserSignUp = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

type UserLogin = {
  email: string;
  password: string;
  rememberMe: boolean;
};

interface IContext {
  signUp: (user: UserSignUp) => void;
  login: (user: UserLogin) => void;
  logout: () => void;
  user?: User;
}

export const AuthContext = createContext({} as IContext);

export function AuthProvider() {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | undefined>(() => {
    const user =
      localStorage.getItem("@QuickNote:user") || sessionStorage.getItem("@QuickNote:user");

    return user ? JSON.parse(user) : undefined;
  });

  const signUp = async (user: UserSignUp) => {
    try {
      await api.post("/users", user);

      toast("Registrado com sucesso!", {
        icon: "🎉",
      });

      navigate("/login");
    } catch (e) {
      console.log(e);

      toast("Erro ao registrar-se!", {
        icon: "🙁",
      });
    }
  };

  const login = async (userToLogin: UserLogin) => {
    console.log(userToLogin);

    try {
      const { data } = await api.post("/sessions", userToLogin);
      const { user, token } = data;

      setUser(data.user);

      if (userToLogin.rememberMe) {
        localStorage.setItem("@QuickNote:user", JSON.stringify(user));
        localStorage.setItem("@QuickNote:token", token);
      } else {
        sessionStorage.setItem("@QuickNote:user", JSON.stringify(user));
        sessionStorage.setItem("@QuickNote:token", token);
      }

      if (token) api.defaults.headers.authorization = `Bearer ${token}`;

      toast("Logado com sucesso!", {
        icon: "🎉",
      });

      setTimeout(() => {
        navigate("/");
      });
    } catch (e) {
      toast("Erro ao logar-se!", {
        icon: "🙁",
      });
    }
  };

  const logout = () => {
    console.log("logout");

    localStorage.removeItem("@QuickNote:user");
    localStorage.removeItem("@QuickNote:token");
    sessionStorage.removeItem("@QuickNote:user");
    sessionStorage.removeItem("@QuickNote:token");

    setUser(undefined);

    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ signUp, login, logout, user }}>
      <Outlet />
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
