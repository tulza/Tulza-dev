export class ThemeManager {
  static Theme = 'default';
  static getTheme() {
    return ThemeManager.Theme;
  }

  static setTheme(theme: string) {
    document.documentElement.setAttribute('theme-data', theme.toLowerCase());
    localStorage.setItem('theme', theme);
    this.Theme = theme.toLowerCase();
  }

  static getSavedTheme() {
    return localStorage.getItem('theme');
  }
}
