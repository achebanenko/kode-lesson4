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



**Примечания**  
- selector ~getHistoryCountries~ could be with ~.filter(v => v.name !== country1.name && v.name !== country2.name)~  
that would move out active countries` selections from ~historyCountries~ outputed array


