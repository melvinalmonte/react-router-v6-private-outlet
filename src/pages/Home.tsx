import { useProxy } from "valtio/utils";
import authStore from "../store";
import { Link } from "react-router-dom";

const Home = () => {
  const { logout } = useProxy(authStore);

  return (
    <div className="container mx-auto">
      <div
        className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat p-12 text-center m-4"
        style={{
          backgroundImage:
            "url('https://mdbcdn.b-cdn.net/img/new/slides/041.webp')",
          height: "400px",
        }}
      >
        <div
          className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        >
          <div className="flex h-full items-center justify-center mx-3">
            <div className="text-white">
              <h2 className="mb-4 text-4xl font-semibold">
                Private routes tester
              </h2>
              <h4 className="mb-6 text-xl font-semibold">
                A small reference on how private routes work with ReactJS
              </h4>
              <div className="flex flex-col">
                <Link
                  className="mb-1 inline-block rounded border-2 border-gray-200 px-7 py-3 text-sm font-medium uppercase leading-snug text-gray-200 transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                  to="foo"
                  role="button"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Go to private route foo
                </Link>
                <button
                  className="mb-1 inline-block rounded border-2 border-gray-200 px-7 py-3 text-sm font-medium uppercase leading-snug text-gray-200 transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                  onClick={() => logout()}
                  role="button"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
