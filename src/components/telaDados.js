import React, { Component } from 'react';
import {
    ScrollView,
    View,
    StyleSheet,
    Text,
    RefreshControl
} from 'react-native';
import axios from 'axios';
import DadoItem from './DadoItem';

const uri = 'https://api.waqi.info/search/?token=ab666ffcaed2c67834b099bc6ee0f1266a8f9f03&keyword=brazil';

export default class TelaDados extends Component {
    constructor(props) {
        super(props);

        this.state = { listaDados: [], refreshing: false };
    }

    componentWillMount() {
        axios.get(uri)
            .then(resp => {
                console.log(resp.data.data);
                this.setState({
                    listaDados: resp.data.data
                });
            })
            .catch(erro => {
                console.log(erro);
            });
    }

    onRefresh = () => {
        this.setState({ refreshing: true });
        axios.get(uri)
            .then(resp => {
                console.log(resp.data.data);
                this.setState({
                    listaDados: resp.data.data
                });
            })
            .catch(erro => {
                console.log(erro);
            });
        this.setState({ refreshing: false });
    }

    render() {
        return (
            <ScrollView
                style={style.scrollViewStyle}
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this.onRefresh}
                    />
                }
            >
                <View
                    style={{
                        margin: 5,
                        borderColor: 'grey',
                        borderRadius: 4,
                        borderWidth: 2,
                        alignItems: 'center',
                        backgroundColor: 'grey'
                    }}
                >
                    <Text style={style.textTitulo}>Dados das regiões de São Paulo</Text>
                </View>

                <View style={style.viewComponentStyle}>
                    {this.state.listaDados.map((item) =>
                        (
                            <DadoItem key={item.uid} item={item} />
                        )
                    )
                    }
                </View>
            </ScrollView>
        );
    }
}

const style = StyleSheet.create({
    scrollViewStyle: {
        flex: 1
    },
    viewComponentStyle: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        borderColor: 'grey',
        borderWidth: 2,
        borderRadius: 4,
        margin: 5

    },
    textTitulo: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white'
    }
});
