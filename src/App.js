import './App.css';
import Home from './Components/Home';
import '@shopify/polaris/build/esm/styles.css';
import UserProfile from './Components/UserProfile';
import Footer from './Components/Footer';
import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/userprofile' element={<UserProfile />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
