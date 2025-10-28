import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [loaded, error] = useFonts({
        "BagelFatOne": require("../../assets/fonts/BagelFatOne-Regular.ttf"),
    })

    useEffect(()=>{
        if (loaded || error){
            SplashScreen.hideAsync();
        }
    },[loaded, error])

    if (!loaded && !error){
        return null;
    }

    return (
        <Stack screenOptions={{ headerShown: false}}>
            <Stack.Screen name="(tabs)"/>
        </Stack>
    )
}