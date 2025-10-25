import { Tabs } from "expo-router";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function TabsLayout() {
    return (
        <Tabs 
            initialRouteName="home"
            screenOptions={{ 
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#032648',
                    borderTopColor: '#333333',
                    borderTopWidth: 1,
                },
                tabBarActiveTintColor: '#ffffff',
                tabBarInactiveTintColor: '#666666',
            }}>
            <Tabs.Screen 
                name="chart" 
                options={{ 
                    title: 'Gráfico', 
                    tabBarIcon:({color}) => <MaterialIcons name="bar-chart" color={color} size={24} />,
                }}/>
            <Tabs.Screen name="home" options={{ title: 'Alarme', tabBarIcon:({color}) => <MaterialIcons name="alarm" color={color} size={24} /> }}/>
            <Tabs.Screen name="settings" options={{ title: 'Configurações', tabBarIcon:({color}) => <MaterialIcons name="settings" color={color} size={24} /> }}/>
        </Tabs>
    )
}