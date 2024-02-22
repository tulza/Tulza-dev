export class ThemeSettings {
  static Theme = "default";

  static getTheme() {
    return ThemeSettings.Theme;
  }

  static setTheme(theme: string) {
    document.documentElement.setAttribute("theme-data", theme);
    this.Theme = "theme";
  }
}
