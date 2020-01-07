import React, { Component }  from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import comparisonData from '../../assets/data/family_comparison_freshwater.json';
import ModalTester from '../components/ModalTester.js';

const ComparisonScreen = () => {

    console.log(comparisonData[0].Comparison_Fish);

    return (
        <View>
            <Text>Freshwater Compatibility</Text>
            
            <TouchableOpacity>
                <ModalTester data={comparisonData[0].Comparison_Fish}/>
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