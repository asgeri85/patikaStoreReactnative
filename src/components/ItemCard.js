import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './ItemCard.style';

const IconCard = ({pati}) => {
  return (
    <View style={styles.card_container}>
      <Image source={{uri: pati.imgURL}} style={styles.img_container} />
      <Text style={styles.title_container} numberOfLines={2}>
        {pati.title}
      </Text>
      <Text style={styles.price_text}>{pati.price}</Text>
      <Text
        style={pati.inStock ? styles.text_stok_hide : styles.text_stok_visible}>
        Stokta Yok
      </Text>
    </View>
  );
};

export default IconCard;
