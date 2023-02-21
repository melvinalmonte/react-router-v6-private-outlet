import { Outlet, useLocation } from "react-router-dom";
import Login from "../components/login";
import { useProxy } from "valtio/utils";
import authStore from "../store";
import { motion } from "framer-motion";
const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const pageTransition = {
  type: "tween",
  ease: "linear",
  duration: 0.5,
};
const PrivateRoute = () => {
  const { isAuth } = useProxy(authStore);
  const { pathname } = useLocation();

  return isAuth ? (
    <motion.div
      key={pathname}
      initial="initial"
      animate="in"
      variants={pageVariants}
      transition={pageTransition}
    >
      <Outlet />
    </motion.div>
  ) : (
    <Login />
  );
};

export default PrivateRoute;
