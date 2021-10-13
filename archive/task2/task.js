// n10Coefficients, n12Coefficients, n11Coefficients — контрольные суммы

/*
10-значный ИНН

1. Вычислить сумму произведений цифр ИНН (с 1-й по 9-ю) на следующие коэффициенты из n10Coefficients
(т.е. 2 * ИНН[1] + 4 * ИНН[2] + ...).
2. Вычислить остаток от деления полученной суммы на 11.
3. Сравнить младший разряд полученного остатка от деления с младшим разрядом ИНН. Если они равны, то ИНН верный.

12-значный ИНН

1. Вычислить 1-ю контрольную цифру:
  1.1. Вычислить сумму произведений цифр ИНН (с 1-й по 10-ю) на следующие коэффициенты из n11Coefficients
  (т.е. 7 * ИНН[1] + 2 * ИНН[2] + ...).
  1.2. Вычислить младший разряд остатка от деления полученной суммы на 11.
2. Вычислить 2-ю контрольную цифру:
  1.1. Вычислить сумму произведений цифр ИНН (с 1-й по 11-ю) на следующие коэффициенты из n12Coefficients
  (т.е. 3 * ИНН[1] + 7 * ИНН[2] + ...).
  1.2. Вычислить младший разряд остатка от деления полученной суммы на 11.
3. Сравнить 1-ю контрольную цифру с 11-й цифрой ИНН и сравнить 2-ю контрольную цифру с 12-й цифрой ИНН.
Если они равны, то ИНН верный.

*/



function checkDigit(inn, coefficients) {
  let n = 0;
  for (let i in coefficients) {
    n += coefficients[i] * Number(inn[i]);
  }
  return parseInt((n % 11 % 10).toString(), 10);
}

function isValidNumber(value) {
  const regExp = /^\d+?$/;
  return regExp.test(value);
}

function innValidate(inn) {
  const n10Coefficients = [2, 4, 10, 3, 5, 9, 4, 6, 8]
  const n12Coefficients = [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8]
  const n11Coefficients = [7, 2, 4, 10, 3, 5, 9, 4, 6, 8]

  const currentInn = inn.replace(/\s+/g, '')

  if (!isValidNumber(currentInn)) {
    return 'ИНН должен содержать только цифры!';
  }
  if ([10, 12].indexOf(currentInn.length) === -1) {
    return 'ИНН может состоять только из 10 или из 12 цифр!'
  }
  if (currentInn === '0000000000' || currentInn === '000000000000') {
    return 'ИНН не может содержать только нули!'
  }
  if (currentInn.length === 10) {
    var n10 = checkDigit(currentInn, n10Coefficients);
    if (n10 !== parseInt(currentInn[9], 10)) {
      return 'Не сошлись контрольные суммы для ИНН длиной в 10 символов'
    }
    return 'Корректный ИНН'
  }
  if (currentInn.length === 12) {
    var n11 = checkDigit(currentInn, n11Coefficients);
    var n12 = checkDigit(currentInn, n12Coefficients);
    if ((n11 !== parseInt(currentInn[10], 10)) || (n12 !== parseInt(currentInn[11], 10))) {
      return 'Не сошлись контрольные суммы для ИНН длиной в 12 символов'
    }
    return 'Корректный ИНН'
  }
  return 'Корректный ИНН'
}
