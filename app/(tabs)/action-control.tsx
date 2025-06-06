import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ActionControlScreen() {
  const ativarBarreiras = () => {
    Alert.alert('✅ Barreiras Ativadas', 'O sistema ativou as barreiras automaticamente.');
  };

  const enviarSMS = () => {
    Alert.alert('📤 SMS Enviado', 'Alerta de enchente enviado para os responsáveis.');
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.headerBox}>
        <MaterialCommunityIcons name="tools" size={28} color="#003366" />
        <Text style={styles.title}>Ações de Controle</Text>
      </View>

      <Text style={styles.subtitle}>
        Execute ações preventivas e de emergência em tempo real para minimizar riscos à comunidade.
      </Text>

      <View style={styles.controlBox}>
        <TouchableOpacity style={styles.buttonBlue} onPress={ativarBarreiras}>
          <Ionicons name="shield-checkmark-outline" size={20} color="#fff" />
          <Text style={styles.buttonText}>ATIVAR BARREIRAS</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonGreen} onPress={enviarSMS}>
          <Ionicons name="chatbox-ellipses-outline" size={20} color="#fff" />
          <Text style={styles.buttonText}>ENVIAR ALERTA POR SMS</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.statusCard}>
        <Text style={styles.statusTitle}>Status Atual</Text>
        <Text style={styles.statusItem}>🔁 Última ação: Nenhuma ação executada ainda</Text>
        <Text style={styles.statusItem}>🟢 Sistema operacional normal</Text>
        <Text style={styles.statusItem}>📡 Comunicação com sensores ativa</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e9f0f8',
    flex: 1,
  },
  content: {
    padding: 20,
    gap: 20,
  },
  headerBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#003366',
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
  },
  controlBox: {
    gap: 12,
  },
  buttonBlue: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007bff',
    padding: 14,
    borderRadius: 8,
    justifyContent: 'center',
    gap: 8,
  },
  buttonGreen: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#28a745',
    padding: 14,
    borderRadius: 8,
    justifyContent: 'center',
    gap: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  statusCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    gap: 8,
  },
  statusTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 6,
    color: '#003366',
  },
  statusItem: {
    fontSize: 14,
    color: '#333',
  },
});
