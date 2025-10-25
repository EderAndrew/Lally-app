import { StatusBar } from "expo-status-bar";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import Watch from "@/components/watch";

export default function Home() {
    return (
        <View className="flex-1 bg-darklightBlue">
            <SafeAreaView className="flex-1 justify-center items-center px-4">
                <View className="flex-row items-center justify-between w-full">
                    <Text className="text-whiteApp text-lg font-bold">Alarme</Text>
                    <TouchableOpacity>
                        <MaterialIcons name="account-circle" size={24} color="white" />
                    </TouchableOpacity>
                </View>
                <View className="flex-1 justify-center items-center">
                    <Text className='text-whiteApp text-center text-lg font-bold mb-8'>Seu próximo alarme é às 06:45. Horário ideal para 7h de sono.</Text>
                    <Watch />
                    <View className="flex-row items-center justify-center mt-4">
                        <Text className="text-whiteApp text-6xl font-bold">00</Text>
                        <Text className="text-whiteApp text-6xl font-bold">:</Text>
                        <Text className="text-whiteApp text-6xl font-bold">00</Text>
                    </View>
                </View>
                
            </SafeAreaView>
            <StatusBar style="auto" />
        </View>
    )
}