import { dice_eval } from "dice_distribution"

export const distribution = (str: string) => {
  let raw = dice_eval(str) as Map<number, number>;
  return Array.from(raw).sort((a, b) => a[0] - b[0]);
}