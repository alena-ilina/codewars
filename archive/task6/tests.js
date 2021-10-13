store.testsCount = 18;

// 1. Кнопка назад включает предыдущий трек. Вызываем ее в середине прослушивания.
// 2. Кнопка назад НЕ включает ничего. Вызываем ее в начале прослушивания. Плейлист не на репите.
// 3. Кнопка назад включает последний трек. Вызываем ее в начале прослушивания. Плейлист на репите по плейлисту. (то есть зациклен).
// 4. Кнопка назад у последнего трека включает предпоследний трек.
// 5. Кнопка вперед у последнего трека НЕ включает ничего. Вызываем ее в конце прослушивания. Плейлист не на репите.
// 6. Кнопка вперед у последнего трека включает первый трек. Вызываем ее в конце прослушивания. Плейлист на репите по плейлисту. 
// 7. Кнопка вперед включает следующий трек. Вызываем ее в середине прослушивания.
// 8. Кнопка вперед включает текущий трек. Плейлист на репите текущей песни.
// 9. Кнопка назад включает текущий трек. Плейлист на репите текущей песни.
// 10. В бесплатном плейлисте через каждые 4 песни срабатывает реклама. Например, есть массив (песня1, песня2, песня3, песня4, песня5, песня6, песня7, песня8, песня9, песня10, песня11). Прослушивать будем так: (песня1, песня2, песня3, песня4, реклама, песня5, песня6, песня7, песня8, реклама, песня9, песня10, песня11).
// 11. В платном плейлисте нет рекламы как в бесплатной версии.
// 12. В бесплатном плейлисте даже если в плейлисте было больше 100 песен, даст проиграть только первые добавленные 100. При проигрывании 100 песни будет сообщение: "В бесплатной версии можно проигрывать только 100 песен в одном плейлисте. Купите платную версию, снимите ограничения!"
// 13. Бесплатный плейлист при проигрывании выдает ошибку: "Не могу распознать имя песни, купите платную версию", как только начинает проигрывать песню с русским названием.
// 14. Платный плейлист умеет проигрывать песню с русским названием.
// 15. Бесплатный плейлист умеет проигрывать песню с английским названием.
// 16. Платный плейлист умеет проигрывать песню с английским названием. 
// 17. Платный плейлист НЕ умеет проигрывать песню, если в ней только пробелы или имя "". Выдает ошибку: "Не могу воспроизвести песню". 
// 18. Бесплатный плейлист НЕ умеет проигрывать песню, если в ней только пробелы или имя "". Выдает ошибку: "Не могу воспроизвести песню". 
// 19. В бесплатной версии нельзя применить кнопку вперед, если сейчас играет реклама. 
// 20. В бесплатной версии нельзя применить кнопку назад, если сейчас играет реклама. 


describe('Тесты для AudioPlayer', () => {
  it('Нельзя запустить проигрывание (play) пустого плейлиста', () => {
    const mp = new AudioPlayer({ playlist: [], isFreeVersion: true });

    chai.expect(mp.play()).to.equal('Добавьте песен в плейлист!');
  });

  it('Play в бесплатном плеере запускает первую песню из плейлиста, если она бесплатная', () => {
    const mp = new AudioPlayer({
      playlist: [{
        type: 'free',
        name: 'Новогодняя'
      }], isFreeVersion: true
    });

    chai.expect(mp.play()).to.equal('Проигрывается песня "Новогодняя"');
    chai.expect(mp.activeSong).to.deep.equal({
      type: 'free',
      name: 'Новогодняя'
    });
  });

  it('Play в бесплатном плеере не запускает первую песню из плейлиста, если она платная', () => {
    const mp = new AudioPlayer({
      playlist: [{
        type: 'paid',
        name: 'Новогодняя'
      }], isFreeVersion: true
    });

    chai.expect(mp.play()).to.equal('Нельзя проигрывать платные песни в бесплатной версии');
    chai.expect(mp.activeSong).to.equal(undefined);
  });

  it('Play в платном плеере запускает первую песню из плейлиста, если она платная', () => {
    const mp = new AudioPlayer({
      playlist: [{
        type: 'paid',
        name: 'Новогодняя'
      }], isFreeVersion: false
    });

    chai.expect(mp.play()).to.equal('Проигрывается песня "Новогодняя"');
    chai.expect(mp.activeSong).to.deep.equal({
      type: 'paid',
      name: 'Новогодняя'
    });
  });

  it('Stop в плеере останавливает текущую песню', () => {
    const mp = new AudioPlayer({
      playlist: [{
        type: 'free',
        name: 'Новогодняя'
      }], isFreeVersion: false
    });

    mp.play();
    mp.stop();

    chai.expect(mp.activeSong).to.equal(undefined);
  });

  it('Stop в бесплатном плеере не может остановить рекламу', () => {
    const mp = new AudioPlayer({
      playlist: [{
        type: 'ads',
        name: 'Реклама'
      }], isFreeVersion: true
    });

    mp.play();
    chai.expect(mp.stop()).to.equal('Нельзя остановить рекламу в бесплатной версии плеера!')

    chai.expect(mp.activeSong).to.deep.equal({
      type: 'ads',
      name: 'Реклама'
    });
  });

  it('Stop в платном плеере может остановить рекламу', () => {
    const mp = new AudioPlayer({
      playlist: [{
        type: 'ads',
        name: 'Реклама'
      }], isFreeVersion: true
    });

    mp.play();
    chai.expect(mp.stop()).to.equal(undefined)
    chai.expect(mp.activeSong).to.equal(undefined);
  });

  it(`
    Next в плеере запускает первую песню в плейлисте, если плеере нет активной песни.`, () => {
    const mp = new AudioPlayer({
      playlist: [{
        type: 'free',
        name: 'Новогодняя'
      }], isFreeVersion: true
    });

    chai.expect(mp.next()).to.equal('Проигрывается песня "Мартовский кот"');
    chai.expect(mp.activeSong).to.deep.equal({
      type: 'free',
      name: 'Новогодняя'
    });
  });

  it(`
    Next в бесплатном плеере запускает следующую песню в плейлисте, если она бесплатная.
    В плеере уже играет песня.`, () => {
    const mp = new AudioPlayer({
      playlist: [{
        type: 'free',
        name: 'Новогодняя'
      }, {
        type: 'free',
        name: 'Мартовский кот'
      }], isFreeVersion: true
    });

    mp.play();

    chai.expect(mp.next()).to.equal('Проигрывается песня "Мартовский кот"');
    chai.expect(mp.activeSong).to.deep.equal({
      type: 'free',
      name: 'Мартовский кот'
    });
  });

  it(`
    Next в бесплатном плеере не запускает следующую песню в плейлисте, если она платная.
    В плеере уже играет песня.`, () => {
    const mp = new AudioPlayer({
      playlist: [{
        type: 'free',
        name: 'Новогодняя'
      }, {
        type: 'paid',
        name: 'Мартовский кот'
      }], isFreeVersion: true
    });

    mp.play();

    chai.expect(mp.play()).to.equal('Нельзя проигрывать платные песни в бесплатной версии');
    chai.expect(mp.activeSong).equal(undefined);
  });

  it(`
    Next в платной версии плеера запускает следующую песню в плейлисте, если она платная.
    В плеере уже играет песня.`, () => {
    const mp = new AudioPlayer({
      playlist: [{
        type: 'free',
        name: 'Новогодняя'
      }, {
        type: 'paid',
        name: 'Мартовский кот'
      }], isFreeVersion: false
    });

    mp.play();

    chai.expect(mp.next()).to.equal('Проигрывается песня "Мартовский кот"');
    chai.expect(mp.activeSong).to.deep.equal({
      type: 'paid',
      name: 'Мартовский кот'
    });
  });

  it(`Next в бесплатной версии плеера не может пропустить рекламу`, () => {
    const mp = new AudioPlayer({
      playlist: [{
        type: 'ads',
        name: 'Реклама'
      }, {
        type: 'free',
        name: 'Новогодняя'
      }], isFreeVersion: true
    });

    mp.play();

    chai.expect(mp.next()).to.equal('Нельзя пропустить рекламу в бесплатной версии плеера!')
    chai.expect(mp.activeSong).to.deep.equal({
      type: 'ads',
      name: 'Реклама'
    });
  });

  it(`Next в платной версии плеера может пропустить рекламу. Запускаем следующую песню`, () => {
    const mp = new AudioPlayer({
      playlist: [{
        type: 'ads',
        name: 'Реклама'
      }, {
        type: 'free',
        name: 'Новогодняя'
      }], isFreeVersion: true
    });

    mp.play();

    chai.expect(mp.next()).to.equal(undefined)
    chai.expect(mp.activeSong).to.deep.equal({
      type: 'free',
      name: 'Новогодняя'
    });
  });

  it(`
    Запускаем плеер кнопкой Play, нажимаем Next, нажимаем Stop, снова нажимаем Play —
    запускаем песню, котороя играла до Stop`, () => {
    const mp = new AudioPlayer({
      playlist: [{
        type: 'free',
        name: 'Новогодняя'
      }, {
        type: 'free',
        name: 'Мартовский кот'
      }], isFreeVersion: true
    });

    mp.play();
    mp.next();
    mp.stop();

    chai.expect(mp.activeSong).to.equal(undefined);
    chai.expect(mp.play()).to.equal('Проигрывается песня "Мартовский кот"');
    chai.expect(mp.activeSong).to.deep.equal({
      type: 'free',
      name: 'Мартовский кот'
    });
  });

  it(`В бесплатной версии плеера нельзя проиграть более 100 песен (реклама не является песней)`, () => {
    const playlist = [];
    for (let i = 0; i < 200; i++) {
      playlist.push({
        type: 'free',
        name: `${i}`
      });
    }
    const mp = new AudioPlayer({ playlist, isFreeVersion: true });

    for (let i = 0; i < 200; i++) {
      // Убираем рекламность
      mp.playlist.forEach((song, index) => {
        if (song.type === 'ads') {
          mp.playlist[index].type = 'free';
        }
      });
    }

    mp.play();

    for (let i = 1; i < 109; i++) {
      mp.next();
    }

    chai.expect(mp.next()).to.equal('Нельзя проигрывать более 100 песен в бесплатной версии');
    chai.expect(mp.activeSong).to.equal(undefined);
  });

  it(`В платной версии плеера можно проиграть более 100 песен`, () => {
    const playlist = [];
    for (let i = 0; i < 200; i++) {
      playlist.push({
        type: 'free',
        name: `${i}`
      });
    }
    const mp = new AudioPlayer({ playlist, isFreeVersion: false });
    mp.play();

    for (let i = 1; i < 100; i++) {
      mp.next();
    }

    chai.expect(mp.next()).to.equal('Проигрывается песня "100"');
    chai.expect(mp.activeSong).to.deep.equal({
      type: 'free',
      name: '100'
    });
  });

  it(`В бесплатной версии плеера после каждой 10 песни в плейлист вставляется реклама`, () => {
    const playlist = [];
    for (let i = 1; i <= 20; i++) {
      playlist.push({
        type: 'free',
        name: `${i}`
      });
    }

    const mp = new AudioPlayer({ playlist, isFreeVersion: true });
    chai.expect(mp.playlist.length).to.equal(22);
    chai.expect(mp.playlist[10]).to.deep.equal({
      type: 'ads',
      name: 'Реклама'
    });
    chai.expect(mp.playlist[21]).to.deep.equal({
      type: 'ads',
      name: 'Реклама'
    });
  });

  it(`В платной версии плеера нет рекламы в плейлисте`, () => {
    const playlist = [];
    for (let i = 1; i <= 20; i++) {
      playlist.push({
        type: 'free',
        name: `${i}`
      });
    }

    const mp = new AudioPlayer({ playlist, isFreeVersion: false });
    chai.expect(mp.playlist.length).to.equal(20);
    chai.expect(mp.playlist.find((song) => song.type === 'ads')).to.equal(undefined);
  });

  afterEach(function () {
    if (this.currentTest.state === 'passed') {
      store.successTestsCount += 1;
    }
  });

  after(runnerLogic);
});