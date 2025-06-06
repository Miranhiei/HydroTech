import { useRouter } from "expo-router";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Image
          source={require("../../assets/images/LogoHydro.png")}
          style={styles.logo}
        />

        <Text style={styles.title}>Bem-vindo ao HydroTech</Text>

        <Text style={styles.subtitle}>
          🌧️ Monitoramento Inteligente de Enchentes
        </Text>

        <Text style={styles.description}>
          Este aplicativo foi desenvolvido para oferecer suporte a comunidades
          vulneráveis a alagamentos urbanos. Utilizando sensores em tempo real e
          inteligência climática, o sistema monitora níveis de água, intensidade
          de chuvas e emite alertas preventivos.
        </Text>

        <Text style={styles.description}>
          A HydroTech integra sensores, microcontroladores, APIs meteorológicas
          e inteligência de dados para garantir respostas rápidas, eficazes e
          seguras.
        </Text>

        <Text style={styles.info}>
          🔒 Seus dados estão seguros.{" "}
          <Text style={{ fontWeight: "bold" }}>
            {" "}
            FIAP | Engenharia Mecatronica{" "}
          </Text>
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("../(tabs)/monitoring")}
        >
          <Text style={styles.buttonText}>Começar Monitoramento</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eaf0fa",
  },
  content: {
    alignItems: "center",
    padding: 24,
  },
  logo: {
    width: 100,
    height: 100,
    marginVertical: 16,
    resizeMode: "contain",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#003366",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#336699",
    fontWeight: "600",
    marginBottom: 20,
  },
  description: {
    textAlign: "justify",
    fontSize: 14,
    color: "#333",
    marginBottom: 16,
    lineHeight: 22,
  },
  info: {
    fontSize: 13,
    color: "#0077b6",
    marginTop: 10,
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#005f99",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    marginTop: 16,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});