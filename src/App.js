import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/redux.js/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Maincontainer from "./components/Maincontainer";
import WatchPage from "./components/WatchPage/WatchPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Maincontainer />
      },
      {
        path:"watch",
        element: <WatchPage/>
      }
    ],
  },
]);
function App() {
  return (
    <Provider store={store}>
              <Head />

      <div>
        {/* <h1 className="border border-red-200">Ram</h1> */}
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;

// Head
// Body
//  SideBar
//  Menu Items
// MainContainer
