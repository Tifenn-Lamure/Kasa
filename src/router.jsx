import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import styled from "styled-components";

import Header from './components/Header';
import Footer from './components/Footer';

import About from './pages/About'
import Home from './pages/Home'
import NotFound404 from './pages/NotFound404'
import Rent from './pages/Rent'

import ScrollToTop from "./components/ScrollToTop";


const Layout = styled.div`
    min-height: calc(100vh - 10rem);
    display: flex;
    flex-direction: column;
    margin-inline: 30px;

    @media screen and (min-width: 1024px){
        min-height: calc(100vh - 10rem - 40px);
        margin-inline: 5rem;
    }

    @media screen and (min-width: 1440px){
        margin-inline: 10rem;
    }
`

function RouterComponent() {
    return (
        <Router>
            <ScrollToTop/>

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