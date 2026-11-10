export default function json(data) {
  return new Promise((resolve) => {
    setTimeout(resolve, 500);
  }).then(() => {
    let value = '';

    for (const codeUnit of new Uint16Array(data)) {
      value += String.fromCharCode(codeUnit);
    }

    return value;
  });
}
