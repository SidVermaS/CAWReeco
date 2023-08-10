const ButtonTypes = {
  PRIMARY: "PRIMARY",
  SECONDARY: "SECONDARY",
  TERTIARY: "TERTIARY",
};
type ButtonType = keyof typeof ButtonTypes;
const TextTypes = {
  BOLD1: "BOLD1",
  BOLD2: "BOLD2",
  BOLD3: "BOLD3",
  BOLD_INFO1: "BOLD_INFO1",
  NORMAL_TEXT1: "NORMAL_TEXT1",
  NORMAL_TEXT2:'NORMAL_TEXT2',
  NORMAL_TEXT3:'NORMAL_TEXT3'
};
type TextType = keyof typeof TextTypes;

export type { ButtonType, TextType };
export { ButtonTypes, TextTypes };
