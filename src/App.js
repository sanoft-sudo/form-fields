import MainBox from "./components/MainBox";
import "./styles.css";
import styled from "styled-components";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <div>
      <MainBox />
      <ScrollToTop />
    </div>
  );
}
