import React, { Component } from 'react';
import { Image, View, Text, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconTwo from 'react-native-vector-icons/MaterialIcons';
import IconThree from 'react-native-vector-icons/Ionicons';
import MapView from 'react-native-maps';


class HotelDetail extends Component {
    
    render() {
        const { imagen, nombre, estrellas, ubicacion } = this.props.detail;
        return (
                <ScrollView>
                    <Image 
                        style={styles.imageStyle}
                        source={{ uri: imagen }}
                    />

                    <View style={styles.itemStyle}>
                        <Text style={styles.textTitleStyle} >
                                    {nombre}
                        </Text>
                        <Text> {estrellas} estrellas</Text>
                        <View style={styles.descriptionStyle}>
                            <View style={styles.markerStyle}>
                                <Icon name="map-marker" size={20} color='gray' />
                            </View>
                            <View style={styles.ubicationStyle}>
                                <Text> {ubicacion} </Text>
                            </View>
                        </View>

                        <View style={styles.descriptionStyle}>
                            <MapView
                                    style={styles.map}
                                    initialRegion={{
                                    latitude: 25.7742700,
                                    longitude: -122.4324,
                                    latitudeDelta: 0.0922,
                                    longitudeDelta: 0.0421,
                                    }}
                            />
                        </View>
                    </View>

                    <View style={styles.opinionesStyle}>
                        <View
                            style={{ justifyContent: 'space-around', flexDirection: 'row', borderStyle: 'dashed', borderBottomColor: '#ddd', borderBottomWidth: 1 }}
                        >
                            <Text 
                            style={{ fontFamily: 'Roboto Regular', fontSize: 16, color: '#000000', height: 24, flex: 0.6 }}
                            >
                                Opiniones
                            </Text>
                            <Text
                            style={{ alignItems: 'flex-end', justifyContent: 'flex-end', flex: 0.4 }}
                            >
                                390 opiniones
                            </Text>
                        </View>
                        <View
                        style={{ justifyContent: 'space-around', paddingTop: 5, borderBottomColor: '#ddd', borderBottomWidth: 1 }}
                        >
                            <Text
                            style={{ fontFamily: 'Roboto Medium', fontSize: 14, height: 16, color: 'green' }}
                            > 
                                Clasificado en el puesto no. 1267 de 1807
                            </Text>
                            <Text>
                                hoteles en Miami
                            </Text>
                        </View>
                        <View
                        style={{ flexDirection: 'row', paddingTop: 5 }}
                        >
                            <Image style={styles.perfilPhoto} source={{ uri: 'https://media.wmagazine.com/photos/5853dcc06666b2eb4762f5da/master/pass/michele-abeles-portrait.jpg' }} />
                            <View
                            style={{ paddingLeft: 10 }}
                            >
                                <Text
                                style={{ fontFamily: 'Roboto Regular', fontSize: 14, height: 16, color: 'blue' }}
                                >
                                    "Un Gran Hotel"
                                </Text>
                                <Text style={{ fontSize: 11 }}>
                                    14 feb 2016
                                </Text>
                                <Text
                                style={{ fontFamily: 'Roboto Regular', fontSize: 12, height: 14, opacity: 0.54 }}
                                >
                                    La ubicación del hotel muy buena y fácil de...
                                </Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.blueSection}>
                        <IconThree name="ios-arrow-back" size={20} color='white' />
                        <IconTwo name="wifi" size={20} color='white' />
                        <IconTwo name="local-parking" size={20} color='white' />
                        <IconTwo name="pets" size={20} color='white' />
                        <IconThree name="ios-arrow-forward" size={20} color='white' />
                    </View>
                </ScrollView>

        );
    }
}

const styles = {
    itemStyle: {
        backgroundColor: '#FFFFFF',
        opacity: 1,
        borderRadius: 3,
        borderBottomWidth: 1,
        shadowColor: '#000000',
        shadowOpacity: 0.32,
        alignItems: 'flex-start',
        marginLeft: 5,
        marginRight: 5,
        top: -30
    },
    imageStyle: {
        height: 200,
        width: null
    },
    textTitleStyle: {
        fontSize: 18,
        fontFamily: 'Roboto Medium',
        color: 'black',
        fontWeight: '500'
    },
    descriptionStyle: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
    markerStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 0.2
    },
    ubicationStyle: {
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        flex: 0.8
    },
    ubicationTextStyle: {
        fontFamily: 'Roboto Regular',
        fontSize: 14,
        height: 20,
        color: '#000000',
        opacity: 0.54
    },
    map: {
        height: 100,
        flex: 1,
        width: null
    },
    opinionesStyle: {
        backgroundColor: '#FFFFFF',
        opacity: 1,
        borderRadius: 3,
        borderBottomWidth: 1,
        shadowColor: '#000000',
        shadowOpacity: 0.32,
        alignItems: 'flex-start',
        marginLeft: 5,
        marginRight: 5,
        top: -20
    },
    perfilPhoto: {
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 15,
        marginTop: 5,
        width: 40,
        height: 40
    },
    blueSection: {
        backgroundColor: '#335692',
        opacity: 1, 
        justifyContent: 'space-around', 
        alignItems: 'center',
        flexDirection: 'row',
        height: 50,
        top: -10
    }
};

export default HotelDetail;
