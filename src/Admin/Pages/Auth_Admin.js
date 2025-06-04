// src/Admin/Pages/Auth_Admin.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Auth_Admin = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const role = sessionStorage.getItem("role");
    if (role === "admin") navigate("/admin/home");
    else if (role === "sub-admin") navigate("/admin/orders");
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post("https://market-cwgu.onrender.com/login/", {
        password,
      }
    );
      console.log(res.data)

    
    const role = res.data.status;


      if (role === "admin" || role === "sub_admin") {
        sessionStorage.setItem("role", role);
        navigate(role === "admin" ? "/admin/home" : "/admin/orders");
      } else {
        setError("كلمة السر خاطئة");
      }
    } catch (err) {
      setError("حدث خطأ في الاتصال بالسيرفر");
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleLogin} style={styles.form}>
        <h2 style={styles.title}>تسجيل الدخول </h2>
        <input
          type="password"
          placeholder="أدخل كلمة السر"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>دخول</button>
        {error && <p style={styles.error}>{error}</p>}
      </form>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#f9f9f9",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    backgroundColor: "white",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "400px",
    textAlign: "center",
  },
  title: {
    marginBottom: "20px",
    color: "#1C458D",
    fontSize: "24px",
  },
  input: {
    width: "100%",
    padding: "12px",
    margin: "10px 0",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontSize: "16px",
  },
  button: {
    backgroundColor: "#1C458D",
    color: "white",
    padding: "12px",
    width: "100%",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  error: {
    marginTop: "10px",
    color: "red",
    fontSize: "14px",
  },
};

export default Auth_Admin;
