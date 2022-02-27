import { hookTrigger } from "./hook";
import { chatBox } from "./chat_box";
import { validate } from "./validate";
import { distribution } from "./distribution";
import { distribution_dialog } from "./distribution_dialog";

hookTrigger(() => {
  const value = validate(chatBox().value)
  if (!value) {
    return
  }
  const dist = distribution(value)
  distribution_dialog(value, dist)
})
export const PackageName = "roll-visualizer"