import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loading from "../components/common/loading/Loading";

const Home = lazy(() => import("../pages/Home"));
const Main = lazy(() => import("../layouts/Main"));
const PortfolioDetails = lazy(() => import("../pages/PortfolioDetails"));
const NotFound = lazy(() => import("../pages/NotFound"));

const withSuspense = (Component) => (
  <Suspense fallback={<Loading />}>
    <Component />
  </Suspense>
);

export const router = createBrowserRouter(
  [
    {
      path: "/:slug",
      element: withSuspense(Main),
      children: [
        {
          path: "/:slug",
          element: withSuspense(Home),
        },
        {
          path: "/:slug",
          element: withSuspense(PortfolioDetails),
        },
        {
          path: "*",
          element: withSuspense(NotFound),
        },
      ],
    },
  ],
  { basename: "/" }
);