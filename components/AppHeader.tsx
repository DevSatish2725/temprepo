import { StyleSheet, Text, View , TouchableOpacity } from "react-native";
import { IconSymbol } from "./ui/icon-symbol";
import { useRouter } from "expo-router";

export default function AppHeader() {
    const router = useRouter();
  return (
    <View style={styles.container}>
          <Text style={styles.title}>My App</Text>
          <TouchableOpacity  style={styles.profileContainer} onPress={()=> router.push("/profile")}>
      <IconSymbol size={28} name="person.fill" color={"#ff"} />
          </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
        backgroundColor: "#75c8e1",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
  },
  title: {
    color: "#fff",
    fontSize: 18,
    },
  profileContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",

   boxShadow: '0px 4px 8px rgba(0,0,0,0.15)',
    // Elevation for Android
    elevation: 5,
  },
});
