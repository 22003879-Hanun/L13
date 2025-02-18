import React, { useState, useEffect } from 'react';
import { FlatList, StatusBar, Text, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        margin: 10,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#4B2E39',
    },
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#F8ECE4',
    },
    itemContainer: {
        flex: 1,
        alignItems: 'flex-start',
        flexDirection: 'column',
        padding: 20,
        marginBottom: 10,
        borderWidth: 2,
        borderColor: '#D3A2B8',
        borderRadius: 10,
        backgroundColor: '#FFFFFF',

    },
    inputStyle: {
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#D3A2B8',
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#FFF1E6',
        color: '#4B2E39',
    },
    listContainer: {
        backgroundColor: '#FFF5F0',
        borderRadius: 10,
        padding: 10,
    },
});



const Home = () => {
    const [mydata, setMydata] = useState([]);
    const [originalData, setOriginalData] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        fetch("https://data.gov.sg/api/action/datastore_search?resource_id=d_c9f57187485a850908655db0e8cfe651")
            .then((response) => response.json())
            .then((data) => {
                setMydata(data.result.records);
                setOriginalData(data.result.records);
            });
    }, []);

    const FilterData = (text) => {
        if (text !== '') {
            const filteredData = originalData.filter((item) =>
                item.street_name.toLowerCase().includes(text.toLowerCase()) ||
                item.block.toLowerCase().includes(text.toLowerCase())
            );
            setMydata(filteredData);
        } else {
            setMydata(originalData);
        }
    };

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                style={styles.itemContainer}
                onPress={() => navigation.navigate('ViewData', { item })}
            >
                <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
                    STREET: {item.street_name}

                </Text>
                <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
                    BLOCK: {item.block}
                </Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <StatusBar />
            <Text style={styles.textStyle}>RENTING OUT OF FLATS 2024</Text>
            <Text>Search:</Text>
            <TextInput
                style={styles.inputStyle}
                onChangeText={(text) => {
                    FilterData(text);
                }}
            />
            <FlatList
                data={mydata}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
};

export default Home;


