import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loading from "../components/common/loading/Loading";

const Home = lazy(() => import("../pages/Home"));
const Main = lazy(() => import("../layouts/Main"));
const PortfolioDetails = lazy(() => import("../pages/PortfolioDetails"));
const NotFound = lazy(() => import("../pages/NotFound"));

const repoName = import.meta.env.VITE_REPO_NAME || "";

export const router = createBrowserRouter(
  [
    {
      path: `/`,
      element: (
        <Suspense fallback={<Loading />}>
          <Main />
        </Suspense>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/:id",
          element: <Home />,
          // element: (
          //   <Suspense fallback={<Loading />}>
          //     <PortfolioDetails />
          //   </Suspense>
          // ),
        },
        {
          path: "*",
          element: (
            <Suspense fallback={<Loading />}>
              <NotFound />
            </Suspense>
          ),
        },
      ],
    },
  ],
  { basename: `/${repoName}` }
);