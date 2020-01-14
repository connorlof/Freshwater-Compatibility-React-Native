import React, { useState, useEffect }  from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import comparisonData from '../../assets/data/family_comparison_freshwater.json';
import ModalFishSelect from '../components/ModalFishSelect.js';

const addedFish = [];
const compData = comparisonData;

const ComparisonScreen = () => {

    const [result, setResult] = useState(['']);

    const logFish = () => {
        console.log("logging fish");
    }

    const clearFish = () => {
        addedFish.length = 0;
        determineResult(addedFish);
    }

    const addFish = (fishToAdd) => {
        addedFish.push(fishToAdd);

        console.log('Added fish: ', fishToAdd);
        console.log('addedFish array: ', addedFish);

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

        if(addedFish.length < 2) {
            console.log("Returning, at least two fish must be selected.");
            return comparisonResults;
        }

        for(var i = 0; i < addedFish.length; i++) {

            for(var j = 0; j < numFish; j++) {

                if(addedFish[i] === compData.data[j].Comparison_Fish) {

                    for(k = i + 1; k < addedFish.length; k++) {

                        console.log("addedFish[i]:", addedFish[i], "Comparison_Fish match: ", addedFish[k]);

                        switch(addedFish[k]) {
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

        }

        console.log("Full results: ", comparisonResults);

        return comparisonResults;
        
    }

    return (
        <View>
            <Text>Freshwater Compatibility</Text>
            
            <Text>{result}</Text>

            <TouchableOpacity>
                <ModalFishSelect 
                    onSubmit={(fish) => {
                        addFish(fish);
                    }}
                />
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