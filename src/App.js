import React, { useEffect } from 'react';
import {Switch, Route} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './css/styles.css';

import Navbar from './containers/Navbar';
import Homepage from './components/Homepage';
import Calendar from './containers/Calendar';
import Gallery from './containers/Gallery'
import Footer from './components/Footer';




function App({getCurrentDate, getGalleryFromLS}) {

    useEffect(() => {
        getCurrentDate();
        getGalleryFromLS();
    }, [])

    return (
        <div className="App">
            <Navbar/>
            <Switch>
                <Route path='/' exact>
                    <Homepage/>
                </Route>
                <Route path='/calendar'>
                    <Calendar/>
                </Route>
                <Route path='/gallery'>
                   <Gallery />
                </Route>
            </Switch>
            <Footer/>
        </div>
    );
}

export default App;
