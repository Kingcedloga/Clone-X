import Home from "./Pages/Home.jsx";
import Layout from "./Composants/Layout.jsx";

import('./style/reset.css');
import('./style/App.css');

export default function App() {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}