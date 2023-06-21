import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import HomePage from "./routes/HomePage";
import VenusPage from "./routes/VenusPage";
import MercuryPage from "./routes/MercuryPage";
import MarsPage from "./routes/MarsPage";
import JupiterPage from "./routes/JupiterPage";
import SaturnPage from "./routes/SaturnPage";
import UranusPage from "./routes/UranusPage";
import NeptunePage from "./routes/NeptunePage";
import ErrorPage from "./routes/ErrorPage";
import RootPage from "./routes/RootPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootPage />} errorElement={<ErrorPage />}>
      <Route path="/" element={<HomePage />} errorElement={<ErrorPage />} />
      <Route
        path="venus"
        element={<VenusPage />}
        errorElement={<ErrorPage />}
      />
      <Route
        path="mercury"
        element={<MercuryPage />}
        errorElement={<ErrorPage />}
      />
      <Route path="mars" element={<MarsPage />} errorElement={<ErrorPage />} />
      <Route
        path="jupiter"
        element={<JupiterPage />}
        errorElement={<ErrorPage />}
      />
      <Route
        path="saturn"
        element={<SaturnPage />}
        errorElement={<ErrorPage />}
      />
      <Route
        path="uranus"
        element={<UranusPage />}
        errorElement={<ErrorPage />}
      />
      <Route
        path="neptune"
        element={<NeptunePage />}
        errorElement={<ErrorPage />}
      />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
