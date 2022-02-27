let cache: HTMLTextAreaElement | null = null

export const chatBox = () => {
  if (!cache) {
    cache = document.getElementById("chat-message")! as HTMLTextAreaElement
  }
  return cache
}