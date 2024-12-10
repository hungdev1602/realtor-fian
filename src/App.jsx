import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import InfoPage from "./pages/InfoPage/InfoPage";
import CommercialRealEstatePage from "./pages/CommercialRealEstatePage/CommercialRealEstatePage";
import ResidentialPage from "./pages/ResidentialPage/ResidentialPage";
import InvestmentsPage from "./pages/InvestmentsPage/InvestmentsPage";
import RedevelopmentPage from "./pages/RedevelopmentPage/RedevelopmentPage";
import Case1Page from "./pages/Case1Page/Case1Page";
import Case2Page from "./pages/Case2Page/Case2Page";
import Case3Page from "./pages/Case3Page/Case3Page";
import ScrollToTop from "./ScrollToTop";
const App = () => {
  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="/commercial" element={<CommercialRealEstatePage />} />
        <Route path="/residential" element={<ResidentialPage />} />
        <Route path="/investments" element={<InvestmentsPage />} />
        <Route path="/redevelopment" element={<RedevelopmentPage />} />
        <Route path="/case1" element={<Case1Page />} />
        <Route path="/case2" element={<Case2Page />} />
        <Route path="/case3" element={<Case3Page />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App