import Mybutton from "@/components/Mybutton";
import { useRouter } from "expo-router"; // Correct import from expo-router
import { View } from "react-native";

const Index = () => {
  const router = useRouter();  // Ensure no syntax errors here (remove the extra parentheses)
  
  const onContinue = () => {
    router.push("/(tabs)/login") // Use push or navigate depending on your expo-router version
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Mybutton title={"Continue"} onPress={onContinue} />
    </View>
  );
};

export default Index;
