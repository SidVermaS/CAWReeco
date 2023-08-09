const ButtonTypes = {
  PRIMARY: 'PRIMARY',
  SECONDARY: 'SECONDARY',
};
type ButtonType=keyof typeof  ButtonTypes
const TextTypes = {
  Bold1: 'Bold1',
  Bold2: 'Bold2',
  BoldInfo1: "BoldInfo1",  
};
type TextType=keyof typeof  TextTypes

export type {ButtonType, TextType };
export {ButtonTypes, TextTypes };