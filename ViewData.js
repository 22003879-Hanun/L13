import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#F8ECE4',
    },
    textStyle: {
        fontSize: 20,
        marginVertical: 10,
        color: '#4B2E39',
        backgroundColor: '#FFFFFF',
        padding: 10,
        borderRadius: 10,

    },
    headerStyle: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: '#4B2E39',
        backgroundColor: '#FAE3D9',
        padding: 15,
        borderRadius: 10,
    },
});


const ViewData = ({ route }) => {
    const { item } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.headerStyle}>Details</Text>
            {/*<Text style={styles.textStyle}>Street Name: {item.street_name}</Text>*/}
            <Text style={styles.textStyle}>Town: {item.town}</Text>
            <Text style={styles.textStyle}>Block: {item.block}</Text>
            <Text style={styles.textStyle}>Flat Type: {item.flat_type}</Text>
            <Text style={styles.textStyle}>Monthly Rent: ${item.monthly_rent}</Text>
        </View>
    );
};

export default ViewData;




