import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import About from './pages/About'
import Home from './pages/Home'
import NotFound404 from './pages/NotFound404'
import Rent from './pages/Rent'

function RouterComponent() {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/rent/:id" element={<Rent/>}></Route>
                <Route path="/*" element={<NotFound404/>}></Route>
            </Routes>
            <Footer/>
        </Router>
    )
}

export default RouterComponent;