import React from 'react';
import {View,Text} from 'react-native';

export default class Ruang extends React.Component{
    render(){
        return(
            <View>
                <Text>Nama Ruang    : {this.props.nama}</Text>
                <Text>Rumus Luas    : {this.props.luas}</Text>
                <Text>Rumus Keliling: {this.props.keliling}</Text>
                <Text></Text>
            </View>
        )
    }
}