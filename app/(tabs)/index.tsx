import React, { useEffect, useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import * as Location from "expo-location";
import { TextInput, Button, Card, Text } from "react-native-paper";
import { saveCheckins, loadCheckins, Checkin } from "../../utils/storage";

export default function CheckinPage() {
  const [location, setLocation] = useState<Location.LocationObjectCoords | null>(null);
  const [note, setNote] = useState("");
  const [checkins, setCheckins] = useState<Checkin[]>([]);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permission denied!", "Location access is required for check-in.");
        return;
      }
      const loc = await Location.getCurrentPositionAsync({});
      setLocation(loc.coords);
      const saved = await loadCheckins();
      setCheckins(saved);
    })();
  }, []);

  const handleCheckin = async () => {
    if (!location) return Alert.alert("No GPS location detected!", "Please try again.");
    const newCheckin: Checkin = {
      lat: location.latitude,
      lng: location.longitude,
      note: note || "No note provided",
      time: new Date().toISOString(),
    };
    const updated = [...checkins, newCheckin];
    await saveCheckins(updated);
    setCheckins(updated);
    setNote("");
    Alert.alert("✅ Check-in successful!");
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card} mode="elevated">
        <Card.Title title="📍 Check-in at Current Location" />
        <Card.Content>
          <TextInput
            label="Note"
            value={note}
            mode="outlined"
            onChangeText={setNote}
            style={{ marginBottom: 15, borderRadius: 15 }}
          />
          <Button mode="contained" onPress={handleCheckin}>
            Save Check-in
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#f5f6fa",
  },
  card: {
    borderRadius: 16,
    elevation: 4,
  },
});
