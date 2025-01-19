import { Home } from "./component/Home";
import { Nav } from "./component/Nav";
import Foot from "./component/Foot";
import DataProvider from "./component/context/DataProvider";

const App = () => {
  return (
    <>
      <DataProvider>
        <Nav></Nav>

        <Home></Home>

        <Foot></Foot>
      </DataProvider>
    </>
  );
};
export default App;
