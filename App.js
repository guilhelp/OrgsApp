import { StatusBar, SafeAreaView, View} from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { useCallback } from "react";
import Cesta from './src/pages/Cesta';
import mock from './src/mocks/cesta';
import * as SplashScreen from "expo-splash-screen";


export default function App() {
  const [fontCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontCarregada) {
      // This tells the splash screen to hide immediately
      await SplashScreen.hideAsync();
    }
  }, [fontCarregada]);

  if (!fontCarregada) return null;

  return (
    <SafeAreaView style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <StatusBar/>
      <Cesta {...mock}/>
    </SafeAreaView>
  );
}


