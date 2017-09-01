import React, { Component } from 'react';
import { Text, Image, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import CardSection from './cardSection';
import Card from './card';
import * as actions from '../actions';

class ListItem extends Component {
    render() {
        const { imagen, nombre, estrellas, caracteristica } = this.props.hotel;
        return (
                <Card>
                    <TouchableOpacity
                        onPress={() => Actions.HotelDetail({ detail: this.props.hotel })}
                    >
                        <CardSection>
                            <Image 
                            style={styles.imageStyle}
                            source={{ uri: imagen }} 
                            />
                        </CardSection>
                    </TouchableOpacity>
                    <CardSection>
                        <Text style={styles.textStyle} >
                            {nombre}
                        </Text>
                    </CardSection>

                    <CardSection>
                        <View style={styles.viewStyleContent} >
                                <View style={styles.viewStyleFirts} >
                                    <Text>{estrellas} estrellas</Text>
                                    <Text>{caracteristica}</Text>
                                </View> 
                                <View style={styles.viewStyleSecond}>
                                    <Text>precio por noche</Text>
                                    <Text style={{ fontSize: 18 }}>
                                        ARS
                                        <Text style={styles.textPriceStyle}>
                                            {this.props.hotel.precio}
                                        </Text>
                                    </Text>
                                </View> 
                        </View>
                    </CardSection>
                </Card>
            
        );
    }
}

const styles = {
    imageStyle: {
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        height: 200,
        flex: 1,
        width: null
    },
    textStyle: {
        fontSize: 18,
        fontFamily: 'Roboto Medium',
        color: 'black',
        fontWeight: '500'
    },
    viewStyleContent: {
        padding: 1,
        backgroundColor: '#fff',
        flexDirection: 'row',
        borderColor: '#ddd',
        justifyContent: 'flex-start',
        flex: 1,
        position: 'relative' 
    },
    viewStyleFirts: {
        padding: 1,
        backgroundColor: '#fff',
        borderColor: '#ddd',
        position: 'relative',
        justifyContent: 'space-around',
        borderRightWidth: 1,
        flex: 0.6
    },
    viewStyleSecond: {
        padding: 1,
        paddingLeft: 5,
        backgroundColor: '#fff', 
        borderColor: '#ddd',
        flex: 0.4,
        justifyContent: 'space-around',
        position: 'relative'
    },
    textPriceStyle: {
        color: 'black',
        fontWeight: '700'
    }
};

const mapStateToProps = state => {
    return {
        selectedHotelId: state.selectedHotelId
    };
};

export default connect(mapStateToProps, actions)(ListItem);
