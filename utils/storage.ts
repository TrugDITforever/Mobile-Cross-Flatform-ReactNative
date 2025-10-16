import AsyncStorage from "@react-native-async-storage/async-storage";

export interface Checkin {
  lat: number;
  lng: number;
  note: string;
  time: string;
}

export const saveCheckins = async (checkins: Checkin[]) => {
  await AsyncStorage.setItem("checkins", JSON.stringify(checkins));
};

export const loadCheckins = async (): Promise<Checkin[]> => {
  const data = await AsyncStorage.getItem("checkins");
  return data ? JSON.parse(data) : [];
};
