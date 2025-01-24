import { BrowserRouter as Router, Routes, Route } from "react-router";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import Footer from "./components/Footer";
import styled from "styled-components";
import CatalogPage from "./pages/CatalogPage";

const MainWrapper = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

function App() {
    return (
        <Router>
            <Header />
            <MainWrapper>
                <Routes >
                    <Route path="/" element={<MainPage />} />
                    <Route path="/catalog" element={<CatalogPage />} />
                </Routes>
            </MainWrapper>
            <Footer />
        </Router>
    );
}

export default App;
