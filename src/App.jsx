import React, { useState, useEffect } from "react";
import { RouterProvider, useNavigate } from "react-router-dom";
import { router } from "./utlities/routes";
import "./assets/css/main.css";
import "./assets/css/responsive.css";
import { ColorRing } from 'react-loader-spinner'
function LoadingScreen() {
  return (
    <div className="loading-screen">
        <ColorRing
  visible={true}
  height="80"
  width="80"
  ariaLabel="color-ring-loading"
  wrapperStyle={{}}
  wrapperClass="color-ring-wrapper"
  colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
  />
    </div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a 2-second delay for demonstration purposes
    const delay = setTimeout(() => {
      setLoading(false);
      clearTimeout(delay);
    }, 5000);

    // Cleanup the timeout if the component unmounts
    return () => clearTimeout(delay);
  }, []);

  return (
    <div className="main-container">
      {loading ? (
        <LoadingScreen />
      ) : (
        <div className="main-content">
          {/* Use the RouterProvider here */}
          <RouterProvider router={router}>
            {/* Your routes go here */}
          </RouterProvider>
        </div>
      )}
    </div>
  );
}

export default App;
