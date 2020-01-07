import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View, StyleSheet}

from 'react-native'
class ModalTester extends Component {

    constructor(props) {
        super(props);

        this.data = {
            fish: props.data,
          };
      }

   state = {
      modalVisible: false,
   }

   toggleModal(visible) {
      this.setState({ modalVisible: visible });
   }

   render() {
      return (
         <View style = {styles.container}>
            <Modal animationType = {"slide"} transparent = {false}
               visible = {this.state.modalVisible}
               onRequestClose = {() => { console.log("Modal has been closed.") } }>
               
               <View style = {styles.modal}>

                  <Text style = {styles.text}>Select Species</Text>

                  <Text>{this.data.fish}</Text>
                  
                  <TouchableHighlight onPress = {() => {
                     this.toggleModal(!this.state.modalVisible)}}>
                     
                     <Text style = {styles.text}>Add Fish</Text>
                  </TouchableHighlight>

                  <TouchableHighlight onPress = {() => {
                     this.toggleModal(!this.state.modalVisible)}}>
                     
                     <Text style = {styles.text}>Close</Text>
                  </TouchableHighlight>

               </View>
            </Modal>
            
            <TouchableHighlight onPress = {() => {this.toggleModal(true)}}>
               <Text style = {styles.text}>Add Fish</Text>
            </TouchableHighlight>
         </View>
      )
   }
}
export default ModalTester

const styles = StyleSheet.create ({
   container: {
      alignItems: 'center'
   },
   modal: {
      flex: 1,
      alignItems: 'center'
   },
   text: {
      fontSize: 36
   }
})