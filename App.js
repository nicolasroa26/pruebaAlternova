// @vendors
import React, {useState} from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

// @components
import Routes from './store/config/routes';

// @context
import themeContext from './src/Context/themeContext';


const App = () => {
  const [theme, setTheme] = useState(DefaultTheme)
  return (
      <themeContext.Provider value={{theme, setTheme}}>
        <NavigationContainer theme={theme}>
          <Routes/>
        </NavigationContainer>
      </themeContext.Provider>
  );
}

export default App;