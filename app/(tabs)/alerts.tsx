import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export default function AlertsScreen() {
  const openINMET = () => {
    Linking.openURL("https://alert-as.inmet.gov.br/");
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.headerBox}>
        <Ionicons name="cloud-outline" size={28} color="#003366" />
        <Text style={styles.title}>Alertas de Enchente</Text>
      </View>

      <Text style={styles.subtitle}>
        Acompanhe os alertas em tempo real para proteger sua região.
      </Text>

      <View style={[styles.alertBox, styles.severe]}>
        <Ionicons name="alert-circle-outline" size={22} color="#721c24" />
        <Text style={styles.alertText}>
          <Text style={styles.bold}>Zona Norte:</Text> Alerta de enchente
          iminente. Ações imediatas são recomendadas!
        </Text>
      </View>

      <View style={[styles.alertBox, styles.moderate]}>
        <Ionicons name="rainy-outline" size={22} color="#856404" />
        <Text style={styles.alertText}>
          <Text style={styles.bold}>Zona Leste:</Text> Volume de chuva acima de
          50mm/h. Risco de alagamento.
        </Text>
      </View>

      <View style={[styles.alertBox, styles.low]}>
        <Ionicons name="information-circle-outline" size={22} color="#0c5460" />
        <Text style={styles.alertText}>
          <Text style={styles.bold}>Zona Sul:</Text> Solo encharcado detectado.
          Monitore a área.
        </Text>
      </View>

      <TouchableOpacity style={styles.linkButton} onPress={openINMET}>
        <MaterialIcons name="open-in-new" size={16} color="#007AFF" />
        <Text style={styles.linkText}>
          Acesse o site do INMET para mais informações
        </Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          🔄 Última atualização: 04/06/2025 - 22:45
        </Text>
        <Text style={styles.footerText}>
          🔧 Dados fornecidos por INMET e Defesa Civil
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#edf4fc",
    flex: 1,
  },
  content: {
    padding: 20,
    gap: 16,
  },
  headerBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#003366",
  },
  subtitle: {
    fontSize: 14,
    color: "#555",
    marginBottom: 10,
  },
  alertBox: {
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
    borderRadius: 8,
    gap: 10,
  },
  alertText: {
    flex: 1,
    fontSize: 15,
    color: "#333",
  },
  bold: {
    fontWeight: "bold",
  },
  severe: {
    backgroundColor: "#f8d7da",
  },
  moderate: {
    backgroundColor: "#fff3cd",
  },
  low: {
    backgroundColor: "#d1ecf1",
  },
  linkButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    marginTop: 8,
  },
  linkText: {
    marginLeft: 6,
    color: "#007AFF",
    textDecorationLine: "underline",
    fontSize: 14,
  },
  footer: {
    marginTop: 20,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: "#d0d0d0",
    gap: 4,
  },
  footerText: {
    fontSize: 12,
    color: "#666",
  },
});