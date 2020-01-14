import React, { useState, useEffect }  from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import comparisonData from '../../assets/data/family_comparison_freshwater.json';
import ModalTester from '../components/ModalTester.js';

const addedFish = [];
const compData = comparisonData;

const ComparisonScreen = () => {

    // console.log("Comparison Fish: ", compData.data[0].Comparison_Fish);

    // for(var i = 0; i < compData.data.length; i++) {
    //     console.log("Comparison Fish i: ", compData.data[i].Comparison_Fish);
    // }

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

        const results = compareFish(addedFish);

        var topLevelResult = '';

        if(results.includes('no')) {
            topLevelResult = 'Not compatible';
        }else if(results.includes('warn')) {
            topLevelResult = 'Use caution';
        }else if(results.includes('yes')) {
            topLevelResult = 'Generally compatible';
        }else{
            topLevelResult = '';
        }

        setResult(topLevelResult);
    }

    const compareFish = (addedFish) => {

        const numFish = compData.data.length;
        const comparisonResults = [];

        for(var i = 0; i < addedFish.length; i++) {
            console.log("addedFish i: ", addedFish[i]);

            for(var j = 0; j < numFish; j++) {

                if(addedFish[i] === compData.data[j].Comparison_Fish) {

                    console.log("Found match - addedFishp[i]: ", addedFish[i],
                        " - Comparison_Fish:", compData.data[j].Comparison_Fish);

                    console.log("Result: ", compData.data[j].Bettas);

                    switch(addedFish[i]) {
                        case "Angelfish":
                            comparisonResults.push(compData.data[j].Angelfish);
                            break;
                        case "Barbs":
                            comparisonResults.push(compData.data[j].Barbs);
                            break;
                        case "Bettas":
                            comparisonResults.push(compData.data[j].Bettas);
                            break;
                        case "Cichlids_African":
                            comparisonResults.push(compData.data[j].Cichlids_African);
                            break;
                        case "Cichlids_South_American":
                            comparisonResults.push(compData.data[j].Cichlids_South_American);
                            break;
                        case "Cory_Cats":
                            comparisonResults.push(compData.data[j].Cory_Cats);
                            break;
                        case "Danios_Minnows":
                            comparisonResults.push(compData.data[j].Danios_Minnows);
                            break;
                        case "Discus":
                            comparisonResults.push(compData.data[j].Discus);
                            break;
                        case "Eels":
                            comparisonResults.push(compData.data[j].Eels);
                            break;
                        case "Goldfish":
                            comparisonResults.push(compData.data[j].Goldfish);
                            break;
                        case "Gouramis":
                            comparisonResults.push(compData.data[j].Gouramis);
                            break;
                        case "Guppies":
                            comparisonResults.push(compData.data[j].Guppies);
                            break;
                        case "Hatchets":
                            comparisonResults.push(compData.data[j].Hatchets);
                            break;
                        case "Killifish":
                            comparisonResults.push(compData.data[j].Killifish);
                            break;
                        case "Koi":
                            comparisonResults.push(compData.data[j].Koi);
                            break;
                        case "Loaches":
                            comparisonResults.push(compData.data[j].Loaches);
                            break;
                        case "Mollies":
                            comparisonResults.push(compData.data[j].Mollies);
                            break;
                        case "Oscars":
                            comparisonResults.push(compData.data[j].Oscars);
                            break;
                        case "Platies":
                            comparisonResults.push(compData.data[j].Platies);
                            break;
                        case "Plecos":
                            comparisonResults.push(compData.data[j].Plecos);
                            break;
                        case "Rainbow_Fish":
                            comparisonResults.push(compData.data[j].Rainbow_Fish);
                            break;
                        case "Rasboras":
                            comparisonResults.push(compData.data[j].Rasboras);
                            break;
                        case "Sharks":
                            comparisonResults.push(compData.data[j].Sharks);
                            break;
                        case "Swordtails":
                            comparisonResults.push(compData.data[j].Swordtails);
                            break;
                        case "Tetras":
                            comparisonResults.push(compData.data[j].Tetras);
                            break;
                        case "Invertebrates":
                            comparisonResults.push(compData.data[j].Invertebrates);
                            break;
                        case "Plants":
                            comparisonResults.push(compData.data[j].Plants);
                            break;
                        default:
                            comparisonResults.push("none");
                            break;
                    }

                }
    
            }

        }

        return comparisonResults;
        
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