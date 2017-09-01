import React, { Component } from 'react';
import { View, TouchableWithoutFeedback, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

let select;
let state;
let arrow;

class MealPlanPicker extends Component {
    constructor() {
        super();
        select = 0; //seteo en serio arbitrariamente
        state = 'cerrado';
        arrow = 'keyboard-arrow-down';
    }
    selectionPressed() {
        console.log('entré');
        if (state === 'cerrado') {
            state = 'abierto';
            arrow = 'check';
        } else {
            state = 'cerrado';
            arrow = 'keyboard-arrow-down';
        }
    }
    renderPicker() {
        if (state === 'cerrado') {
            return;
        }
    }

    render() {
        console.log(select);
        return (
            <View>
                <View style={styles.desplegableStyle} >
                    <View 
                    style={{               
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        width: 300
                    }}
                    >
                        <Icon name={this.props.children[select].icon} size={24} color='gray' />
                        <Text style={{ marginLeft: 10 }}>{this.props.children[select].label}</Text>
                    </View>
                    <TouchableWithoutFeedback onPress={() => this.selectionPressed()}>
                        <View style={{ justifyContent: 'flex-end' }}>
                            <Icon name={arrow} size={20} color='red' />
                        </View> 
                    </TouchableWithoutFeedback>
                </View>
            </View>
        );
    }
}

const styles = {
    desplegableStyle: {
        paddingTop: 10,
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        flexDirection: 'row',
    }
};


export default MealPlanPicker;
