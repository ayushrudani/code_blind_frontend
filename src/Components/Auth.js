// check if there is session has data or not if not then redirect to /login page

import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Home";
function Auth() {
  const navigate = useNavigate();
  useEffect(() => {
    const sessionData = localStorage.getItem("session");
    if (!sessionData) {
      navigate("/login");
    }
  }, []);
}

export default Auth;
