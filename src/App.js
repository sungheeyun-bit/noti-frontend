import { Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import AlarmPage from './pages/AlarmPage';
import DetailProductPage from './pages/DetailProductPage';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import UploadProductPage from './pages/UploadProductPage';
import { Helmet } from 'react-helmet-async';


const App = () => {
  return (
    <ChakraProvider>
      <Helmet>
        <title>NOTI</title>
      </Helmet>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/product/:productId" element={<DetailProductPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/upload" element={<UploadProductPage />} />
        <Route path="/user/alarm" element={<AlarmPage />} />
      </Routes>
    </ChakraProvider>
  );
};

export default App;
