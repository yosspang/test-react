import React from 'react';
import{
    View,
    Text, 
    Button,
    TouchableOpacity,
    StyleSheet
}from 'react-native';
import Persegi from './Persegi';
import Pajak from './HitungPajak'; 
import Ruang from './Ruang'

class Menu extends React.Component{
    state ={value:null, name:null };
    
    appPersegi=()=>{
        this.setState({value: <Persegi/>,name:'Luas Persegi'})
    }

    
    appPajak=()=>{
        this.setState({value: <Pajak/>,name:'Hitung Pajak'})
    }
    
    render(){
        return(
            <View>
                 <Text>Nilai state saat ini: {this.state.name}</Text> 
                 <TouchableOpacity style={styles.button} onPress={() => {this.appPersegi()}}>
                    <Text style={{color: '#7FFF00'}}>Persegi.js</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => {this.appPajak()}}>
                    <Text style={{color: '#ff0000'}}>HitungPajak.js</Text>
                </TouchableOpacity>   
                
                {this.state.value}
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

export default Menu;