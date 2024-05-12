import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Toast() {
  const notify = () => toast("We'll get back to you soon");
  return (
    <div>
      <button onClick={notify}>Notify!</button>
      <ToastContainer theme="dark" />
    </div>
  );
}

export default Toast;
