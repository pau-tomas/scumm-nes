import { useState } from 'react';
import Main from '../components/Main';
import MainHeader from '../components/MainHeader';
import ThemeSwitcher from '../components/ThemeSwitcher';
import PaletteSelector from '../components/PaletteSelector';
import { setColourTheme } from '../lib/colourThemeUtils';

import digitalPrimeFbxImg from '../assets/palettes/digital-prime-fbx.png';
import greyscaleImg from '../assets/palettes/greyscale.png';
import dmgImg from '../assets/palettes/dmg.png';

const themeOptions = [
  { value: 'dark', name: 'Dark' },
  { value: 'system', name: 'System', defaultOption: true },
  { value: 'light', name: 'Light' },
];

const paletteOptions = [
  {
    value: 'fbx',
    name: 'Digital Prime (FBX)',
    description: 'As accurate as it can get',
    defaultOption: true,
    img: digitalPrimeFbxImg,
  },
  {
    value: 'grey',
    name: 'Greyscale',
    description: 'No palette applied',
    img: greyscaleImg,
  },
  {
    value: 'dmg',
    name: 'DMG',
    description: 'Plays well with GB Studio',
    experimental: true,
    img: dmgImg,
  },
];

const SettingsContainer = () => {
  // Find the options set, or the default ones.
  const selectedThemeValue = localStorage.getItem('theme');
  const selectedTheme =
    themeOptions.find(({ value }) => value === selectedThemeValue) ||
    themeOptions.find(({ defaultOption }) => defaultOption);

  const selectedPaletteValue = localStorage.getItem('palette');
  const selectedPalette =
    paletteOptions.find(({ value }) => value === selectedPaletteValue) ||
    paletteOptions.find(({ defaultOption }) => defaultOption);

  const [theme, setTheme] = useState(selectedTheme);
  const [palette, setPalette] = useState(selectedPalette);

  // Keep the local storage and the DOM in sync with the state.
  const setThemeWrapper = (theme) => {
    setTheme(theme);

    if (theme.defaultOption) {
      localStorage.removeItem('theme');
      setColourTheme();
      return;
    }

    localStorage.setItem('theme', theme.value);
    setColourTheme(theme.value);
  };

  const setPaletteWrapper = (palette) => {
    setPalette(palette);

    if (palette.defaultOption) {
      localStorage.removeItem('palette');
      return;
    }

    localStorage.setItem('palette', palette.value);
  };

  return (
    <Main>
      <MainHeader title="Settings" />
      <ThemeSwitcher
        theme={theme}
        themeOptions={themeOptions}
        setTheme={setThemeWrapper}
      />
      <PaletteSelector
        palette={palette}
        paletteOptions={paletteOptions}
        setPalette={setPaletteWrapper}
      />
    </Main>
  );
};

export default SettingsContainer;