import React, { useState } from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function Explore() {
  const [showLocal, setShowLocal] = useState(true);
  const [loading, setLoading] = useState(false);
  
  // Imagen local (assets) - RUTA CORREGIDA
  const localImage = require('../../assets/images/yu.jpg');  // ← Añadí "images/"
  
  // Imagen de internet
  const networkImage = 'https://picsum.photos/id/1015/400/300';

  const toggleImage = () => {
    setLoading(true);
    
    // Simular tiempo de carga
    setTimeout(() => {
      setShowLocal(!showLocal);
      setLoading(false);
    }, 500);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Desafío 2: Botón de Intercambio</Text>
      
      {/* Indicador de imagen actual */}
      <View style={[
        styles.badge,
        { backgroundColor: showLocal ? '#6200ee' : '#ff9800' }
      ]}>
        <Text style={styles.badgeText}>
          {showLocal ? '📁 IMAGEN LOCAL' : '🌐 IMAGEN DE INTERNET'}
        </Text>
      </View>
      
      {/* Contenedor de la imagen (200x200) */}
      <View style={styles.imageContainer}>
        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#6200ee" />
            <Text style={styles.loadingText}>Cargando...</Text>
          </View>
        ) : (
          <Image
            source={showLocal ? localImage : { uri: networkImage }}
            style={styles.image}
            resizeMode="cover"
          />
        )}
      </View>
      
      {/* Información actual */}
      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>Información Actual:</Text>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Fuente:</Text>
          <Text style={styles.infoValue}>
            {showLocal ? 'Assets local' : 'Internet (URL)'}
          </Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Tipo:</Text>
          <Text style={styles.infoValue}>
            {showLocal ? 'Imagen del proyecto' : 'Imagen online'}
          </Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Ventaja:</Text>
          <Text style={styles.infoValue}>
            {showLocal ? 'No necesita internet' : 'Fácil de actualizar'}
          </Text>
        </View>
      </View>
      
      {/* Botón de intercambio */}
      <TouchableOpacity
        style={styles.toggleButton}
        onPress={toggleImage}>
        <Text style={styles.buttonText}>
          {showLocal ? '🌐 Cambiar a Imagen de Internet' : '📁 Cambiar a Imagen Local'}
        </Text>
      </TouchableOpacity>
      
      {/* Tips */}
      <View style={styles.tipBox}>
        <Text style={styles.tipText}>
          💡 Presiona el botón para intercambiar entre imágenes
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6200ee',
    marginBottom: 30,
  },
  badge: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    marginBottom: 20,
  },
  badgeText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  imageContainer: {
    width: 200,
    height: 200,
    borderWidth: 3,
    borderColor: '#6200ee',
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 20,
    backgroundColor: '#e0e0e0',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
  },
  loadingText: {
    marginTop: 10,
    color: '#6200ee',
  },
  infoCard: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  infoTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#6200ee',
    marginBottom: 10,
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  infoLabel: {
    fontWeight: '600',
    width: 80,
    color: '#333',
  },
  infoValue: {
    color: '#666',
  },
  toggleButton: {
    backgroundColor: '#6200ee',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 30,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  tipBox: {
    backgroundColor: '#e0e0e0',
    padding: 12,
    borderRadius: 10,
    width: '100%',
  },
  tipText: {
    fontSize: 12,
    color: '#333',
    textAlign: 'center',
  },
});