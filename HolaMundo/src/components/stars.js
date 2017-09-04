import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';


const Stars = (props) => {
    switch (props.numberStars) {
        case '1':
            return (
                <View style={{ flexDirection: 'row' }}>
                    <Icon name="star" size={props.size} color={props.Color} />
                    <Icon name="star" size={props.size} color='white' />
                    <Icon name="star" size={props.size} color='white' />
                    <Icon name="star" size={props.size} color='white' />
                    <Icon name="star" size={props.size} color='white' />
                </View>
        
            );
        case '2':
            return (
                <View style={{ flexDirection: 'row' }}>
                    <Icon name="star" size={props.size} color={props.Color} />
                    <Icon name="star" size={props.size} color={props.Color} />
                    <Icon name="star" size={props.size} color='white' />
                    <Icon name="star" size={props.size} color='white' />
                    <Icon name="star" size={props.size} color='white' />
                </View>
            );
        case '3':
            return (
                <View style={{ flexDirection: 'row' }}>
                    <Icon name="star" size={props.size} color={props.Color} />
                    <Icon name="star" size={props.size} color={props.Color} />
                    <Icon name="star" size={props.size} color={props.Color} />
                    <Icon name="star" size={props.size} color='white' />
                    <Icon name="star" size={props.size} color='white' />
                 </View>

            );
        case '4':
            return (
            <View style={{ flexDirection: 'row' }}>
                <Icon name="star" size={props.size} color={props.Color} />
                <Icon name="star" size={props.size} color={props.Color} />
                <Icon name="star" size={props.size} color={props.Color} />
                <Icon name="star" size={props.size} color={props.Color} />
                <Icon name="star" size={props.size} color='white' />
             </View>
            );
        case '5':
            return (
                <View style={{ flexDirection: 'row' }}>
                    <Icon name="star" size={props.size24} color={props.Color} />
                    <Icon name="star" size={props.size} color={props.Color} />
                    <Icon name="star" size={props.size} color={props.Color} />
                    <Icon name="star" size={props.size} color={props.Color} />
                    <Icon name="star" size={props.size} color={props.Color} />
                </View>

            );
        default:
            return (
                <View style={{ flexDirection: 'row' }}>
                    <Icon name="star" size={24} color='white' />
                    <Icon name="star" size={24} color='white' />
                    <Icon name="star" size={24} color='white' />
                    <Icon name="star" size={24} color='white' />
                    <Icon name="star" size={24} color='white' />
                </View>

            );
    }
};

export default Stars;
