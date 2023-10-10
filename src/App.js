import "./App.css";
import Layout from "./components/Layout/Layout";
import { useTheme } from "./context/ThemeContext";
import ScrollToTop from "react-scroll-to-top";

function App() {
  const [theme] = useTheme();
  return (
    <>
      <div id={theme}>
        <Layout />
      </div>
      <ScrollToTop
        smooth
        color="#e89b17"
        style={{
          backgroundColor: "#1e2e2a",
          borderRadius: "2rem",
        }}
      />
    </>
  );
}

export default App;
