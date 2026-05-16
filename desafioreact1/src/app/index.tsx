import React, { useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function Index() {
  const [fitMode, setFitMode] = useState('cover');
  
  const fitOptions = [
    { name: 'cover', label: 'BoxFit.cover' },
    { name: 'contain', label: 'BoxFit.contain' },
    { name: 'stretch', label: 'BoxFit.fill' },
  ];
  
  const descriptions = {
    cover: '📌 cover: La imagen cubre TODO el contenedor.\n✓ Llena completamente\n✓ Mantiene aspecto\n✗ Se recortan bordes',
    contain: '📌 contain: La imagen se AJUSTA COMPLETAMENTE.\n✓ Se ve toda la imagen\n✓ Mantiene aspecto\n✗ Pueden sobrar espacios',
    stretch: '📌 fill: La imagen se ESTIRA.\n✓ Llena completamente\n✗ NO mantiene aspecto\n✗ Se distorsiona',
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Desafío 1: BoxFit en React Native</Text>
      
      {/* Contenedor de la imagen (200x200) */}
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/yu.jpg')}  // ← Ruta CORREGIDA
          style={[
            styles.image,
            {
              resizeMode: fitMode,
            },
          ]}
        />
      </View>
      
      <Text style={styles.fitName}>{fitMode.toUpperCase()}</Text>
      <Text style={styles.description}>{descriptions[fitMode]}</Text>
      
      {/* Botones para cambiar BoxFit */}
      <View style={styles.buttonContainer}>
        {fitOptions.map((option) => (
          <TouchableOpacity
            key={option.name}
            style={[
              styles.button,
              fitMode === option.name && styles.buttonActive,
            ]}
            onPress={() => setFitMode(option.name)}>
            <Text
              style={[
                styles.buttonText,
                fitMode === option.name && styles.buttonTextActive,
              ]}>
              {option.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      
      {/* Información adicional */}
      <View style={styles.infoBox}>
        <Text style={styles.infoText}>
          💡 Prueba: Cambia entre los 3 modos y observa cómo se comporta la imagen
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6200ee',
    marginBottom: 30,
  },
  imageContainer: {
    width: 200,
    height: 200,
    borderWidth: 2,
    borderColor: '#6200ee',
    borderRadius: 10,
    backgroundColor: '#e0e0e0',
    overflow: 'hidden',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  fitName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6200ee',
    marginTop: 10,
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    color: '#333',
    marginBottom: 30,
    lineHeight: 20,
  },
  buttonContainer: {
    gap: 10,
    width: '100%',
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#6200ee',
    alignItems: 'center',
  },
  buttonActive: {
    backgroundColor: '#6200ee',
  },
  buttonText: {
    color: '#6200ee',
    fontSize: 16,
    fontWeight: '600',
  },
  buttonTextActive: {
    color: '#fff',
  },
  infoBox: {
    marginTop: 30,
    padding: 15,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    width: '100%',
  },
  infoText: {
    fontSize: 12,
    color: '#333',
    textAlign: 'center',
  },
});