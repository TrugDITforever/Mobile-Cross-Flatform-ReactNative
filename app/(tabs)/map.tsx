import React, { useEffect, useState } from "react";
import { View, Platform, Linking, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { loadCheckins, Checkin } from "../../utils/storage";
import { Text } from "react-native-paper";

export default function MapPage() {
  const [location, setLocation] = useState<Location.LocationObjectCoords | null>(null);
  const [checkins, setCheckins] = useState<Checkin[]>([]);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") return;
      const loc = await Location.getCurrentPositionAsync({});
      setLocation(loc.coords);
      const saved = await loadCheckins();
      setCheckins(saved);
    })();
  }, []);

  const openInMaps = (lat: number, lng: number) => {
    const url = Platform.select({
      ios: `maps:0,0?q=${lat},${lng}`,
      android: `geo:${lat},${lng}?q=${lat},${lng}`,
    });
    Linking.openURL(url!);
  };

  if (Platform.OS === "web")
    return (
      <View style={styles.center}>
        <Text>🧭 Bản đồ không hỗ trợ trên web.</Text>
      </View>
    );

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={{
          latitude: location?.latitude || 16.047079,
          longitude: location?.longitude || 108.20623,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        showsUserLocation
      >
        {checkins.map((c, i) => (
          <Marker
            key={i}
            coordinate={{ latitude: c.lat, longitude: c.lng }}
            title={c.note}
            description={new Date(c.time).toLocaleString()}
            onCalloutPress={() => openInMaps(c.lat, c.lng)}
          />
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
});
