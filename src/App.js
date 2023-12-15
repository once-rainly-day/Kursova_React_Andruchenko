import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import CatPage from './pages/CatPage';
import { useEffect } from 'react';

function App() {
    useEffect(() => {
        document.title = "Породи котів";
      }, []);
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<MainPage />}></Route>
                    <Route path='/CatPage' element={<CatPage />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;