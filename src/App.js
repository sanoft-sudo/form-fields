import MainBox from "./components/MainBox";
import "./styles.css";
import styled from "styled-components";
import ScrollToTop from "./components/ScrollToTop";
import MainFormLayouts from "./components/form-layouts/MainFormLayouts";

export default function App() {
  return (
    <div>
      <MainBox />
      <MainFormLayouts />
      <ScrollToTop />
    </div>
  );
}
