import { GlobalTheme } from "../styles/globalTheme";

declare module "styled-components" {
  export interface DefaultTheme extends GlobalTheme {}
}
