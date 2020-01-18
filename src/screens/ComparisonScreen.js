import React, { useState, useEffect }  from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import comparisonData from '../../assets/data/family_comparison_freshwater.json';
import ModalFishSelect from '../components/ModalFishSelect.js';

const addedFish = [];
var detailedResults = [];
const compData = comparisonData;
var icon = require('./image/fish_tank_empty.png');

const ComparisonScreen = () => {

    console.log('Detailed Results', detailedResults);

    const [result, setResult] = useState(['Start by adding a fish']);

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
            icon = require('./image/fish_tank_bad.png');
            topLevelResult = 'Not Compatible';
        }else if(results.includes('warn')) {
            icon = require('./image/fish_tank_warn.png');
            topLevelResult = 'Use Caution';
        }else if(results.includes('yes')) {
            icon = require('./image/fish_tank_good.png');
            topLevelResult = 'Generally Compatible';
        }else{
            icon = require('./image/fish_tank_empty.png');
            topLevelResult = 'Add another fish!';
        }

        setResult(topLevelResult);
    }

    const compareFish = (addedFish) => {

        const numFish = compData.data.length;
        const comparisonResults = [];
        detailedResults = [];

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

                        if(comparisonResults[comparisonResults.length - 1] === 'warn') {
                            const resultString = `Warning when mixing ${addedFish[i].replace(/_/g, ' ')} & ${addedFish[k].replace(/_/g, ' ')}.`;
                            
                            if(!detailedResults.includes(resultString)) {
                                detailedResults.push(resultString);
                            }
                        } else if(comparisonResults[comparisonResults.length - 1] === 'no') {
                            const resultString = `${addedFish[i].replace(/_/g, ' ')} & ${addedFish[k].replace(/_/g, ' ')} are not compatible.`;
                            
                            if(!detailedResults.includes(resultString)) {
                                detailedResults.push(resultString);
                            }
                        }

                    }

                }
    
            }

        }

        console.log("Full results: ", comparisonResults);

        return comparisonResults;
        
    }

    return (
        <View style={styles.container}>

            <Image style={styles.imageStyle} source={icon} />

            <Text style={styles.resultText}>{result}</Text>

            <FlatList
                data={detailedResults}
                keyExtractor={index => index}
                renderItem={({item}) => {
                    return(
                        <Text style={{textAlign: 'center'}}> {item} </Text>
                    );
                }}
            />

            <View style={styles.buttonContainer}>

                <TouchableOpacity style={styles.buttonStyle}>
                    <ModalFishSelect 
                        onSubmit={(fish) => {
                            addFish(fish);
                        }}
                    />
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonStyle} onPress={() => clearFish()}>
                    <Text style={styles.buttonText}>Clear Tank</Text>
                </TouchableOpacity>

            </View>

            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    iconStyle: {
        fontSize: 32,
        marginRight: 8
    },
    buttonText: {
        fontSize: 28
    },
    imageStyle: {
        width: 300,
        height: 300,
        marginTop: 16
    },
    buttonStyle: {
        borderRadius: 24,
        borderWidth: 4,
        padding: 8,
        margin: 4,
        flex: 2,
        alignItems: 'center'
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginBottom: 8,
        alignItems: 'center'
    },
    resultText: {
        fontSize: 24
    }
});

export default ComparisonScreen;