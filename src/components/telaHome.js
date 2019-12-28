import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

const imgCaminho = require('../../imgs/poluicao.png');

export default class TelaHome extends Component {
    render() {
        return (
            <View style={styles.viewEstilo}>
                <Image
                    style={styles.imgLogo}
                    source={imgCaminho}
                />
                <Text style={styles.title}>Air Pollution</Text>
                <Text style={styles.desc}>
                    O Air Pollution tem o objetivo de trazer níveis de
                    poluição de determinadas regiões.
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewEstilo: {
        alignItems: 'center',
        marginTop: 80,
        marginLeft: 10,
        marginRight: 10
    },
    imgLogo: {
        width: 250,
        height: 250
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    desc: {
        textAlign: 'center'
    }
});
