import { FormEvent, useState } from "react";
import { toast } from "react-toastify";

// actions
import { loginUser } from "../actions/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    const userObj = { email, password };
    const data = await loginUser(userObj);
    setLoading(false);
    if (data.success === true) {
      setEmail("");
      setPassword("");
      toast.success("Login Successful");
    } else {
      toast.error(data.message);
    }
  };
  return (
    <section className="bg-slate-100 max-w-[500px] mx-auto p-5 rounded-lg">
      <h2 className="text-2xl text-center mb-10">Log in to your account</h2>
      <form className="flex flex-col gap-2" onSubmit={handleFormSubmit}>
        <div className="bg-white rounded-lg">
          <input
            type="email"
            className="p-3 w-full outline-none bg-transparent"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="bg-white rounded-lg">
          <input
            type="password"
            className="p-3 w-full outline-none bg-transparent"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <input
          type="submit"
          value="Login"
          className="w-full bg-green-600 text-white p-3 mt-2 text-lg rounded-lg cursor-pointer"
          disabled={loading}
        />
      </form>
    </section>
  );
}

export default Login;
