import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import comparisonData from '../../assets/data/family_comparison_freshwater.json';

class ModalFishSelect extends Component {

    data = comparisonData;

    _keyExtractor = (item, index) => item.Comparison_Fish.toString();

    constructor({ onSubmit }) {
      super();
      this.fishNames = comparisonData;
      this.onSubmitFish = onSubmit;
    }

   state = {
      modalVisible: false,
   }

   toggleModal(visible, fishToAdd) {

      if(visible === false) {
         this.onSubmitFish(fishToAdd);
      }

      this.setState({ modalVisible: visible });
   }

   render() {
      return (
         <View style = {styles.container}>
            <Modal animationType = {"slide"} transparent = {false}
               visible = {this.state.modalVisible}
               onRequestClose = {() => { console.log("Modal has been closed.") } }>
               
               <View style = {styles.modal}>

                <FlatList
                    data={this.fishNames.data}
                    keyExtractor={this._keyExtractor}
                    renderItem={({item}) => {
                        return(
                            <TouchableOpacity onPress = {() => {this.toggleModal(false, item.Comparison_Fish)}}>
                                <Text style = {styles.text}> {item.Comparison_Fish.replace(/_/g, ' ')} </Text>
                            </TouchableOpacity>
                        );
                    }}
                />

                  <TouchableHighlight style={styles.buttonStyle} onPress = {() => {
                     this.toggleModal(!this.state.modalVisible, '')}}>
                     
                     <Text style = {styles.text}>Cancel</Text>
                  </TouchableHighlight>

               </View>
            </Modal>
            
            <TouchableHighlight onPress = {() => {this.toggleModal(true, '')}}>
               <Text style = {styles.text}>Add Fish</Text>
            </TouchableHighlight>
         </View>
      )
   }
}
export default ModalFishSelect

const styles = StyleSheet.create ({
   container: {
      alignItems: 'center'
   },
   modal: {
      flex: 1,
      alignItems: 'center'
   },
   text: {
      fontSize: 28,
      textAlign: 'center'
   },
   buttonStyle: {
      borderRadius: 24,
      borderWidth: 4,
      padding: 8,
      margin: 4,
      width: 200,
      alignItems: 'center'
  }
})