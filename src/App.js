import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/redux.js/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Maincontainer from "./components/Maincontainer";
import WatchPage from "./components/WatchPage/WatchPage";
import SearchResults from "./components/ChannelVideos";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Maincontainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
      {
        path: "results",
        element: <SearchResults />,
      },
    ],
  },
]);
function App() {
  return (
    <Provider store={store}>
      <Head />

      <div>
        <RouterProvider router={appRouter}/>
      </div>
    </Provider>
  );
}

export default App;
