import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import { 
  About, Contacts, Details, Home, Smi, SmiDetails, Izum, InfoHouse,
  One, Two, Town, Houses
} from "./router/router";
import { Suspense } from "react";
import ErrorBoundary from "./provider/ErrorBoundary/ErrorBoundary";
import NotFound from "./pages/Notfound/NotFound";
import Ipoteka from "./pages/Ipoteka/Ipoteka";
import IQClub from "./pages/IQ-club/iq-club";
import Usadi from "./pages/Usadi/usadi";
import Zim from "./pages/Zim/zim";
import Konstant from "./pages/Konstant/konstant";
import Projects from "./pages/Projects/projects";
import TeamPage from "./pages/Team/team";
import Loading from "./components/Loader/Loader";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<Loading />}>
              <ErrorBoundary>
                <Home />
              </ErrorBoundary>
            </Suspense>
          ),
        },
        {
          path: "about/*",
          element: (
            <Suspense fallback={<Loading />}>
              <ErrorBoundary>
                <About />
              </ErrorBoundary>
            </Suspense>
          ),
        },
        {
          path: "contacts",
          element: (
            <Suspense fallback={<Loading />}>
              <ErrorBoundary>
                <Contacts />
              </ErrorBoundary>
            </Suspense>
          ),
        },
        {
          path: "ipoteka",
          element: (
            <Suspense fallback={<Loading />}>
              <ErrorBoundary>
                <Ipoteka />
              </ErrorBoundary>
            </Suspense>
          ),
        },
        {
          path: "smi",
          element: (
            <Suspense fallback={<Loading />}>
              <ErrorBoundary>
                <Smi />
              </ErrorBoundary>
            </Suspense>
          ),
        },
        {
          path: "izum",
          element: (
            <Suspense fallback={<Loading />}>
              <ErrorBoundary>
                <Izum />
              </ErrorBoundary>
            </Suspense>
          ),
        },
        {
          path: "smi/:id",
          element: (
            <Suspense fallback={<Loading />}>
              <ErrorBoundary>
                <SmiDetails />
              </ErrorBoundary>
            </Suspense>
          ),
        },
        {
          path: "details/:todosId",
          element: (
            <Suspense fallback={<Loading />}>
              <ErrorBoundary>
                <Details />
              </ErrorBoundary>
            </Suspense>
          ),
        },
        {
          path: "iqclub",
          element: (
            <Suspense fallback={<Loading />}>
              <ErrorBoundary>
                <IQClub />
              </ErrorBoundary>
            </Suspense>
          ),
        },
        {
          path: "usadi",
          element: (
            <Suspense fallback={<Loading />}>
              <ErrorBoundary>
                <Usadi />
              </ErrorBoundary>
            </Suspense>
          ),
        },
        {
          path: "zim",
          element: (
            <Suspense fallback={<Loading />}>
              <ErrorBoundary>
                <Zim />
              </ErrorBoundary>
            </Suspense>
          ),
        },
        {
          path: "konstant",
          element: (
            <Suspense fallback={<Loading />}>
              <ErrorBoundary>
                <Konstant />
              </ErrorBoundary>
            </Suspense>
          ),
        },
        {
          path: "projects",
          element: (
            <Suspense fallback={<Loading />}>
              <ErrorBoundary>
                <Projects />
              </ErrorBoundary>
            </Suspense>
          ),
        },
        {
          path: "team",
          element: (
            <Suspense fallback={<Loading />}>
              <ErrorBoundary>
                <TeamPage />
              </ErrorBoundary>
            </Suspense>
          ),
        },
        {
          path: "one",
          element: (
            <Suspense fallback={<Loading />}>
              <ErrorBoundary>
                <One />
              </ErrorBoundary>
            </Suspense>
          ),
        },
        {
          path: "two",
          element: (
            <Suspense fallback={<Loading />}>
              <ErrorBoundary>
                <Two />
              </ErrorBoundary>
            </Suspense>
          ),
        },
        {
          path: "town",
          element: (
            <Suspense fallback={<Loading />}>
              <ErrorBoundary>
                <Town />
              </ErrorBoundary>
            </Suspense>
          ),
        },
        {
          path: "houses",
          element: (
            <Suspense fallback={<Loading />}>
              <ErrorBoundary>
                <Houses />
              </ErrorBoundary>
            </Suspense>
          ),
        },
        {
          path: "info/:id",
          element: (
            <Suspense fallback={<Loading />}>
              <ErrorBoundary>
                <InfoHouse />
              </ErrorBoundary>
            </Suspense>
          ),
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return <RouterProvider router={router} />;
}