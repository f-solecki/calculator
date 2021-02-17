import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { value, handleOnPress } = this.props
        return (
            <TouchableOpacity
                style={{
                    flex: 1,
                    backgroundColor: this.props.back,
                    justifyContent: "center",
                    alignItems: "center"
                }}
                onPress={() => handleOnPress(value)}>
                <Text style={styles.text}>{value}</Text>
            </TouchableOpacity>
        );
    }
}


const styles = StyleSheet.create({
    text: {
        color: "#fff",
        fontSize: 40
    }
});

export default Item;