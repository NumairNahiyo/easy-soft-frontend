
import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Topbar from "../componets/Topbar";
import Team from "../pages/Team";
import Portfolio from "../pages/Portfolio";
import Service from "../pages/Service";
import ServicePage from "../pages/service/ServicePage";
import PortfolioPage from "../pages/portfolio/PortfolioPage";
import ProductPage from "../pages/product/ProductPage";
import Product from "../pages/Product";
import MakeQuote from "../pages/make-quote";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <><Topbar /><LandingPage /> </>
    },
    {
      path: "/team",
      element: <><Topbar /><Team /> </>
    },
    {
      path: "/portfolio",
      element: <><Topbar /><Portfolio /> </>
    },
    {
      path: "/service",
      element: <><Topbar /><Service /> </>
    },
    {
      path: "/service/:slug",
      element: <><Topbar /><ServicePage /> </>
    },
    {
      path: "/portfolio/:slug",
      element: <><Topbar /><PortfolioPage /> </>
    },
    {
      path: "/products",
      element: <><Topbar /><Product /> </>
    },
    {
      path: "/product/:slug",
      element: <><Topbar /><ProductPage /> </>
    },
    {
      path: "/make-quote",
      element: <><Topbar /><MakeQuote /> </>
    },
])
  