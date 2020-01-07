import React, { Component }  from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import comparisonData from '../../assets/data/family_comparison_freshwater.json';
import ModalTester from '../components/ModalTester.js';

const ComparisonScreen = () => {

    //var data = comparisonData;

    // var data = comparisonData.map(function(item) {
    //     return {
    //         name: item.Comparison_Fish
    //     };
    // });

    

    //console.log(data.name);

    //console.log(data.name);

    //const datanamearr = Object.keys(data).map(key => data[key])

    //const array = Object.values( datanamearr );

    //console.log(array);

    // var chartArrayFilter = data.map(function(item) {
    //     return {value: item.Comparison_Fish};
    //   });

    //   console.log(chartArrayFilter);

    return (
        <View>
            <Text>Freshwater Compatibility</Text>
            
            <TouchableOpacity>
                <ModalTester/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.buttonText}>Clear Tank</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    iconStyle: {
        fontSize: 32,
        marginRight: 8
    },
    buttonText: {
        fontSize: 36
    }
});

export default ComparisonScreen;