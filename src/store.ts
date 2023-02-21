import { proxy } from "valtio";

interface IsAuth {
  isAuth: boolean;
  login: () => void;
  logout: () => void;
}

const authStore = proxy<IsAuth>({
  isAuth: false,
  login: () => {
    authStore.isAuth = true;
  },
  logout: () => {
    authStore.isAuth = false;
  },
});

export default authStore
