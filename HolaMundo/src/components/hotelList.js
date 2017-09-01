import React, { Component, View } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import ListItem from './listItem';

class HotelList extends Component {
    componentWillMount() {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        
        this.dataSource = ds.cloneWithRows(this.props.hotels);
    }

    renderRow(hotel) {
        return <ListItem hotel={hotel} />;
    }

    render() {
        return (
                <ListView
                    dataSource={this.dataSource}
                    renderRow={this.renderRow}
                />
        );
    }
}

const mapStateToProps = state => {
    return { hotels: state.hotels };
};

export default connect(mapStateToProps)(HotelList);
