import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Dashboard } from '../screens/dashboard';
import { Register } from '../screens/register';

const { Navigator, Screen } = createBottomTabNavigator();

export const AppRoutes = () => {
  return (
    <Navigator>
      <Screen name="listagem" component={Dashboard} />
      <Screen name="cadastrar" component={Register} />
      <Screen name="resumo" component={Register} />
    </Navigator>
  )
}
