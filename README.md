# 4 занятие

## Домашнее задание

- Реализовать поиск страны с помощью https://restcountries.eu/
- Реализовать историю поиска в модалке выбора страны (5 последних выбранных стран)
- После выбора страны реализовать получение курса обмена валют двух выбранных стран с помощью https://exchangeratesapi.io/

### Ссылки:

redux-saga https://redux-saga.js.org/

### Дедлайн

Четверг, 18 апреля, 12:00 KGD

# Процесс выполнения

## Результат


**Contents**  
- selectionSaga
  - selectionWatcher
  - countrySearchInputWatcher
  - selectCountryWatcher

- history  
  - historyCountries (**temporary** _session_ storage for multiple instances and to track chronology)
  - persist archive.countries + localStorage (**longterm** storage with freshest and unique instances)  
  _Примечание_ - to move out active countries from history uncomment `.filter(v => v.name !== country1.name && v.name !== country2.name)` in `getHistoryCountries` selector  

- convertationSaga
  - exchangeRateWatcher
  - convertationWorker

### Time

|Task|Est|Fact|
|-|-|-|
|selectionSaga|4 hours|6 hours|
|history|2 hours|4 hours|
|convertationSaga|3 hours|3 hours|
