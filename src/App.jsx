import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import InfoPage from "./pages/InfoPage/InfoPage";
import CommercialRealEstatePage from "./pages/CommercialRealEstatePage/CommercialRealEstatePage";
import ResidentialPage from "./pages/ResidentialPage/ResidentialPage";
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="/commercial" element={<CommercialRealEstatePage />} />
        <Route path="/residential" element={<ResidentialPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App