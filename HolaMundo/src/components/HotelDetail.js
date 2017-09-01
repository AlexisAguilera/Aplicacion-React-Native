import React, { Component } from 'react';
import { Image, View, Text, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconTwo from 'react-native-vector-icons/MaterialIcons';
import IconThree from 'react-native-vector-icons/Ionicons';
import MapView from 'react-native-maps';
import MealPlanPicker from './mealPlanPicker';
import Stars from './stars';


class HotelDetail extends Component {
    
    render() {
        const { imagen, nombre, estrellas, ubicacion, mealPicker, precio } = this.props.detail;
        return (
                <ScrollView>
                    <Image 
                        style={styles.imageStyle}
                        source={{ uri: imagen }}
                    />

                    <View style={styles.itemStyle}>
                        <View 
                        style={{
                            marginLeft: 10,
                            marginRight: 10  
                        }}
                        >
                            <Text style={styles.textTitleStyle} >
                                        {nombre}
                            </Text>
                            <Stars numberStars={estrellas} Color='#FFD700' size={15} />
                        </View>
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
                            style={{ justifyContent: 'space-around', 
                                flexDirection: 'row',
                                borderStyle: 'dashed', 
                                borderBottomColor: '#ddd',
                                width: 330,
                                marginLeft: 10,
                                marginRight: 10,
                                borderBottomWidth: 1 
                            }}
                        >
                            <Text 
                            style={{ fontFamily: 'Roboto Regular', 
                                fontSize: 16, 
                                color: '#000000', 
                                height: 24,
                                flex: 0.6 
                            }}
                            >
                                Opiniones
                            </Text>
                            <Text
                            style={{ 
                                alignItems: 'flex-end', 
                                justifyContent: 'flex-end', 
                                flex: 0.4 
                            }}
                            >
                                390 opiniones
                            </Text>
                        </View>
                        <View
                        style={{ justifyContent: 'space-around', 
                            paddingTop: 5, 
                            borderBottomColor: '#ddd',
                            marginLeft: 10,
                            marginRight: 10,
                            width: 330,
                            borderBottomWidth: 1 
                        }}
                        >
                            <Text
                            style={{ fontFamily: 'Roboto Medium', 
                                fontSize: 14, 
                                height: 16, 
                                color: 'green' 
                            }}
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
                            <Image 
                                style={styles.perfilPhoto} 
                                source={{ uri: 'https://media.wmagazine.com/photos/5853dcc06666b2eb4762f5da/master/pass/michele-abeles-portrait.jpg' }}
                            />
                            <View
                            style={{    
                                marginLeft: 10,
                                marginRight: 10  
                            }}
                            >
                                <Text
                                style={{ 
                                    fontFamily: 'Roboto Regular', 
                                    fontSize: 14, 
                                    height: 16, 
                                    color: 'blue' 
                                }}
                                >
                                    "Un Gran Hotel"
                                </Text>
                                <Text style={{ fontSize: 11 }}>
                                    14 feb 2016
                                </Text>
                                <Text
                                style={{ 
                                    fontFamily: 'Roboto Regular', 
                                    fontSize: 12, 
                                    height: 14,
                                     opacity: 0.54 
                                }}
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
                    
                    <View style={styles.roomSectionStyle}>
                        <View style={styles.roomSectionCapacity} >
                            <Text
                            style={{ 
                                flex: 0.6, 
                                opacity: 0.8, 
                                fontSize: 15, 
                            }}
                            >
                                Habitaciones
                            </Text>
                            <View
                                style={{
                                    flex: 0.4,
                                    flexDirection: 'row',
                                    justifyContent: 'space-around'
                                    
                                }}
                            >   
                                <View style={{ flexDirection: 'row' }}>
                                    <IconTwo name="group" size={24} color='gray' />
                                    <Text 
                                    style={{ 
                                        marginLeft: 10, 
                                        color: 'blue', 
                                        opacity: 0.8 
                                    }}
                                    >
                                        6
                                    </Text>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <Icon name="bed" size={24} color='gray' />
                                    <Text 
                                    style={{ 
                                        marginLeft: 10, 
                                        color: 'blue', 
                                        opacity: 0.8 
                                        }}
                                    >
                                        2
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ borderBottomColor: '#ddd', borderBottomWidth: 1, marginLeft: 5, marginRight: 5 }}>
                            <View style={styles.roomSectionDescriptionStyle}>
                                <Text
                                style={{ 
                                    fontFamily: 'Roboto Medium',
                                    fontSize: 16,
                                    color: 'blue',
                                    opacity: 0.8
                                }}
                                >
                                    Habitación Standard 
                                </Text>
                                <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'flex-start'
                                }}
                                >
                                    <View
                                    style={{
                                        borderRightWidth: 1,
                                        borderRightColor: 'gray',
                                        width: 80    
                                    }}
                                    >
                                        <Text>2 personas</Text>
                                    </View>
                                    <View style={{ marginLeft: 10 }}>
                                        <Text>1 cama doble </Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.roomSectionDescriptionStyle}>
                                <Text
                                style={{ 
                                    fontFamily: 'Roboto Medium',
                                    fontSize: 16,
                                    color: 'blue',
                                    opacity: 0.8
                                }}
                                >
                                    Habitación Standard 
                                </Text>
                                <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'flex-start'
                                }}
                                >
                                    <Text style={{ borderRightWidth: 1, borderRightColor: 'gray', width: 80 }}>
                                        4 personas
                                    </Text>
                                    <Text style={{ borderRightWidth: 1, borderRightColor: 'gray', width: 100, paddingLeft: 10 }}>
                                        1 cama doble 
                                    </Text>
                                    <Text style={{ width: 120, paddingLeft: 10 }}>
                                        2 camas simples
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ marginLeft: 5, marginRight: 5, borderBottomColor: '#ddd', borderBottomWidth: 1 }}>
                            <MealPlanPicker>{mealPicker}</MealPlanPicker>
                        </View>
                        <View style={styles.roomPriceStyle} >
                            <Text style={{ fontSize: 13 }}>precio por noche por habitación</Text>
                            <Text style={{ fontSize: 18, marginLeft: 60 }}>
                                ARS
                                <Text style={{ fontWeight: '600', opacity: 1, color: 'black' }}>{precio}</Text>
                            </Text>
                        </View> 
                        <View style={styles.cambiarStlye}>
                            <Text style={{ marginLeft: 260, fontSize: 16, color: 'red', fontWeight: '600' }}>
                                Cambiar
                            </Text>
                        </View>            
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
    },
    roomSectionStyle: {
        backgroundColor: '#FFFFFF',
        opacity: 1,
        borderRadius: 3,
        borderBottomWidth: 1,
        shadowColor: '#000000',
        shadowOpacity: 0.32,
        alignItems: 'flex-start',
        marginLeft: 5,
        marginRight: 5,
    },
    roomSectionDescriptionStyle: {
        paddingTop: 10,
        justifyContent: 'flex-start',
        marginLeft: 10,
        marginRight: 10

    },
    roomSectionCapacity: {
         height: 30,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        marginLeft: 10,
        marginRight: 10               
    },
    roomPriceStyle: {
        marginLeft: 5,
        marginRight: 5,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',  
        height: 48,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    },
    cambiarStlye: {
        marginLeft: 5,
        marginRight: 5,
        alignItems: 'center',
        justifyContent: 'space-around',
        height: 48
    }
};

export default HotelDetail;
