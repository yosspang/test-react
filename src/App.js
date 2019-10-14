import React from 'react'; /* import komponen react dari ../node_modules/react/ */
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import PropEx from './PropEx';
import Ruang from './Ruang';

export default class App extends React.Component{
    state={myState: 'text ini adalah contoh State awal'}
    render(){
        console.log('Hello World')
        return(
            <View>
                {/* <PropEx nama='Andi' telp='1234125' alamat='Bandung'  email='asd@mail.com'/>
                <PropEx nama='Bandi' alamat='Jakarta' telp='5432054' email='bandi@mail.com'/>
                <PropEx nama='Candi' alamat='Tangerang' telp='5432055' email='candi@mail.com'/>
                <PropEx nama='Dandi' alamat='Bekasi' telp='5432056' email='dandi@mail.com'/>
                <PropEx nama='Eandi' alamat='Bogor' telp='5432057' email='eandi@mail.com'/> */}
                <Ruang nama='Persegi' luas='s * s' keliling='4 * s'/>
                <Ruang nama='Persegi Panjang' luas='p * l' keliling='2p + 2l'/>
                <Ruang nama='Segitiga sama sisi' luas='1/2 a * t' keliling='3 * a'/>
                <Ruang nama='Lingkaran' luas='22/7 * (r^2)' keliling='22/7 * 2r'/>
                <Ruang nama='Trapesium' luas='1/2 *  ((a + c) * t)' keliling='a + b + c + d'/>
            </View>
        );
        
    }
}

