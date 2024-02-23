import React from "react";
import { Suspense, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import UserDetailContext from "./context/UserDetailContext";
import Layout from "./components/Layout"
import Website from "./pages/Website"
import Properties from "./pages/Properties"
import Property from "./pages/Property"
import Bookings from "./pages/Bookings"
import Favourites  from "./pages/Favourites"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  const queryClient = new QueryClient();

  const [userDetails, setUserDetails] = useState({
    favourites: [],
    bookings: [],
    token: null,
  });
  return (
    <UserDetailContext.Provider value={{ userDetails, setUserDetails }}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
        {/* suspense to return loading istead of leaving webpage blank when data is loading */}
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route element={ <Layout/> }>
              <Route path="/" element={<Website/>} />
              <Route path="/properties">
              <Route index element={ <Properties/> } />
              <Route path=":propertyId" element={<Property/>}/>
            </Route>
            <Route path="/bookings" element={<Bookings/>}/>
            <Route path="/favourites" element={<Favourites/>}/>
            </Route>
          </Routes>
        </Suspense>
        </BrowserRouter>
        <ToastContainer/>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>

    </UserDetailContext.Provider>
  );
}

export default App;
