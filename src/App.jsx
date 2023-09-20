import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import PageRoutes from "./routes/PageRoutes";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header/>
      <PageRoutes />
    </>
  );
}

export default App;
