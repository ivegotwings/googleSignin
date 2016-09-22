export class GoogleSigninConfiguration{
    static BrandValue : Object = {
        GOOGLE: 'google',
        PLUS: 'google-plus'
    };

    /**
     * Enum height values.
     * @readonly
     * @enum {string}
     */
    static HeightValue : Object = {
      SHORT: 'short',
      STANDARD: 'standard',
      TALL: 'tall'
    };

    /**
     * Enum button label default values.
     * @readonly
     * @enum {string}
     */
    static LabelValue : Object = {
      STANDARD: 'Sign in',
      WIDE: 'Sign in with Google',
      WIDE_PLUS: 'Sign in with Google+'
    };

    /**
     * Enum theme values.
     * @readonly
     * @enum {string}
     */
    static ThemeValue : Object = {
      LIGHT: 'light',
      DARK: 'dark'
    };

    /**
     * Enum width values.
     * @readonly
     * @enum {string}
     */
    static WidthValue : Object = {
      ICON_ONLY: 'iconOnly',
      STANDARD: 'standard',
      WIDE: 'wide'
    };  
}

