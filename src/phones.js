export default function getPhoneCorrectForm(number) {
  const formatedNumber = number.replaceAll(/[+()-\s]+/g, '');
  if (formatedNumber.length === 12) {
    return `+${formatedNumber}`;
  }
  return `+7${formatedNumber.slice(1)}`;
}
