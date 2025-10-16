# 📍 Geo-Checkin — GPS-Based Check-in Tracker

**Geo-Checkin** is a modern cross-platform mobile app built with **Expo + React Native + TypeScript** that allows users to **check in their current GPS location**, save notes, and view all visited places on an interactive map.

Each check-in is stored locally using AsyncStorage and displayed as a marker on the map.  
Users can tap any marker to view details or open Google Maps for navigation.

---

## ✨ Features

- 🌍 **Check-in with GPS** — capture your current latitude & longitude with one tap  
- 📝 **Add custom notes** to each check-in (e.g., “Cà phê sáng ở quán A”, “Tham quan công viên B”)  
- 🗺 **Map View** — visualize all saved locations with interactive markers  
- 🧭 **Open in Google Maps / Apple Maps** directly from a marker  
- 💾 **Offline-first** — stores all check-ins locally using `@react-native-async-storage/async-storage`  
- 🧩 **Tabbed Navigation UI** — 3 clean sections:
  - **Check-in:** add a new location
  - **Map:** see all check-ins
  - **List:** view all records with date/time
- 🎨 **Beautiful modern UI** — React Native Paper + Material icons + gradient tab bar

---

## 🛠 Tech Stack

| Layer | Technology |
|--------|-------------|
| Framework | **Expo (React Native + TypeScript)** |
| UI Library | `react-native-paper`, `expo-linear-gradient` |
| Map | `react-native-maps` |
| Location | `expo-location` |
| Storage | `@react-native-async-storage/async-storage` |
| Navigation | Expo Router (Bottom Tabs) |

---

## ⚙️ Setup and Run Locally

### 1️⃣ Install dependencies
```bash
npm install
```


## Demo
# Check-in Form
![alt text](image.png)
# Map View
![alt text](image.png)
![alt text](image.png)
# List check-ins
![alt text](image.png)