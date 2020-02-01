/*
    Using color palette from Discord.
*/

import { createMuiTheme } from '@material-ui/core/styles';

class Theme {
    static colors = {
        primary: "#7289da",
        primaryLight: "#a5b9ff",
        primaryDark: "#3f5ca8",

        secondary: "#2c2f33",
        secondaryLight: "#55585c ",
        secondaryDark: "#00050c",

        light: "#dfe9ee",
        grayLight: "#99aab5",
        gray: "#697882",
        grayDark: "#191d20",
        dark: "#0d0f11",
    }

    static colorTheme = createMuiTheme({
        palette: {
            primary: {
                main: Theme.colors.primary,
                dark: Theme.colors.primaryDark,
                light: Theme.colors.primaryLight,
            },

            secondary: {
                main: Theme.colors.secondary,
                dark: Theme.colors.secondaryDark,
                light: Theme.colors.secondaryLight,
            }
        }
    });
}

export default Theme;
