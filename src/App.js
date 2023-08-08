// Components
import Layout, { LayoutLoader } from "./Layout/Layout";
import Home, { HomeAction, HomeLoader } from "./Components/Home";
import NotFound from "./Components/NotFound";

// Logout action function
import { LogoutAction } from "./Helpers/Logout";

// React Router Dom imports
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Toastify imports
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Bootstrap import
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ThemeProvider from "react-bootstrap/ThemeProvider";

// router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    loader: LayoutLoader,
    children: [
      {
        index: true,
        element: <Home/>,
        loader: HomeLoader,
        action: HomeAction
      },
      {
        path: "logout",
        action: LogoutAction
      },
      {
        path: "*",
        element: <NotFound/>
      }
    ]
  }
])

function App() {
  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      <div className="App">
        <RouterProvider router={router} />
        <ToastContainer/>
      </div>
    </ThemeProvider>
  );
}

export default App;
