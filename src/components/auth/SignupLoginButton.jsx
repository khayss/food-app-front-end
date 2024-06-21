import React from "react";
import { Link } from "react-router-dom";

function SignupLoginButton() {
  return (
    <div className="flex items-center justify-center gap-2">
      <Link to={"/login"} className="bg-main border-2 border-main hover:bg-secondary text-white font-medium py-1 px-4 rounded">
        Login
      </Link>
      <Link to={"/signup"} className="hidden md:block bg-white hover:bg-zinc-700 text-zinc-700 hover:text-white border-2 border-zinc-700 font-medium py-1 px-4 rounded">
        Signup
      </Link>
    </div>
  );
}

export default SignupLoginButton;
