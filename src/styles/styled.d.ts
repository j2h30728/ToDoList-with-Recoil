import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    bgColor: string;
    darkBgColor: string;
    textColor: string;
    accentColor: string;
    baseColor: string;
    ligthBaseColor: string;
    bgOverviewColor: string;
  }
}
