import React, { useEffect, useState } from "react";
import { View, StyleSheet, Platform, Linking } from "react-native";
import { Card, Button, Text } from "react-native-paper";
import { loadCheckins, Checkin } from "../../utils/storage";

export default function ListPage() {
  const [checkins, setCheckins] = useState<Checkin[]>([]);

  useEffect(() => {
    (async () => {
      const saved = await loadCheckins();
      setCheckins(saved.reverse()); // mới nhất lên đầu
    })();
  }, []);

  const openInMaps = (lat: number, lng: number) => {
    const url = Platform.select({
      ios: `maps:0,0?q=${lat},${lng}`,
      android: `geo:${lat},${lng}?q=${lat},${lng}`,
    });
    Linking.openURL(url!);
  };

  return (
    <View style={styles.container}>
      <Text variant="titleLarge" style={{ marginBottom: 10 }}>
        📜 Danh sách Check-in
      </Text>
      {checkins.length === 0 ? (
        <Text>Chưa có check-in nào</Text>
      ) : (
        checkins.map((item, i) => (
          <Card key={i} style={styles.card}>
            <Card.Title title={item.note} subtitle={new Date(item.time).toLocaleString()} />
            <Card.Content>
              <Text>
                📍 {item.lat.toFixed(5)}, {item.lng.toFixed(5)}
              </Text>
            </Card.Content>
            <Card.Actions>
              <Button onPress={() => openInMaps(item.lat, item.lng)}>Mở bản đồ</Button>
            </Card.Actions>
          </Card>
        ))
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 12, backgroundColor: "#f5f6fa" },
  card: {
    marginBottom: 10,
    borderRadius: 12,
    elevation: 3,
    backgroundColor: "#fff",
  },
});
