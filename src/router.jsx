import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import styled from "styled-components";

import Header from './components/Header';
import Footer from './components/Footer';

import About from './pages/About'
import Home from './pages/Home'
import NotFound404 from './pages/NotFound404'
import Rent from './pages/Rent'

const Layout = styled.div`
    margin-inline: 20rem;
`

function RouterComponent() {
    return (
        <Router>

            <Layout>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/about" element={<About/>}></Route>
                    <Route path="/rent/:id" element={<Rent/>}></Route>
                    <Route path="/*" element={<NotFound404/>}></Route>
                </Routes>
            </Layout>
            <Footer/>
            
        </Router>
    )
}

export default RouterComponent;