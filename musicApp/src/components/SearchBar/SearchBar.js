import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './SearchBar.styles';



const SearchBar = (props) => {
    return (
        <View style={styles.container}>
            <TextInput placeholder="Search.." onChangeText={props.onSearch}></TextInput>
        </View>
    )
}

export default SearchBar;