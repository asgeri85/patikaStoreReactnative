import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  card_container: {
    borderRadius: 10,
    padding: 10,
    width: Dimensions.get('screen').width / 2,
    backgroundColor: 'grey',
    margin: 8,
    justifyContent: 'center',
  },
  title_container: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  price_text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  img_container: {
    height: Dimensions.get('window').height / 4,
    width: Dimensions.get('window').width / 3,
    borderRadius: 10,
    resizeMode: 'contain',
  },
  text_stok_hide: {
    height: 0,
    width: 0,
  },
  text_stok_visible: {
    fontSize: 18,
    color: 'red',
    fontWeight: 'bold',
  },
});
