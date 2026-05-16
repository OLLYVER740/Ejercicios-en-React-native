import React, { useState } from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  View,
} from 'react-native';

export default function HomeScreen() {
  const [loading, setLoading] = useState(true);

  return (
    <View style={styles.container}>

      {loading && (
        <ActivityIndicator size="large" color="blue" />
      )}

      <Image
        source={{
          uri: 'https://picsum.photos/1000/1000',
        }}
        style={styles.image}

        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: 300,
    height: 300,
    marginTop: 20,
  },
});