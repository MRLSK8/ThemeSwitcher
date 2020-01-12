import React, { useState } from 'react';

import TodoList from './components/ToDoList';
import ThemeSwitcher from './components/ThemeSwitcher/index';

import * as themes from './styles/themes/index';
import ThemeContext from './styles/themes/context';

import { ThemeProvider } from 'styled-components';

function App() {
  const [theme, setTheme] = useState(themes.dark);

  const toggleTheme = () => {
    setTheme(theme === themes.dark ? themes.light : themes.dark);
  };

  return (
    <>
      <ThemeContext.Provider value={theme}>
        <ThemeSwitcher toggleTheme={toggleTheme} />
        <ThemeContext.Consumer>
          {theme => (
            <ThemeProvider theme={theme}>
              <TodoList />
            </ThemeProvider>
          )}
        </ThemeContext.Consumer>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
