import React from 'react'; 
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

const AppStatles = (props) =>(
    <View>
        <Text>Contoh Stateless props</Text>
        <Text>Nama: {props.nama}</Text>
        <Text>Alamat: {props.alamat}</Text>
        <Text>Telp: {props.telp}</Text>
        <Text>Email: {props.email}</Text>
        <Text></Text>
    </View>
)

export default AppStatles;