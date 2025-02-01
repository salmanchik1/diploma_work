import { BrowserRouter } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import styled from "styled-components";
import AppRouter from "./router/AppRouter";

const MainWrapper = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

function App() {
    return (
        <BrowserRouter>
            <Header />
            <MainWrapper>
                <AppRouter />
            </MainWrapper>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
