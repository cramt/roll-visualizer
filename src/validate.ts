const regex = /^\/r(?:oll)? (.*)$/

export const validate = (str: string) => {
  const regex_match = regex.exec(str)
  if (!regex_match) {
    return null
  }
  return regex_match[1]
}