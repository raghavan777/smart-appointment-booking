import API from "../services/api";

export default function Login() {
  const login = async () => {
    const res = await API.post("/auth/login", {
      email: "admin@mail.com",
      password: "admin123"
    });

    localStorage.setItem("token", res.data.token);
    window.location = "/dashboard";
  };

  return (
    <div>
      <h2>Admin Login</h2>
      <button onClick={login}>Login</button>
    </div>
  );
}
