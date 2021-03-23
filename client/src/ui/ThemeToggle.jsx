import React, { useState } from 'react';
import { ReactComponent as Sun } from '../assets/sun.svg';
import { connect } from 'react-redux';

import useDarkMode from '../hooks/useTheme';

const ThemeToggle = ({ selectedTheme }) => {
  const [colorTheme, setTheme] = useDarkMode();
  const [moon, setMoon] = useState(false);

  return (
    <Sun
      className={`w-6 h-6 float-right ml-2 ${
        moon ? 'dark' : null
      } cursor-pointer`}
      id='sun'
      onClick={() => {
        setTheme(colorTheme);
        setMoon(!moon);
      }}
    />
  );
};

const mapStateToProps = (state) => ({
  selectedTheme: state.selectedTheme,
});

export default connect(mapStateToProps)(ThemeToggle);
