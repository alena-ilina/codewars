/**
 * Функция проигрывания заранее подготовленного плейлиста.
 * (например, функция Play которая возвращает строку с именем песни,
 * которую будет проигрывать сейчас, функция Вперед).
 * С заранее заданным массивом песен и заранее
 * сделанной настройкой ( платный или бесплатный плейлист).
 *
 * Проверяться будут метода класса AudioPlayer
 */

class AudioPlayer {
  constructor({ playlist, isFreeVersion }) {
    /**
     * @param {Object[]} playlist
     * @param {string}   playlist[].type — тип песни free/paid/ads
     * @param {name}     playlist[].name — название песни
     */
    this.playlist = playlist;
    /**
     * @param {boolean} isFreeVersion
     */
    this.isFreeVersion = isFreeVersion;
    /**
     * @param {Object}  activeSong
     * @param {string}  activeSong.type — тип песни free/paid/ads
     * @param {name}    activeSong.name — название песни
     */
    this.activeSong = undefined;
  }

  // Запускает проигрывание, выводит название песни
  play() { }

  // Останавливает проигрывание
  stop() { }

  // Запускает следующую песню
  next() { }
}