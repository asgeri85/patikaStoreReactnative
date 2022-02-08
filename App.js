import React from 'react';
import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  TextInput,
  FlatList,
} from 'react-native';
import pati_data from './pati_data.json';
import ItemCard from './src/components/ItemCard';

const App = () => {
  const itemcard = ({item}) => <ItemCard pati={item} />;

  return (
    <SafeAreaView>
      <View>
        <Text style={styles.text_header}>PATİKASTORE</Text>
        <TextInput style={styles.input} placeholder={'Ara'} />
        <FlatList
          data={pati_data}
          renderItem={itemcard}
          numColumns={2}
          horizontal={false}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text_header: {
    color: 'mediumorchid',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
});

export default App;
