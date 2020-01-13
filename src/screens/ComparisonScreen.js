import React, { useState, useEffect }  from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import comparisonData from '../../assets/data/family_comparison_freshwater.json';
import ModalTester from '../components/ModalTester.js';

const ComparisonScreen = () => {
    const addedFish = [];
    const [result, setResult] = useState(['']);

    const clearFish = () => {
        addedFish.length = 0;
        console.log('addedFish: ', addedFish);

        determineResult(addedFish);
    }

    const addFish = (fishToAdd) => {
        console.log('Added fish: ', fishToAdd);
        addedFish.push(fishToAdd);
        console.log('addedFish: ', addedFish);

        determineResult(addedFish);
    }

    const determineResult = (addedFish) => {
        const resultsString = addedFish.toString();
        console.log(resultsString);

        //setResult(resultsString);
    }

    return (
        <View>
            <Text>Freshwater Compatibility</Text>
            
            <Text>{result}</Text>

            <TouchableOpacity onPress={() => addFish("Angelfish")}>
                <Text style={styles.buttonText}>Add angelfish</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => addFish("Bettas")}>
                <Text style={styles.buttonText}>Add betta</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <ModalTester/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => clearFish()}>
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