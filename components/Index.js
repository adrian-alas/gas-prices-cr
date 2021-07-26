import React, { Component } from 'react'
import {StyleSheet, Text, View, Keyboard, TouchableWithoutFeedback, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input, Button } from 'react-native-elements';

class Index extends Component {

   render() {
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={styles.container}>
                    <Input
                        placeholder='Monto a consultar (colones)'
                        keyboardType="numeric"
                    />
                    <Button
                        title="Consultar"                         
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