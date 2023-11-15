import React, { useRef, useState, useEffect } from 'react';
import { Image, Dimensions, StyleSheet, FlatList } from 'react-native';

const images = [
  { key: 1, image: require('../imgs/image/khuyen-mai-chuyen-bay.jpg') },
  { key: 2, image: require('../imgs/image/khuyen-mai-data.jpg') },
  { key: 3, image: require('../imgs/image/khuyen-mai-du-lich-da-lat.jpg') },
  { key: 4, image: require('../imgs/image/khuyen-mai-du-lich-ha-noi.jpg') },
  { key: 5, image: require('../imgs/image/khuyen-mai-thanh-toan-cuoc.jpg') },
];

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const renderItem = ({ item }) => (
  <Image
    resizeMode='stretch'
    style={{ width: WIDTH, height: HEIGHT * 0.25 }}
    source={item.image}
  />
);

export default function Slide() {
  const [imgActive, setImgActive] = useState(0);
  const flatListRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextSlide = (imgActive + 1) % images.length;
      setImgActive(nextSlide);
      flatListRef.current.scrollToIndex({ index: nextSlide, animated: true });
    }, 3000);

    return () => clearInterval(interval);
  }, [imgActive]);

  return (
    <FlatList
      ref={flatListRef}
      data={images}
      keyExtractor={(item) => item.key.toString()}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      pagingEnabled
      horizontal
      style={styles.wrap}
    />
  );
}

const styles = StyleSheet.create({
  wrap: {
    width: '100%',
    height: '100%',
  },
});
