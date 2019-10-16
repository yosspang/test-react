import React from 'react';
import{
    View, Text, TextInput, Button
}from 'react-native';

class HitungPajak extends React.Component{
    state={gaji_bulanan:null,gaji_setahun:null,pajak:null,bayar_pajak:null};
    hitungPajak=()=>{
        let gaji_bulanan = parseInt(this.state.gaji_bulanan)
        let gaji_tahunan = gaji_bulanan * 12
        let persen_pajak = 0
        let total_pajak = 0
        if(gaji_tahunan<50000000){
            total_pajak='nihil'
        }else if((gaji_tahunan>50000000) &&(gaji_tahunan<240000000)){
            persen_pajak = 5
            total_pajak = gaji_tahunan * persen_pajak / 100
        }else if(gaji_tahunan>240000000){
            persen_pajak = 15
            total_pajak = gaji_tahunan * persen_pajak / 100
        }
        this.setState({gaji_setahun:gaji_tahunan, pajak:persen_pajak, bayar_pajak:total_pajak})
    }
    render(){
        return(
            <View>
                <Text>Hitung Pajak Penghasilan</Text> 
                <TextInput style={{height:40}} placeholder="Masukkan Gaji Bulanan"
                onChangeText= {(InputGaji)=>this.setState({gaji_bulanan:InputGaji})}
                value={this.state.gaji_bulanan}/>
                <Button title="Hitung PPh" onPress={()=>{this.hitungPajak()}}/>
                
                <Text>Gaji Tahunan: {this.state.gaji_setahun}</Text>
                <Text>Pajak: {this.state.pajak}%</Text>
                <Text>Bayar Pajak: {this.state.bayar_pajak}</Text>
            </View>
        )
    }
}
export default HitungPajak;