import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import { Dashboard } from '../screens/dashboard';
import { Register } from '../screens/register';

const { Navigator, Screen } = createBottomTabNavigator();

export const AppRoutes = () => {
  const theme = useTheme();

  return (
    <Navigator screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: theme.colors.primary,
      tabBarLabelPosition: 'beside-icon',
      tabBarStyle: {
        height: 65
      }
    }} >

      <Screen 
        name="Transações"
        component={Dashboard}
        options={{
          tabBarIcon: (({ size, color }) => 
            <MaterialIcons 
              name="format-list-bulleted"
              size={size}
              color={color}
            />
          )
        }}
      />

      <Screen 
        name="Lançamentos" 
        component={Register}
        options={{
          tabBarIcon: (({ size, color }) =>
            <MaterialIcons 
              name="attach-money"
              size={size}
              color={color}
            />
          )
        }}
      />
      
      <Screen 
        name="Métricas"
        component={Register}
        options={{
          tabBarIcon: (({size, color}) =>
            <MaterialIcons
              name="pie-chart"
              size={size}
              color={color}
            />
          )
        }}
      />
    </Navigator>
  )
}
