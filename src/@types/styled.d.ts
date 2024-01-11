import 'styled-components';
import theme from '../theme';

declare module 'styled-compontents'{
    type ThemeType = typeof theme;

    export interface DefaulTheme extends ThemeType{ }
}