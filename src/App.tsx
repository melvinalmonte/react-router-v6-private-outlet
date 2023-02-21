import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import { Bar, Foo, Home } from "./pages";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="" element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/foo" element={<Foo />} />
          <Route path="/bar" element={<Bar />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
