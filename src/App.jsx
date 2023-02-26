import { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import light from "./styles/light";
import GlobalStyle from "./styles/global";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home/Home";
import SingleInvoice from "./Components/SingleInvoice/SingleInvoice";
import { useSelector } from "react-redux";

function App() {
  const [theme, setTheme] = useState(light);
  const { modal } = useSelector((state) => state.modal);

  
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = modal ? "hidden" : "auto";
  }, [modal]);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Container>
          <GlobalStyle />
          <Header theme={theme} setTheme={setTheme} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="invoice/:id" element={<SingleInvoice />} />
          </Routes>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

const Container = styled.div`
  background: ${({ theme }) => theme.bgPrimary};
  transition: 0.5s ease-in-out;
  min-height: 100vh;
  display: flex;
`;
