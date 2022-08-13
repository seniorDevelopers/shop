import Layout from "Components/Layout/Layout";
import { Routes, Route } from "react-router-dom";
import routes from "./routes";

function App() {
  return (
    <Layout>
      <Routes>
        {routes.map(({ path, element }) => (
          <Route path={path} element={element} key={path} />
        ))}
      </Routes>
    </Layout>
  );
}

export default App;
