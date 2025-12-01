import { LockIcon, MailIcon, User2Icon } from 'lucide-react'
import React from 'react'

const Login = () => {
    const query = new URLSearchParams(window.location.search);
    // 'state' param means 'login' or 'register'
    const urlState = query.get('state');
    const [state, setState] = React.useState(urlState === "register" ? "register" : "login");

    // group form data whether login or register
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        password: ''
    });

    // basic validation/output to check
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (state === "register" && !formData.name) {
            alert("Please enter your name to register.");
            return;
        }
        if (!formData.email || !formData.password) {
            alert("Email and password are required.");
            return;
        }
        // Simulate login/register outcome
        if (state === "login") {
            alert(`Logging in with Email: ${formData.email}`);
            // Do login logic here
        } else {
            alert(`Registering user: ${formData.name} (${formData.email})`);
            // Do register logic here
        }
        // Reset passwords for demo
        setFormData((prev) => ({ ...prev, password: "" }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }))
    };

    // Optionally reset everything for "Forget password?" button
    const handleReset = (e) => {
        e.preventDefault();
        setFormData({
            name: '',
            email: '',
            password: ''
        });
        alert("Password reset flow not implemented.");
    };

    return (
        <div className='flex items-center justify-center min-h-screen bg-gray-50 px-4'>
            <form onSubmit={handleSubmit} className="sm:w-[350px] w-full text-center border border-gray-300/60 rounded-2xl px-8 bg-white">
                <h1 className="text-gray-900 text-3xl mt-10 font-medium">{state === "login" ? "Login" : "Sign up"}</h1>
                <p className="text-gray-500 text-sm mt-2">Please {state} to continue</p>
                {state !== "login" && (
                    <div className="flex items-center mt-6 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
                        <User2Icon className="size-4 stroke-gray-400" />
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            className="border-none outline-none ring-0"
                            value={formData.name}
                            onChange={handleChange}
                            required={state !== "login"}
                            autoComplete="username"
                        />
                    </div>
                )}
                <div className="flex items-center w-full mt-4 bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
                    <MailIcon className="size-4 stroke-gray-400" />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email id"
                        className="border-none outline-none ring-0"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        autoComplete="email"
                    />
                </div>
                <div className="flex items-center mt-4 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
                    <LockIcon className="size-4 stroke-gray-400" />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="border-none outline-none ring-0"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        autoComplete={state === "login" ? "current-password" : "new-password"}
                    />
                </div>
                <div className="mt-4 text-left text-green-500">
                    <button className="text-sm" type="button" onClick={handleReset}>
                        Forget password?
                    </button>
                </div>
                <button
                    type="submit"
                    className="mt-2 w-full h-11 rounded-full text-white bg-green-500 hover:opacity-90 transition-opacity"
                >
                    {state === "login" ? "Login" : "Sign up"}
                </button>
                <p
                    onClick={() => setState(prev => prev === "login" ? "register" : "login")}
                    className="text-gray-500 text-sm mt-3 mb-11 cursor-pointer select-none"
                >
                    {state === "login"
                        ? "Don't have an account?"
                        : "Already have an account?"}{' '}
                    <span className="text-green-500 hover:underline">
                        click here
                    </span>
                </p>
                <button
                    type="button"
                    className="w-full flex items-center gap-2 justify-center mt-5 bg-black py-2.5 rounded-full text-white"
                    onClick={() => alert("Apple login not implemented.")}
                >
                    <img className="h-4 w-4" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/appleLogo.png" alt="appleLogo" />
                    Log in with Apple
                </button>
                <button
                    type="button"
                    className="w-full flex items-center gap-2 justify-center my-3 bg-white border border-gray-500/30 py-2.5 rounded-full text-gray-800"
                    onClick={() => alert("Google login not implemented.")}
                >
                    <img className="h-4 w-4" src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleFavicon.png" alt="googleFavicon" />
                    Log in with Google
                </button>
            </form>
        </div>
    );
}

export default Login
