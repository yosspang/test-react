import React from 'react';
import{
    View,Text
}from 'react-native';

class MyComponent extends React.Component{
    //Life cycle React-native
    constructor(){ //#1 bikin komponen "my cool component"
        super()
        this.name='My Cool Component'
    }
    
    UNSAFE_componentWillMount(){
        this.name='Ubah nama komponen' //#2 diubah jadi "ubah nama komponen"
    }

    render(){ //#3 view on device
        return(
            <View>
                <Text>{this.name}</Text>
            </View>
        );
    }
}
export default MyComponent;