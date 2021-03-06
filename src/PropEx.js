import{View,Text} from 'react-native';
import React from 'react';

/* export default class PropEx extends React.Component{
    render(){
        return(
            <View>
                <Text>Contoh 1x manggil Props</Text>
                <Text> Nama : {this.props.nama}</Text>
                <Text> Alamat : {this.props.alamat}</Text>
                <Text> Telp : {this.props.telp}</Text>
                <Text> Email: {this.props.email}</Text>
                <Text></Text>
                
            </View>
        );
    }
} */

function PropEx(props){
    return(
            <View>
                <Text>Contoh 1x manggil Props</Text>
                <Text> Nama : {props.nama}</Text>
                <Text> Alamat : {props.alamat}</Text>
                <Text> Telp : {props.telp}</Text>
                <Text> Email: {props.email}</Text>
                <Text></Text>
                
            </View>
    )
};


export default PropEx;