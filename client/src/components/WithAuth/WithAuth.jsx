import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api";

const withAuth = (WrappedComponent) => {
  return function WithAuthComponent(props) {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
      const checkToken = async () => {
        const isLoggedIn = await checkTokenValidity();
        setLoggedIn(isLoggedIn);
        setLoading(false);
      };

      checkToken();
    }, []);

    const checkTokenValidity = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        return false;
      }

      try {
        const response = await api.get("/user/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        return response.status === 200;
      } catch (error) {
        console.error("Error checking token:", error);
        return false;
      }
    };

    if (loading) {
      return <div>Loading...</div>;
    }

    if (!loggedIn) {
      navigate("/login");
      return null;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
