/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import { FlatList, Text,SafeAreaView, View, StyleSheet } from 'react-native';
import music_data from './music-data.json';
import SongCard from './components/SongCard';
import SearchBar from './components/SearchBar/SearchBar';

function App() {

  const [list, setList] = useState(music_data);

  // FİLTRELEME 
  const handleSearch = text => {
    const filteredList = music_data.filter(song => {
      const searchText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();

      return currentTitle.indexOf(searchText) > -1;
    });

    setList(filteredList);
    // console.log(searchText);
  };

const renderSong = ({item}) => <SongCard song={item} /> 
const itemSeparatorComponent = () => <View style={styles.separator}/>


  return (
    <SafeAreaView style={styles.container}>     
    <SearchBar onSearch={handleSearch}/>
        <FlatList 
        keyExtractor={item => item.id}
        data={list}
        renderItem={renderSong}
        ItemSeparatorComponent={itemSeparatorComponent}
        />
    </SafeAreaView>
  );
}


export default App;


const styles = StyleSheet.create ({
  container: {
    flex: 1,
  },
  separator: {
    borderWidth: 0.5,
    color: '#e0e0e0',
    
  }
});