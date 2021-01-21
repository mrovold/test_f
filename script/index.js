$('.content').empty();

const packages = [
{
   package__enabled: 'Подключено',
   package__img: 'source/img/packages/package1.svg',
   package__number: 'Пакет №1',
   package__name: '«ФЕДЕРАЛЬНЫЙ»',
   package__prom: 'Птицеводческая промышленность',
   package__staff: 'Приволжский ФО РФ',
},
{
   package__enabled: 'Отключено',
   package__img: 'source/img/packages/package10.svg',
   package__number: 'Пакет №10',
   package__name: '«ПРОФЕССИОНАЛЬНЫЙ»',
   package__prom: 'Птицеводческая промышленность',
   package__staff: 'Яйцо Россия',
},
{
   package__enabled: 'Тест',
   package__img: 'source/img/packages/package11.svg',
   package__number: 'Пакет №11',
   package__name: '«ПРОФЕССИОНАЛЬНЫЙ»',
   package__prom: 'Птицеводческая промышленность',
   package__staff: 'Мясо птицы Россия',
},
{
   package__enabled: 'Подключено',
   package__img: 'source/img/packages/package12.svg',
   package__number: 'Пакет №12',
   package__name: '«ПРОФЕССИОНАЛЬНЫЙ»',
   package__prom: 'Птицеводческая промышленность',
   package__staff: 'Мясо индейки Россия',
},
{
   package__enabled: 'Подключено',
   package__img: 'source/img/packages/package13.svg',
   package__number: 'Пакет №13',
   package__name: '«ПРОФЕССИОНАЛЬНЫЙ»',
   package__prom: 'Птицеводческая промышленность',
   package__staff: 'Перепела Россия',
},
{
   package__enabled: 'Подключено',
   package__img: 'source/img/packages/package21.svg',
   package__number: 'Пакет №21',
   package__name: '«ФЕДЕРАЛЬНЫЙ»',
   package__prom: 'Мясная промышленность',
   package__staff: 'Мясо свинины Приволжского ФО РФ',
},
{
   package__enabled: 'Подключено',
   package__img: 'source/img/packages/package31.svg',
   package__number: 'Пакет №31',
   package__name: '«ПРОФЕССИОНАЛЬНЫЙ»',
   package__prom: 'Мясная промышленность',
   package__staff: 'Мясо КРС России',
},
{
   package__enabled: 'Подключено',
   package__img: 'source/img/packages/package37.svg',
   package__number: 'Пакет №37',
   package__name: '«ПРОФЕССИОНАЛЬНЫЙ»',
   package__prom: 'Мясная промышленность',
   package__staff: 'Мясо баранины Россия',
},
{
   package__enabled: 'Подключено',
   package__img: 'source/img/packages/package52.svg',
   package__number: 'Пакет №52',
   package__name: '«ПРОФЕССИОНАЛЬНЫЙ»',
   package__prom: 'Мясоперерабатывающая промышленность',
   package__staff: 'Полуфабрикаты Россия',
},
{
   package__enabled: 'Подключено',
   package__img: 'source/img/packages/package51.svg',
   package__number: 'Пакет №51',
   package__name: '«ПРОФЕССИОНАЛЬНЫЙ»',
   package__prom: 'Мясоперерабатывающая промышленность',
   package__staff: 'Колбасные изделия из мяса птицы Россия',
},
{
   package__enabled: 'Подключено',
   package__img: 'source/img/packages/package50.svg',
   package__number: 'Пакет №50',
   package__name: '«ПРОФЕССИОНАЛЬНЫЙ»',
   package__prom: 'Мясоперерабатывающая промышленность',
   package__staff: 'Колбасы Россия',
},
{
   package__enabled: 'Подключено',
   package__img: 'source/img/packages/package71.svg',
   package__number: 'Пакет №71',
   package__name: '«ПРОФЕССИОНАЛЬНЫЙ»',
   package__prom: 'Молочная промышленность',
   package__staff: 'Россия',
},
{
   package__enabled: 'Подключено',
   package__img: 'source/img/packages/package70.svg',
   package__number: 'Пакет №70',
   package__name: '«ПРОФЕССИОНАЛЬНЫЙ»',
   package__prom: 'Молокоперерабатывающая промышленность',
   package__staff: 'Россия',
},
{
   package__enabled: 'Подключено',
   package__img: 'source/img/packages/package73.svg',
   package__number: 'Пакет №73',
   package__name: '«ПРОФЕССИОНАЛЬНЫЙ»',
   package__prom: 'Молочная промышленность',
   package__staff: 'Мороженое Россия',
},
{
   package__enabled: 'Подключено',
   package__img: 'source/img/packages/package72.svg',
   package__number: 'Пакет №72',
   package__name: '«ПРОФЕССИОНАЛЬНЫЙ»',
   package__prom: 'Сыроваренная промышленность',
   package__staff: 'Россия',
},
{
   package__enabled: 'Подключено',
   package__img: 'source/img/packages/package90.svg',
   package__number: 'Пакет №90',
   package__name: '«ПРОФЕССИОНАЛЬНЫЙ»',
   package__prom: 'Рыбная промышленность',
   package__staff: 'Морская рыба Россия',
},
{
   package__enabled: 'Подключено',
   package__img: 'source/img/packages/package91.svg',
   package__number: 'Пакет №91',
   package__name: '«ПРОФЕССИОНАЛЬНЫЙ»',
   package__prom: 'Рыбная промышленность',
   package__staff: 'Речная рыба Россия',
},
{
   package__enabled: 'Подключено',
   package__img: 'source/img/packages/package96.svg',
   package__number: 'Пакет №96',
   package__name: '«ПРОФЕССИОНАЛЬНЫЙ»',
   package__prom: 'Рыбоперерабатывающая промышленность',
   package__staff: 'Россия',
},
{
   package__enabled: 'Подключено',
   package__img: 'source/img/packages/package110.svg',
   package__number: 'Пакет №110',
   package__name: '«ПРОФЕССИОНАЛЬНЫЙ»',
   package__prom: 'Зерновая промышленность',
   package__staff: 'Россия ФО РФ',
},
{
   package__enabled: 'Подключено',
   package__img: 'source/img/packages/package130.svg',
   package__number: 'Пакет №130',
   package__name: '«ПРОФЕССИОНАЛЬНЫЙ»',
   package__prom: 'Мукомольная промышленность',
   package__staff: 'Россия',
},
{
   package__enabled: 'Подключено',
   package__img: 'source/img/packages/package134.svg',
   package__number: 'Пакет №134',
   package__name: '«ПРОФЕССИОНАЛЬНЫЙ»',
   package__prom: 'Крупяная промышленность',
   package__staff: 'Россия',
},
{
   package__enabled: 'Подключено',
   package__img: 'source/img/packages/package150.svg',
   package__number: 'Пакет №150',
   package__name: '«ПРОФЕССИОНАЛЬНЫЙ»',
   package__prom: 'Хлебопекарная промышленность',
   package__staff: 'Россия',
},
{
   package__enabled: 'Подключено',
   package__img: 'source/img/packages/package170.svg',
   package__number: 'Пакет №170',
   package__name: '«ПРОФЕССИОНАЛЬНЫЙ»',
   package__prom: 'Комбикормовоя промышленность',
   package__staff: 'Россия',
},
{
   package__enabled: 'Подключено',
   package__img: 'source/img/packages/package190.svg',
   package__number: 'Пакет №190',
   package__name: '«ПРОФЕССИОНАЛЬНЫЙ»',
   package__prom: 'Макаронная промышленность',
   package__staff: 'Россия',
},
{
   package__enabled: 'Подключено',
   package__img: 'source/img/packages/package210.svg',
   package__number: 'Пакет №210',
   package__name: '«ПРОФЕССИОНАЛЬНЫЙ»',
   package__prom: 'Кондитерская промышленность',
   package__staff: 'Сахаристые',
},
{
   package__enabled: 'Подключено',
   package__img: 'source/img/packages/package213.svg',
   package__number: 'Пакет №213',
   package__name: '«ПРОФЕССИОНАЛЬНЫЙ»',
   package__prom: 'Кондитерская промышленность',
   package__staff: 'Мучные Россия',
},
{
   package__enabled: 'Подключено',
   package__img: 'source/img/packages/package216.svg',
   package__number: 'Пакет №216',
   package__name: '«ПРОФЕССИОНАЛЬНЫЙ»',
   package__prom: 'Кондитерская промышленность',
   package__staff: 'Какао Россия',
},
{
   package__enabled: 'Подключено',
   package__img: 'source/img/packages/package230.svg',
   package__number: 'Пакет №230',
   package__name: '«ПРОФЕССИОНАЛЬНЫЙ»',
   package__prom: 'Плодоовощная промышленность',
   package__staff: 'Овощи Россия',
},
{
   package__enabled: 'Подключено',
   package__img: 'source/img/packages/package233.svg',
   package__number: 'Пакет №233',
   package__name: '«ПРОФЕССИОНАЛЬНЫЙ»',
   package__prom: 'Плодоовощная промышленность',
   package__staff: 'Фрукты Россия',
},
{
   package__enabled: 'Подключено',
   package__img: 'source/img/packages/package237.svg',
   package__number: 'Пакет №237',
   package__name: '«ПРОФЕССИОНАЛЬНЫЙ»',
   package__prom: 'Плодоовощная промышленность',
   package__staff: 'Орехи Россия',
},
{
   package__enabled: 'Подключено',
   package__img: 'source/img/packages/package250.svg',
   package__number: 'Пакет №250',
   package__name: '«ПРОФЕССИОНАЛЬНЫЙ»',
   package__prom: 'Масличная промышленность',
   package__staff: 'Налив Россия',
},
{
   package__enabled: 'Подключено',
   package__img: 'source/img/packages/package258.svg',
   package__number: 'Пакет №258',
   package__name: '«ПРОФЕССИОНАЛЬНЫЙ»',
   package__prom: 'Масличная промышленность',
   package__staff: 'Бутилированное Россия',
},
{
   package__enabled: 'Подключено',
   package__img: 'source/img/packages/package254.svg',
   package__number: 'Пакет №254',
   package__name: '«ПРОФЕССИОНАЛЬНЫЙ»',
   package__prom: 'Жировая промышленность',
   package__staff: 'Россия',
},
{
   package__enabled: 'Подключено',
   package__img: 'source/img/packages/package290.svg',
   package__number: 'Пакет №290',
   package__name: '«ПРОФЕССИОНАЛЬНЫЙ»',
   package__prom: 'Кофейная промышленность',
   package__staff: 'Россия',
},
{
   package__enabled: 'Подключено',
   package__img: 'source/img/packages/package310.svg',
   package__number: 'Пакет №310',
   package__name: '«ПРОФЕССИОНАЛЬНЫЙ»',
   package__prom: 'Ликёрная промышленность',
   package__staff: 'Россия',
},
{
   package__enabled: 'Подключено',
   package__img: 'source/img/packages/package314.svg',
   package__number: 'Пакет №314',
   package__name: '«ПРОФЕССИОНАЛЬНЫЙ»',
   package__prom: 'Водочная промышленность',
   package__staff: 'Россия',
},
{
   package__enabled: 'Подключено',
   package__img: 'source/img/packages/package330.svg',
   package__number: 'Пакет №330',
   package__name: '«ПРОФЕССИОНАЛЬНЫЙ»',
   package__prom: 'Винная промышленность',
   package__staff: 'Россия',
},
{
   package__enabled: 'Подключено',
   package__img: 'source/img/packages/package350.svg',
   package__number: 'Пакет №350',
   package__name: '«ПРОФЕССИОНАЛЬНЫЙ»',
   package__prom: 'Сахарная промышленность',
   package__staff: 'Россия',
},
{
   package__enabled: 'Подключено',
   package__img: 'source/img/packages/package270.svg',
   package__number: 'Пакет №270',
   package__name: '«ПРОФЕССИОНАЛЬНЫЙ»',
   package__prom: 'Пивоваренная промышленность',
   package__staff: 'Россия',
},
{
   package__enabled: 'Подключено',
   package__img: 'source/img/packages/package370.svg',
   package__number: 'Пакет №370',
   package__name: '«ПРОФЕССИОНАЛЬНЫЙ»',
   package__prom: 'Консервная промышленность',
   package__staff: 'Мясные Россия',
},
{
   package__enabled: 'Подключено',
   package__img: 'source/img/packages/package374.svg',
   package__number: 'Пакет №374',
   package__name: '«ПРОФЕССИОНАЛЬНЫЙ»',
   package__prom: 'Консервная промышленность',
   package__staff: 'Рыбная Россия',
},
{
   package__enabled: 'Подключено',
   package__img: 'source/img/packages/package378.svg',
   package__number: 'Пакет №378',
   package__name: '«ПРОФЕССИОНАЛЬНЫЙ»',
   package__prom: 'Консервная промышленность',
   package__staff: 'Овощные Россия',
},
{
   package__enabled: 'Подключено',
   package__img: 'source/img/packages/package390.svg',
   package__number: 'Пакет №390',
   package__name: '«ПРОФЕССИОНАЛЬНЫЙ»',
   package__prom: 'Чайная промышленность',
   package__staff: 'Россия',
},
{
   package__enabled: 'Подключено',
   package__img: 'source/img/packages/package410.svg',
   package__number: 'Пакет №410',
   package__name: '«ПРОФЕССИОНАЛЬНЫЙ»',
   package__prom: 'Табачная промышленность',
   package__staff: 'Россия',
},
{
   package__enabled: 'Подключено',
   package__img: 'source/img/packages/package430.svg',
   package__number: 'Пакет №430',
   package__name: '«ПРОФЕССИОНАЛЬНЫЙ»',
   package__prom: 'Промышленность безалкогольных напитков',
   package__staff: 'Вода Россия',
},
{
   package__enabled: 'Подключено',
   package__img: 'source/img/packages/package435.svg',
   package__number: 'Пакет №435',
   package__name: '«ПРОФЕССИОНАЛЬНЫЙ»',
   package__prom: 'Промышленность безалкогольных напитков',
   package__staff: 'Соки Россия',
},
{
   package__enabled: 'Подключено',
   package__img: 'source/img/packages/package450.svg',
   package__number: 'Пакет №450',
   package__name: '«ПРОФЕССИОНАЛЬНЫЙ»',
   package__prom: 'Снековая промышленность',
   package__staff: 'Снеки Россия',
},
{
   package__enabled: 'Подключено',
   package__img: 'source/img/packages/package470.svg',
   package__number: 'Пакет №470',
   package__name: '«ПРОФЕССИОНАЛЬНЫЙ»',
   package__prom: 'Пряная промышленность',
   package__staff: 'Россия',
},
{
   package__enabled: 'Подключено',
   package__img: 'source/img/packages/package1970.svg',
   package__number: 'Пакет №1970',
   package__name: '«ПРОФЕССИОНАЛЬНЫЙ»',
   package__prom: 'Промышленность пищевых добавок',
   package__staff: 'Россия',
},
{
   package__enabled: 'Подключено',
   package__img: 'source/img/packages/package18.svg',
   package__number: 'Пакет №18',
   package__name: '«ПРОФЕССИОНАЛЬНЫЙ»',
   package__prom: 'Птицеводческая промышленность',
   package__staff: 'Мясо утки Россия',
}];

const sPackages = packages;

setContent(sPackages);
exchangeRates();

let enabledPackages = document.querySelector('.sort__enable');
let disabledPackages = document.querySelector('.sort__disable');
let testedPackages = document.querySelector('.sort__test');

enabledPackages.addEventListener("click", () => {enabledPackagesF('Подключено')});
disabledPackages.addEventListener("click", () => {enabledPackagesF('Отключено')});
testedPackages.addEventListener("click", () => {enabledPackagesF('Тест')});

function enabledPackagesF(str) {
   let elems1 = new Array();
   let elems2 = new Array();
   $('.content').empty();
   sortContent(sPackages);
   sPackages.forEach((value, index, array) => {
      if (value.package__enabled === str) {
         elems1.push(array[index]);
      }
      else if (value.package__enabled !== str) {
         elems2.push(array[index]);
      }
   });
   elems2.forEach((value, index, array) => {
      elems1.push(array[index]);
   })
   setContent(elems1);
}

function setContent(arrName) {
   let content = document.querySelector('.content');
   arrName.forEach((arr) => {
      let package__state;
      if (arr.package__enabled === 'Подключено') {
         package__state = 'package__enabled';
      }
      else if (arr.package__enabled === 'Отключено') {
         package__state = 'package__disabled';
      }
      else {
         package__state = 'package__tested';
      }
      content.innerHTML += `<div class = "package">
                  <div class = "${package__state}">
                     <span>${arr.package__enabled}</span>
                  </div>
                  <img class = "package__img" src = "${arr.package__img}" alt = "food">
                  <p class = "package__number">${arr.package__number}</p>
                  <p class = "package__name">${arr.package__name}</p>
                  <p class = "package__prom">${arr.package__prom}</p>
                  <p class = "package__staff">${arr.package__staff}</p>
                  <div class = "package__more-info">
                     <a href = "" class = "package__more-info__link">Подробнее</a>
                  </div>
               </div>`;
   });
}

function sortContent(arrName) {
   arrName.sort(function(a, b) {return parseInt(a.package__number.substr(7), 10) - parseInt(b.package__number.substr(7), 10)});
}

function exchangeRates() {
   getRandomExchange('dollar');
   getRandomExchange('euro');
   getRandomExchange('ICFCR');
   getRandomExchange('ICFPR');
   getRandomExchange('ICMPR');
   setTimeout(exchangeRates, 1777);
}

function getRandomExchange(selector) {
   let rndmExchg;
   rndmExchg = getRandom();
   document.querySelector(`.${selector}`).textContent = `${(parseFloat(document.querySelector(`.${selector}`).textContent) + rndmExchg).toFixed(2)}`;
   if (rndmExchg < 0) {
      document.querySelector(`.${selector}__arrow div`).className = 'arrow-down';
   }
   else document.querySelector(`.${selector}__arrow div`).className = 'arrow-up';
}

function getRandom() {
   return Math.round((Math.random() - Math.random())*10)/100;
}

document.querySelector('#nav-packages_collapse').addEventListener("click", () => {showBtnLine('packages')});
document.querySelector('#nav-actions_collapse').addEventListener("click", () => {showBtnLine('actions')});
document.querySelector('#nav-offers_collapse').addEventListener("click", () => {showBtnLine('offers')});

function showBtnLine(selector) {
   if (document.querySelector(`#nav-${selector}_collapse .nav__btn__line`).style.display === 'block') {
      document.querySelector(`#nav-${selector}_collapse .nav__btn__line`).style.display = 'none';
   }
   else document.querySelector(`#nav-${selector}_collapse .nav__btn__line`).style.display = 'block';
}