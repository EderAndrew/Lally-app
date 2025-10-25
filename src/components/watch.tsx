import React, { useCallback, useEffect, useRef } from "react";
import { Text, View, Animated, Easing, StyleSheet } from "react-native";
import { useFocusEffect } from "expo-router";

export default function Watch() {
  const hourAnim = useRef(new Animated.Value(0)).current;
  const minuteAnim = useRef(new Animated.Value(0)).current;
  const secondAnim = useRef(new Animated.Value(0)).current;

  // função que configura a animação
  const startClockAnimation = () => {
    const now = new Date();
    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    

    // Ângulos iniciais:
    // Hora: 360° / 12 = 30° por hora (+ 0.5° por minuto)
    // Minuto: 360° / 60 = 6° por minuto (+ 0.1° por segundo)
    const startHourAngle = (hours + minutes / 60 + seconds / 3600) * 30;
    const startMinuteAngle = (minutes + seconds / 60) * 6;
    const startSecondAngle = seconds * 6; // 360/60

    // Define posições iniciais
    hourAnim.setValue(startHourAngle);
    minuteAnim.setValue(startMinuteAngle);
    secondAnim.setValue(startSecondAngle);

    // Loop contínuo — 12h para o ponteiro das horas
    Animated.loop(
      Animated.timing(hourAnim, {
        toValue: startHourAngle + 360,
        duration: 12 * 60 * 60 * 1000, // 12 horas
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();

    // Loop contínuo — 1h para o ponteiro dos minutos
    Animated.loop(
      Animated.timing(minuteAnim, {
        toValue: startMinuteAngle + 360,
        duration: 60 * 60 * 1000, // 1 hora
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();

    Animated.loop(
      Animated.timing(secondAnim, {
        toValue: startSecondAngle + 360,
        duration: 60 * 1000, // 1 minuto
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  };

  useEffect(() => {
    startClockAnimation();
  }, []);

  // recalcula toda vez que a tela volta ao foco
  useFocusEffect(
    useCallback(() => {
      startClockAnimation();
    }, [])
  );
  // Interpolações
  const hourRotation = hourAnim.interpolate({
    inputRange: [0, 360],
    outputRange: ["0deg", "360deg"],
  });

  // Converte o valor numérico (0–360) em graus CSS
  const minuteRotation = minuteAnim.interpolate({
    inputRange: [0, 360],
    outputRange: ["0deg", "360deg"],
  });

  const secondRotation = secondAnim.interpolate({
    inputRange: [0, 360],
    outputRange: ["0deg", "360deg"],
  });

  // Tamanhos dos ponteiros
  const HOUR_HEIGHT = 50;
  const MINUTE_HEIGHT = 75;
  const SECOND_HEIGHT = 85;

  // A transformação faz o ponteiro girar com a **base presa no centro**
  // TranslateY antes e depois da rotação muda o pivô de rotação
  const hourTransform = [
    { translateY: HOUR_HEIGHT / 2 },
    { rotate: hourRotation },
    { translateY: -HOUR_HEIGHT / 2 },
  ];

  const minuteTransform = [
    { translateY: MINUTE_HEIGHT / 2 },
    { rotate: minuteRotation },
    { translateY: -MINUTE_HEIGHT / 2 },
  ];

  const secondTransform = [
    { translateY: SECOND_HEIGHT / 2 },
    { rotate: secondRotation },
    { translateY: -SECOND_HEIGHT / 2 },
  ];

  return (
    <View style={styles.watchContainer}>
        {/* Ponteiro das horas */}
        <Animated.View
            style={[
            styles.pointer,
            styles.hourPointer,
            { height: HOUR_HEIGHT, transform: hourTransform },
            ]}
        />

        {/* Ponteiro dos minutos */}
        <Animated.View
            style={[
            styles.pointer,
            styles.minutePointer,
            { height: MINUTE_HEIGHT, transform: minuteTransform },
            ]}
        />

        {/* Ponteiro dos segundos */}
        <Animated.View
            style={[
            styles.pointer,
            styles.secondPointer,
            { height: SECOND_HEIGHT, transform: secondTransform },
            ]}
        />

        {/* Centro */}
        <View style={styles.centerDot} />
    </View>
  );
}

const styles = StyleSheet.create({
  watchContainer: {
    width: 200,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000",
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#333333",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  pointer: {
    position: "absolute",
    bottom: "50%",
    borderRadius: 2,
  },
  hourPointer: {
    width: 3,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  minutePointer: {
    width: 1.5,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  secondPointer: {
    width: 0.8,
    backgroundColor: "#ff4444",
    shadowColor: "#ff4444",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 3,
  },
  centerDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#ffffff",
    position: "absolute",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
  },
});


