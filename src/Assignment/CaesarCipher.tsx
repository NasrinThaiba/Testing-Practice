type CaesarProps = {
    text : string;
    shift :  number;
}

function shiftChar(char: string, shift: number): string {
  const code = char.charCodeAt(0);

  if (code >= 97 && code <= 122) {
    return String.fromCharCode(
      ((code - 97 + shift) % 26) + 97
    );
  }

  if (code >= 65 && code <= 90) {
    return String.fromCharCode(
      ((code - 65 + shift) % 26) + 65
    );
  }

  return char;
}

export default function CaesarCipher({text, shift}: CaesarProps) {
     return text
     .split("")
     .map(char => shiftChar(char, shift))
     .join("");
}