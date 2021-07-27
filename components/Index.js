import React, { Component } from 'react'
import {StyleSheet, Text, View, Keyboard, TouchableWithoutFeedback, Dimensions, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input, Button } from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select';

class Index extends Component {

    request = (amount, type) => {
        fetch('https://api.recope.go.cr/ventas/precio/consumidor',{
            method: 'GET',
            header: {
                'Accept': 'application/json',
                'Content-Type': 'application/json' 
            }
        }).then((response) => response.json()).then((responseJson) =>{

            responseJson.forEach(price => {

                const {nomprod, preciototal} = price;
                
                if(nomprod == type){
                    Alert.alert(
                        type,
                        `Monto: ₡${amount}, Litros: ${(amount / preciototal).toFixed(3)}`,
                        [{ text: "Aceptar"}],
                        {cancelable: false}
                    );
                }

            });

        }).catch((error) =>{
            alert(error);
        });
    }

   render() {
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={styles.container}>
                    <Input
                        placeholder='Monto a consultar (colones)'
                        keyboardType="numeric"
                        onChangeText={(amount) => this.setState({amount})}
                    />
                    <RNPickerSelect
                        onValueChange={(type) => this.setState({type})}
                        items={[
                            {label: 'Gasolina super (superior)', value: 'GASOLINA SUPER ( SUPERIOR )'},
                            {label: 'Gasolina plus 91 (regular)', value: 'GASOLINA PLUS 91 ( REGULAR )'},
                            {label: 'Diesel', value: 'DIESEL 50'}
                        ]}
                    />
                    <Button
                        title="Consultar"   
                        onPress = {() => this.request(this.state.amount, this.state.type)}                      
                    />
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const {width: WIDTH} = Dimensions.get('window');

const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: '#e5e5e5',
      alignItems: 'center',
      justifyContent: 'center',
    },

});

export default Index;