import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";

export default function TelaLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = () => {
    if (email === "admin@hydrotech.com" && senha === "1234") {
      router.replace("/(tabs)/monitoring");
    } else {
      Alert.alert("Erro", "Credenciais inválidas");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao HydroTech</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#999"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#999"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8F0FF",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#003366",
    marginBottom: 30,
  },
  input: {
    width: "100%",
    maxWidth: 300,
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 16,
    borderColor: "#ccc",
    borderWidth: 1,
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginTop: 12,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
  },
});