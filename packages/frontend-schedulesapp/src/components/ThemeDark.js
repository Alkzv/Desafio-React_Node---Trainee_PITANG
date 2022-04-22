import { ActionIcon, useMantineColorScheme, ThemeIcon,} from '@mantine/core';
import { Sun, MoonStars } from 'tabler-icons-react';

const ThemeDark = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <ActionIcon
      variant="outline"
      color={dark ? 'yellow' : 'blue'}
      onClick={() => toggleColorScheme()}
      title="Toggle color scheme"
    >
      {dark ? <ThemeIcon size="lg" variant="gradient" gradient={{ from: '#ed6ea0', to: 'red', deg: 35 }}><Sun size={20} /></ThemeIcon> : <ThemeIcon size="lg" variant="gradient" gradient={{ from: '#ed6ea0', to: 'red', deg: 35 }}><MoonStars size={20} /></ThemeIcon>}
    </ActionIcon>
 
  );
}

export default ThemeDark