import React from 'react';
import { View } from 'react-native';
import Header from './header';
import HotelList from './hotelList';

const Main = () => {
    return (
        <View style={{ flex: 1 }} >
            <Header />
            <HotelList />
        </View>
    );
};

export default Main;
