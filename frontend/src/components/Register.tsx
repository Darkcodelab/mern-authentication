import { FormEvent, useState } from "react";
import { toast } from "react-toastify";

// actions
import { registerUser } from "../actions/auth";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    const userObj = { name, email, password };
    const data = await registerUser(userObj);
    setLoading(false);
    if (data.success === true) {
      setName("");
      setEmail("");
      setPassword("");
      toast.success("Registration successful");
    } else {
      toast.error(data.message);
    }
  };
  return (
    <section className="bg-slate-100 max-w-[500px] mx-auto my-10 p-5 rounded-lg">
      <h2 className="text-2xl text-center mb-10">Create new account</h2>
      <form className="flex flex-col gap-2" onSubmit={handleFormSubmit}>
        <div className="bg-white rounded-lg">
          <input
            type="text"
            className="p-3 w-full outline-none bg-transparent"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
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
          value="Register"
          className="w-full bg-green-600 text-white p-3 mt-2 text-lg rounded-lg cursor-pointer"
          disabled={loading}
        />
      </form>
    </section>
  );
}

export default Register;
