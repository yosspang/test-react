import React from 'react';
import{
    View,
    Text, 
    TouchableOpacity,
    StyleSheet
}from 'react-native';

class Counter extends React.Component{
    //#1 inisialisasi State
    state ={ value:0 };
    
    //#2 method untuk merubah state
    minus=()=>{
        let currentValue = this.state.value;
        this.setState({value: currentValue - 1})
    }

    //#2 method untuk merubah state
    plus=()=>{
        let currentValue = this.state.value;
        this.setState({value: currentValue + 1})
    }
    
    render(){ //#3 read component state menggunakan this.state.<nama_state>
        let currentValue = this.state.value;
        if(!(currentValue % 6)){
            currentValue = 'kucing'
        }
        return(
            <View>
                <Text>Nilai state saat ini: {currentValue}</Text>
                <TouchableOpacity style={styles.button} onPress={() => this.plus()}>
                    <Text style={{color: '#7FFF00'}}>Tambah</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => this.minus()}>
                    <Text style={{color: '#ff0000'}}>Kurang</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button:{
        alignItems:'center',
        backgroundColor:'#808080',
        padding:20,
        margin:4
    }
})

export default Counter;