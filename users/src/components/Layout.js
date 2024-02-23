import React from "react";
import Footer from "./Footer"
import Navbar from "./Navbar"
import { Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import UserDetailContext from "../context/UserDetailContext";
import { useMutation } from "react-query";
import { createUser } from "../utilis/api";
import useFavourites from "../hooks/useFavorites";
import useBookings from "../hooks/useBooking";
import { useEffect } from "react";
import { useContext } from "react";

const Layout = () => {

  useFavourites()
  useBookings()

  const { isAuthenticated, user, getAccessTokenWithPopup } = useAuth0();
  const { setUserDetails } = useContext(UserDetailContext);

  const { mutate } = useMutation({
    mutationKey: [user?.email],
    mutationFn: (token) => createUser(user?.email, token),
  });

  useEffect(() => {
    const getTokenAndRegsiter = async () => {

      const res = await getAccessTokenWithPopup({
        authorizationParams: {
          audience: "http://localhost:4000",
          scope: "openid profile email",
        },
      });
      localStorage.setItem("access_token", res);
      setUserDetails((prev) => ({ ...prev, token: res }));
      mutate(res)
    };


    isAuthenticated && getTokenAndRegsiter();
  }, [isAuthenticated]);

  return (
    <>
      <div style={{ background: "var(--black)", overflow: "hidden" }}>
        <Navbar/>
        {/* allows rendering of children */}
        <Outlet />
      </div>
      <Footer/>
      
    </>
  );
};

export default Layout;
