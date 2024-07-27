export class ThemeManager {
  static Theme = 'default';

  static getTheme() {
    return ThemeManager.Theme;
  }

  static setTheme(theme: string) {
    document.documentElement.setAttribute('theme-data', theme);
    this.Theme = 'theme';
  }
}