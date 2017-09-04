import React, { Component } from 'react';
import { View, TouchableWithoutFeedback, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

class MealPlanPicker extends Component {

    constructor() {
        super();
        this.state = { viewOne: true, select: 0 };
    }
    changeView(id) {
        this.setState({
          viewOne: !this.state.viewOne,
          select: id
        });
    }

    renderCondition(value) {
        if (value.id !== this.state.select) {
            return (
                <TouchableWithoutFeedback onPress={() => this.changeView(value.id)} key={value.id}>
                <View  
                style={{               
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    width: 300,
                    alignContent: 'center',
                    height: 30,
                    borderBottomColor: '#ddd',
                    borderBottomWidth: 1
                }}
                >
                        <Icon name={value.icon} size={24} color='gray' />
                        <Text style={{ marginLeft: 10 }}>{value.label}</Text>
                    </View>
            </TouchableWithoutFeedback>);
        }
    }

    renderNewView() {
       const toRet = this.props.children.map((value) =>
            this.renderCondition(value)
        );

        return toRet;
    }

    render() {
       const id = this.state.select;
       console.log(id);
        if (!this.state.viewOne) { 
            return (
                <View style={styles.desplegableStyle} >
                    <View 
                    style={{               
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        width: 320
                    }}
                    >
                        <TouchableWithoutFeedback 
                            onPress={() => this.changeView(id)}
                        >
                            <View style={styles.desplegableStyle}>
                                <View  
                                style={{               
                                    flexDirection: 'row',
                                    justifyContent: 'flex-start',
                                    alignContent: 'center',
                                    width: 300,
                                    height: 30,
                                    borderBottomColor: '#ddd',
                                    borderBottomWidth: 1
                                }}
                                >
                                    <Icon name={this.props.children[id].icon} size={24} color='gray' />
                                    <Text style={{ marginLeft: 10 }}>{this.props.children[id].label}</Text>
                                </View>
                                <View style={{ justifyContent: 'flex-end', alignItems: 'center' }}>
                                    <Icon name="check" size={20} color='red' />
                                </View>
                            </View> 
                        </TouchableWithoutFeedback>
                        {this.renderNewView()}
                    </View>
                </View>
            );     
        }
        return (
            <View>
                <View style={styles.desplegableStyle} >
                    <View 
                    style={{               
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        width: 300,
                        height: 30
                    }}
                    >
                        <Icon name={this.props.children[id].icon} size={24} color='gray' />
                        <Text style={{ marginLeft: 10 }}>{this.props.children[id].label}</Text>
                        </View>
                        <TouchableWithoutFeedback onPress={() => this.changeView(id)}>
                            <View style={{ justifyContent: 'flex-end' }}>
                                <Icon name="keyboard-arrow-down" size={20} color='red' />
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
