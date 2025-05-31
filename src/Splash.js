import { useEffect } from "react";
import { View, StyleSheet, Animated } from "react-native";

const Splash = ({ navigation }) => {
  const fadeAnim = new Animated.Value(0); // For opacity
  const slideAnim = new Animated.Value(-50); // For sliding (start 50px above)
  useEffect(() => {
    // Run both animations in parallel
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0, // Slide to original position
        duration: 1500,
        useNativeDriver: true,
      }),
    ]).start();

    setTimeout(() => {
      navigation.navigate("Login");
    }, 3000);
  }, []);

  return (
    <View
      style={{
        backgroundColor: "#40ACFF",
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignSelf: "center",
      }}
    >
      <Animated.View
        style={{
          opacity: fadeAnim,
          transform: [{ translateY: slideAnim }], // Slide animation
        }}
      >
        <Animated.Text style={styles.text}>Cyber Shield</Animated.Text>
      </Animated.View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 60,
    justifyContent: "center",
    alignSelf: "center",
  },
});