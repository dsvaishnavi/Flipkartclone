import { Home } from "./component/Home";
import { Nav } from "./component/Nav";
import Foot from "./component/Foot";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav></Nav>
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
        </Routes>

        <Foot></Foot>
      </BrowserRouter>
    </>
  );
};
export default App;
