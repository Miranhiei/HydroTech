import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";

const news = [
  {
    date: "03/06/2025",
    title: "Reconstrução após enchentes no RS avança lentamente",
    source: "Agência Brasil",
    url: "https://agenciabrasil.ebc.com.br/geral/noticia/2025-05/um-ano-das-enchentes-no-rs-do-caos-lenta-reconstrucao",
  },
  {
    date: "10/04/2025",
    title: "Temporais causam alagamentos e quedas de energia em São Paulo",
    source: "UOL Notícias",
    url: "https://noticias.uol.com.br/cotidiano/ultimas-noticias/2025/04/10/defesa-civil-sp-destaca-riscos-de-chuvas-intensas-para-algumas-regioes.htm",
  },
  {
    date: "22/01/2025",
    title: "Enchentes causam estragos no Vale do Aço (MG)",
    source: "Wikipédia",
    url: "https://pt.wikipedia.org/wiki/Enchentes_e_deslizamentos_no_Vale_do_A%C3%A7o_em_2025",
  },
  {
    date: "15/03/2025",
    title: "SGB alerta para cheias em Manaus e região",
    source: "Serviço Geológico do Brasil",
    url: "https://www.sgb.gov.br/w/1-alerta-de-cheias-do-amazonas-2025-sgb-preve-inundacao-para-manaus-e-outras-cidades-amazonicas",
  },
];

export default function HistoryScreen() {
  const openLink = (url: string) => Linking.openURL(url);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>🕓 Histórico de Eventos</Text>

      {news.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.card}
          onPress={() => openLink(item.url)}
        >
          <Text style={styles.date}>{item.date}</Text>
          <Text style={styles.newsTitle}>{item.title}</Text>
          <Text style={styles.source}>📎 {item.source}</Text>
        </TouchableOpacity>
      ))}

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          🔍 Clique em uma notícia para acessar a fonte oficial.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e8f0fe",
    flex: 1,
  },
  content: {
    padding: 20,
    gap: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#003366",
    marginBottom: 10,
  },
  card: {
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 8,
    shadowColor: "#000",
    elevation: 1,
    gap: 6,
  },
  date: {
    fontWeight: "bold",
    fontSize: 13,
    color: "#003366",
  },
  newsTitle: {
    fontSize: 15,
    color: "#333",
  },
  source: {
    fontSize: 13,
    color: "#007AFF",
  },
  footer: {
    marginTop: 20,
    alignItems: "center",
  },
  footerText: {
    fontSize: 13,
    color: "#666",
  },
});