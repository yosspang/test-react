import React from 'react';
import{
    View,
    Text,
    StyleSheet,
    TextInput,
    Button,
    Picker
} from 'react-native';

class Persegi extends React.Component{
    //1. Inisialisasi State
    state={panjang:null, lebar:null, hasil:null};

    //2. Method untuk manipulasi value state luas
    hitungLuas=()=>{
        let panjang = parseInt(this.state.panjang) //tampung nilai state terakhir pada variabel panjang
        let lebar = parseInt(this.state.lebar) //tamping nilai state terakhir pada variabel lebar
        let hitung_luas = panjang * lebar
        let hitung_keliling = 2*(panjang+lebar)
        if(this.state.rumus=="luas"){
        this.setState({hasil: hitung_luas})}
        else if(this.state.rumus=="keliling"){
            this.setState({hasil: hitung_keliling})
        }else{
            this.setState({hasil: null})
        }
        console.log(this.state)
    }

    render(){
        /* let panjang = this.state.panjang
        let lebar = this.state.lebar
        let luas = this.state.luas */
        return(
            <View>
                <Text>Hitung Luas Persegi Panjang</Text>
                <TextInput style={{height:40}} placeholder="Masukkan Panjang"
                onChangeText= {(InputPanjang)=>this.setState({panjang:InputPanjang})}
                value={this.state.panjang}/>
                <TextInput style={{height:40}} placeholder="Masukkan Lebar"
                onChangeText= {(InputLebar)=>this.setState({lebar:InputLebar})}
                value={this.state.lebar}/>
                
                <Picker selectedValue={this.state.rumus} itemPosition style={{height:100, width:300}} 
                onValueChange={(itemValue,itemIndex) => this.setState({rumus:itemValue})}>
                    <Picker.Item label="Pilih Tipe" value=""/>
                    <Picker.Item label="Luas" value="luas"/>
                    <Picker.Item label="Keliling" value="keliling"/>
                </Picker>
                <Button title="Hitung Luas/Keliling" onPress={() => {this.hitungLuas()}}/>
                <Text>Hasil: {this.state.hasil}</Text>
            </View>
        )
    }
}
export default Persegi;