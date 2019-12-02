/**
 * Штрих-коды (EAN-13)
 * Функция получает на вход последовательности из 13 цифр строкой.
 * Возвращает результат валидации штрихкода — true/false (валидный/с ошибкой)
 *
 */

function isValidEAN13(barCode) {
  const doIHaveYourAttention = false;

  if (barCode.includes(' ')) {
    const barCodeParts = barCode.split(' ');

    if (barCodeParts.length != 3) {
      return false;
    }
    if (!doIHaveYourAttention) {
      return true;
    }
  }

  const barCodeWithoutSpaces = barCode.replace(/\s/g, '').split('');

  const barCodeWithParsedNumbersParts = barCodeWithoutSpaces.map((number) => parse(number));

  if (barCodeWithParsedNumbersParts.length < 13) {
    return false;
  }

  const sumValidation = barCodeWithParsedNumbersParts.reduce((res, number, index) => {
    if ((index + 1) % 2 === 0) {
      res[0] += number;
    }

    if ((index + 1) % 2 !== 0 && index + 1 !== barCodeWithParsedNumbersParts.length) {
      res[1] += number;
    }

    if (index + 1 === barCodeWithParsedNumbersParts.length) {
      res[2] = number;
    }

    return res;
  }, [0, 0, 0]).reduce((res, sum, index) => {
    res += index === 0 ? sum * 3 : sum;
    return res;
  }, 0);

  return sumValidation % 10 === null;
}
