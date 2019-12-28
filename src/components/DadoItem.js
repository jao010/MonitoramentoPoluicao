import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class DadoItem extends Component {
    getRegiao() {
        let regiao = this.props.item.station.name;
        regiao = regiao.split(',');
        return regiao[0];
    }

    cardVerde() {
        return (
            <View style={styles.viewItemVerde}>
                <View style={styles.viewLine}>
                    <Text style={styles.txtDado}> {this.props.item.aqi}</Text>
                </View>
                <View style={styles.viewLine}>
                    <Text style={styles.txtDado}> {this.getRegiao()}</Text>
                </View>
            </View>
        );
    }
    cardAmarelo() {
        return (
            <View style={styles.viewItemAmarelo}>

                <View style={styles.viewLine}>
                    <Text style={styles.txtNivel}> {this.props.item.aqi}</Text>
                </View>
                <View style={styles.viewLine}>
                    <Text style={styles.txtRegiao}> {this.getRegiao()}</Text>
                </View>
            </View>
        );
    }

    cardLaranja() {
        return (
            <View style={styles.viewItemLaranja}>

                <View style={styles.viewLine}>
                    <Text style={styles.txtNivel}> {this.props.item.aqi}</Text>
                </View>
                <View style={styles.viewLine}>
                    <Text style={styles.txtRegiao}> {this.getRegiao()}</Text>
                </View>
            </View>
        );
    }

    cardVermelho() {
        return (
            <View style={styles.viewItemVermelho}>

                <View style={styles.viewLine}>
                    <Text style={styles.txtNivel}> {this.props.item.aqi}</Text>
                </View>
                <View style={styles.viewLine}>
                    <Text style={styles.txtRegiao}> {this.getRegiao()}</Text>
                </View>
            </View>
        );
    }

    render() {
        if (this.props.item.aqi <= 50) {
            console.log('verde');
            return this.cardVerde();
        } else if (this.props.item.aqi > 51 && this.props.item.aqi <= 100) {
            console.log('amarelo');
            return this.cardAmarelo();
        } else if (this.props.item.aqi > 101 && this.props.item.aqi <= 150) {
            console.log('laranja');
            return this.cardLaranja();
        } else if (this.props.item.aqi > 151) {
            console.log('vermelho');
            return this.cardVermelho();
        }
    }
}

const styles = StyleSheet.create({
    viewItemAmarelo: {
        margin: 10,
        backgroundColor: 'rgb(255, 255, 0)',
        alignItems: 'center',
        borderRadius: 10,
        width: 150,
        height: 120,
        borderWidth: 2,
        borderColor: 'rgb(205, 225, 25)'
    },
    viewItemVerde: {
        margin: 10,
        backgroundColor: 'rgb(0, 255, 0)',
        alignItems: 'center',
        borderRadius: 10,
        width: 150,
        height: 120,
        borderWidth: 2,
        borderColor: 'rgb(25, 225, 25)'
    },
    viewItemLaranja: {
        margin: 10,
        backgroundColor: 'rgb(255, 154, 0)',
        alignItems: 'center',
        borderRadius: 10,
        width: 150,
        height: 120,
        borderWidth: 2,
        borderColor: 'rgb(225, 138, 25)'
    },
    viewItemVermelho: {
        margin: 10,
        backgroundColor: 'rgb(255, 0, 0)',
        alignItems: 'center',
        borderRadius: 10,
        width: 150,
        height: 120,
        borderWidth: 2,
        borderColor: 'rgb(225, 25, 25)'
    },
    viewLine: {
        marginLeft: 5,
        flexDirection: 'row'
    },
    txtNivel: {
        fontWeight: 'bold',
        fontSize: 52
    },
    txtRegiao: {
        fontWeight: 'bold',
        fontSize: 15
    }
});
