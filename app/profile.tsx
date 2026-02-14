import { Text, View } from "react-native";
import { Stack } from "expo-router";

export default function Profile() {
    return (
        <>
        <Stack.Screen options={{ title: "My Profile" }} />   {/* To change default page header name */}
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Profile</Text>
    </View>
      </>
  );
}
