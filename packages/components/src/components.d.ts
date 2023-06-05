import * as components from "./index";
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    ShButton: typeof components.Button;
    ShInput: typeof components.Input;
  }
}
export {};

