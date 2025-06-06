import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

interface Estado {
  id: number;
  nome: string;
  sigla: string;
}

interface Cidade {
  id: number;
  nome: string;
  estadoSigla: string;
}

import estados from "../../assets/dados/estados.json";
import cidades from "../../assets/dados/cidades.json";

export default function MonitoringScreen() {
  const [dadosClimaticos, setDadosClimaticos] = useState<any>(null);
  const [carregando, setCarregando] = useState(false);

  const [estadosAbertos, setEstadosAbertos] = useState(false);
  const [estadoSelecionado, setEstadoSelecionado] = useState<string | null>(
    null
  );
  const [listaEstados, setListaEstados] = useState(
    estados.map((estado: Estado) => ({
      label: estado.nome,
      value: estado.sigla,
    }))
  );

  const [cidadesAbertas, setCidadesAbertas] = useState(false);
  const [cidadeSelecionada, setCidadeSelecionada] = useState<string | null>(
    null
  );
  const [listaCidades, setListaCidades] = useState<
    { label: string; value: string }[]
  >([]);

  useEffect(() => {
    if (estadoSelecionado) {
      const cidadesFiltradas = (cidades as Cidade[])
        .filter((c) => c.estadoSigla === estadoSelecionado)
        .map((c) => ({
          label: c.nome,
          value: c.nome,
        }));
      setListaCidades(cidadesFiltradas);
    }
  }, [estadoSelecionado]);

  useEffect(() => {
    if (cidadeSelecionada) {
      setCarregando(true);
      fetch(
        `https://api.weatherapi.com/v1/current.json?key=ed36d9e6e48e41188f302212250506&q=${cidadeSelecionada},BR&lang=pt`
      )
        .then((res) => res.json())
        .then((data) => {
          setDadosClimaticos(data);
          setCarregando(false);
        })
        .catch((error) => {
          console.error("Erro ao obter dados do clima:", error);
          setCarregando(false);
        });
    }
  }, [cidadeSelecionada]);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.header}>🌤️ Monitoramento em Tempo Real</Text>

      <Text style={styles.label}>Selecione um Estado:</Text>
      <Picker
        selectedValue={estadoSelecionado}
        onValueChange={(value) => setEstadoSelecionado(value)}
      >
        <Picker.Item label="Selecione um estado..." value={null} />
        {listaEstados.map((estado) => (
          <Picker.Item
            key={estado.value}
            label={estado.label}
            value={estado.value}
          />
        ))}
      </Picker>

      {estadoSelecionado && (
        <>
          <Text style={styles.label}>Selecione uma Cidade:</Text>
          <Picker
            selectedValue={cidadeSelecionada}
            onValueChange={(value) => setCidadeSelecionada(value)}
          >
            <Picker.Item label="Selecione uma cidade..." value={null} />
            {listaCidades.map((cidade) => (
              <Picker.Item
                key={cidade.value}
                label={cidade.label}
                value={cidade.value}
              />
            ))}
          </Picker>
        </>
      )}

      {carregando && (
        <ActivityIndicator
          size="large"
          color="#003366"
          style={{ marginTop: 20 }}
        />
      )}

      {dadosClimaticos && (
        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            📍 Local: {dadosClimaticos.location.name},{" "}
            {dadosClimaticos.location.region}
          </Text>
          <Text>🌡️ Temperatura: {dadosClimaticos.current.temp_c}°C</Text>
          <Text>💧 Umidade: {dadosClimaticos.current.humidity}%</Text>
          <Text>🌧️ Precipitação: {dadosClimaticos.current.precip_mm} mm</Text>
          <Text>💨 Vento: {dadosClimaticos.current.wind_kph} km/h</Text>
          <Text>📝 Condição: {dadosClimaticos.current.condition.text}</Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eaf2fb",
    flex: 1,
  },
  content: {
    padding: 20,
    gap: 12,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#003366",
    marginBottom: 10,
    textAlign: "center",
  },
  label: {
    fontSize: 14,
    color: "#444",
    marginTop: 8,
  },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 10,
    elevation: 2,
    marginTop: 12,
  },
  cardTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 8,
  },
});