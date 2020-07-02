import React, { useRef } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import ImageInput from './ImageInput';

const ImageInputList = ({ imageUris = [], onRemoveImage, onAddImage }) => {
  const scrollView = useRef();

  return (
    <View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        ref={scrollView}
        onContentSizeChange={() => scrollView.current.scrollToEnd}>
        <View style={styles.container}>
          {imageUris.map((uri) => (
            <View key={uri} style={styles.image}>
              <ImageInput
                imageUri={uri}
                onChangeImage={() => onRemoveImage(uri)}
              />
            </View>
          ))}
          <ImageInput onChangeImage={(uri) => onAddImage(uri)} />
        </View>
      </ScrollView>
    </View>
  );
};

export default ImageInputList;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  image: {
    marginRight: 10,
  },
});
