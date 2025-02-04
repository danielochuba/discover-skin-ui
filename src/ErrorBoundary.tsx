import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useRouteError } from "react-router-dom";
import ApplicationRoutes from "@/config/routes";

const RouteErrorBoundary = () => {
  const error = useRouteError();

  const url = new URL(window.location.toString());
  const navigate = useNavigate();
  const retries = useRef<number>(
    parseInt(url.searchParams.get("retries") ?? "0")
  );
  const [countdown, setCountdown] = useState(15);
  function reloadPage() {
    if (retries.current < 3 || location.href === location.origin + "/") {
      // Already on home page
      url.searchParams.set("retries", `${retries.current + 1}`);
      window.location.href = url.toString();
    } else {
      navigate("/");
    }
  }
  useEffect(() => {
    console.log(error);
  }, []);
  useEffect(() => {
    let interval;
    // dont redirect in dev environment in order to read error
    if (!window.location.origin.includes("localhost")) {
      interval = setInterval(() => {
        setCountdown((c) => Math.max(c - 1, 0));
      }, 1000);
      if (countdown === 0) {
        reloadPage();
      }
    }
    return () => {
      interval && clearInterval(interval);
    };
  }, [countdown]);
  // Log the error so we can start working on fix
  return (
    <>
      <main className="grid min-h-screen min-w-screen place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8 w-full rounded-[20px]">
        <div className="text-center">
          <p> Something went wrong:</p>
          <p className="mt-6 text-base leading-7 text-grey-600">
            We've have been alerted and we are working on a fix
          </p>

          <p>
            {retries.current < 3 ? "Retrying" : "Going back home"} in{" "}
            {countdown}s
          </p>
          <div className="flex items-center justify-center mt-10 gap-x-6">
            <button
              onClick={() => reloadPage()}
              className="rounded-md bg-[#EFFAF5] text-secondary px-3.5 py-2.5 text-sm font-semibold  shadow-sm hover:bg-secondary hover:text-[#EFFAF5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Retry
            </button>
            {!(location.href === location.origin + "/") && (
              <Link
                to={ApplicationRoutes.HOME}
                className="rounded-md bg-secondary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Go back home
              </Link>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default RouteErrorBoundary;
