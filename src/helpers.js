import { chars } from "./config";

export const getCharWeight = char => {
  const _char = chars.find(character => character.value === char);

  if (!_char) {
    return 0;
  }

  return _char.weight;
};
