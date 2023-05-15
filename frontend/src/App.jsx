import React from "react";
import { RouterProvider } from "./routes/RouterProvider";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    //el ContextProvider iria en esta línea <>
    <>
      <BrowserRouter>
        <RouterProvider />
      </BrowserRouter>
    </>
    //el ContextProvider iria en esta línea </>
  );
}

export default App;
