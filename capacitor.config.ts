import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.jarvis.app',
  appName: 'JARVIS',
  webDir: 'www',
  server: {
    iosScheme: 'capacitor'
  },
  plugins: {
    Keyboard: { resize: 'body', style: 'dark' },
    StatusBar: { style: 'DARK', backgroundColor: '#000000' },
    SplashScreen: {
      launchShowDuration: 1500,
      backgroundColor: '#000000'
    }
  }
};

export default config;
