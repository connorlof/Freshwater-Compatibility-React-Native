import React, { useState, useEffect }  from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import comparisonData from '../../assets/data/family_comparison_freshwater.json';
import ModalTester from '../components/ModalTester.js';

const ComparisonScreen = () => {
    const [addedFish, setAddedFish] = useState([]);
    const [result, setResult] = useState('');

    const onFishAdded = (fishAdded) => {
        console.log('Added fish: ', fishAdded);
        setAddedFish([fishAdded]);
        console.log('addedFish index 0: ', addedFish[0]);
    }

    return (
        <View>
            <Text>Freshwater Compatibility</Text>
            
            <TouchableOpacity>
                <ModalTester/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onFishAdded("Angelfish")}>
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