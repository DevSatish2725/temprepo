import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import { user } from "./redux/slices/authSlice";

export default function Profile() {
  const userDetail = useSelector(user);
    const renderUI = () => {
        if (userDetail) {
            return (
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>

                    <Text style={{ fontSize: 24, fontWeight: "bold" }}>Welcome, {userDetail.name}!</Text>
                    <Text style={{ fontSize: 18, color: "gray" }}>{userDetail.email}</Text>
                </View>
            );
        } else {
            return (
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ fontSize: 18, color: "gray" }}>Login</Text>
                </View>
            );
       }
    }
  return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            {renderUI()}
    </View>
  );
}
