export function cleanName(string: string) {
  // Remove everything that is not: unicode character,
  // space( ), comma(,), dot(.), apostrophe(') and dash(-)
  return string.replace(/[^\p{L}\p{N} ,.'-]/gu, '');
}

export function cleanNumber(value: string) {
  // Remove everything that is not number
  return value.replace(/[^0-9]/g, '');
}

export function upperCaseFirstLetter(string?: string) {
  if (!string) return '';
  return cleanName(string).charAt(0).toUpperCase() + cleanName(string).toLowerCase().slice(1);
}

export function upperCaseEveryFirstLetter(string?: string) {
  if (!string) return '';
  return cleanName(string)
    .toLowerCase()
    .split(/[\s-]+/) // split with either ' ' or '-'
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export const getNameFromEmail = (email: string) => {
  const name = email.split('@')[0];
  return upperCaseEveryFirstLetter(name.replace(/[-.+]/g, ' '));
};
