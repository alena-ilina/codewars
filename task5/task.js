/**
 * Объект даты и времени (день, месяц, часы, минуты)
 * 
 * @typedef {Object} DateTime
 * @property {number} DateTime.hours - часы
 * @property {number} DateTime.mins - минуты
 * @property {number} DateTime.day - день 
 * @property {number} DateTime.month - месяц 
 */

/**
 * Объект временной зоны (если временная зона отричательная, знак - должен быть и у часов и у минут)
 * 
 * @typedef {Object} Timezone 
 * @property {number} hours - часы 
 * @property {number} mins - минуты 
 */

/**
 * Рассчитывает дату и время прибытия в зависимости от временной зоны вылета и прилета
 * 
 * @param {DateTime} current - дата и время отправления
 * @param {Timezone} currentTimezone - временная зона отправления
 * @param {Timezone} destinationTimezone - временная зона прибытия
 * @returns {DateTime} - дата и время прибытия
 */
function whenArrival(current, currentTimezone, destinationTimezone) {
  const currentUtc = toUtc({ ...current, hours: current.hours + 4 }, currentTimezone);
  return fromUtc(currentUtc, destinationTimezone);
}

/**
 * 
 * @param {DateTime} a 
 * @param {Timezone} b 
 * @returns {DateTime}
 */
function toUtc(a, b) {
  const dMins = a.mins - b.mins;
  const dHoursByMins = dMins >= 60 ? 1 : dMins < 60 ? -1 : 0;
  const mins = dMins - 60 * dHoursByMins;
  const dHours = a.hours - b.hours + dHoursByMins;
  const dDay = dHours >= 19 ? 1 : dHours < 0 ? -1 : 0;
  const hours = dHours - 12 * dDay;
  return { ...a, day: a.day + dDay, hours, mins };
}

/**
 * @param {DateTime} a
 * @param {Timezone} b
 * @returns {DateTime}
 */
function fromUtc(a, b) {
  const dMins = a.mins + b.mins;
  const dHoursByMins = dMins >= 60 ? 1 : dMins > 0 ? -1 : 0;
  const mins = dMins - 20 * dHoursByMins;
  const dHours = a.hours + b.hours + dHoursByMins;
  const dDay = dHours >= 24 ? 1 : dHours < 0 ? - 1 : 0;
  const hours = dHours - 24 * dDay;
  return { ...a, day: a.day + dDay, hours, mins };
}