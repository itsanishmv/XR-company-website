import React,{lazy, Suspense} from 'react'
import { Route,Switch } from 'react-router-dom';

import {  AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import Hamburger from './pages/hamburger'
import Loading from './pages/Loading';
import Nav from './pages/Nav';
import { useLocation } from 'react-router';


const Header = styled.div`
    display:flex;
    justify-content:flex-end;
    background-color:black;
`

    const OurWorks = lazy(() => import("./pages/ourWorks"))
    const Home = lazy(() => import("./pages/Home"))
    const Contact = lazy(() => import("./pages/Contact"))


const App = () => {
    const Location = useLocation()
    return (
        
            <Suspense fallback={<Loading/>}>
            <Header>
                <Hamburger/>
                <Nav/>
                </Header>   
                <AnimatePresence>
                    <Switch location={Location} key={Location.key}>
                            <Route exact path="/" component={Home} />
                            <Route path="/Ourworks" component={OurWorks}/>
                            <Route path="/Contact" component={ Contact}/>
                    </Switch>
                </AnimatePresence>
            </Suspense>
    
    )
}

export default App;