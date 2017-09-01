import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Main from './components/main';
import HotelDetail from './components/HotelDetail';

const RouterComponent = () => {
    return (
        <Router >
        <Scene key="root">
            <Scene 
                key="inicio" 
                component={Main} 
                title="Elegí tu Hotel (489)"
                titleStyle={{ justifyContent: 'center' }} 
                back
                navBarButtonColor='black'
        
            /> 
            <Scene 
            navTransparent 
            key="HotelDetail"
            component={HotelDetail} 
            title="Detalles" 
            navBarButtonColor='white'
            titleStyle={{ fontSize: 20, fontFamily: 'Roboto Medium', color: '#FFFFFF' }} 
            />
        </Scene>
        </Router>
    );
};

export default RouterComponent;
