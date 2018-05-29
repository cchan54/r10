import { AppRegistry } from "react-native";
import App from "./js/App";
import { YellowBox } from "react-native";

YellowBox.ignoreWarnings([
  "Warning: isMounted(...) is deprecated",
  "Module RCTImageLoader"
]);

AppRegistry.registerComponent("r10", () => App);
