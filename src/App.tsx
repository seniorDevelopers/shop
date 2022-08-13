import { Routes, Route } from "react-router-dom";
import routes from "./routes";
import Layout from "./components/Layout/Layout";

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
