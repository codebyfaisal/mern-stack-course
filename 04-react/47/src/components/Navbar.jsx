import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import { LogIn, Plus } from "lucide-react";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/services">Service</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/products">Products</Link>

      <Button label={"Login"} />

      <Button>
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-log-in-icon lucide-log-in"><path d="m10 17 5-5-5-5"/><path d="M15 12H3"/><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/></svg>

        <span>Ok button</span>         */}
        <LogIn />
        <Plus style={{ color: "red" }} />
      </Button>

      <Button
        // children={
        //   <>
        //     <svg
        //       xmlns="http://www.w3.org/2000/svg"
        //       width="24"
        //       height="24"
        //       viewBox="0 0 24 24"
        //       fill="none"
        //       stroke="currentColor"
        //       stroke-width="2"
        //       stroke-linecap="round"
        //       stroke-linejoin="round"
        //       class="lucide lucide-log-in-icon lucide-log-in"
        //     >
        //       <path d="m10 17 5-5-5-5" />
        //       <path d="M15 12H3" />
        //       <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
        //     </svg>
        //     <span>Ok button</span>
        //   </>
        // }
        label={"Hello"}
      />
    </nav>
  );
};

export default Navbar;
