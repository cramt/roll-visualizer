import { chatBox } from "./chat_box"

export const hookTrigger = (func: () => void) => {
  Hooks.once("ready", () => {
    chatBox().addEventListener("keyup", e => {
      if (e.key == "F2") {
        func()
      }
    })
  })
}