import React from 'react';
import{
    View,Text, TouchableOpacity
}from 'react-native';

class ComponentState extends React.Component{
    //Life cycle React-native
    constructor(){ 
        super()
        this.state={name:"Rico"} //inisialisasi state
    }
    
    componentWillMount(){
        this.setState({name:'Denis'})
    }

    render(){ //#3 read component state menggunakan this.state.<nama_state>
        return(
            <View>
                <TouchableOpacity>
                    <Text>{this.state.name}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
export default ComponentState;