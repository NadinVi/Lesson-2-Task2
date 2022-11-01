//Напишіть скрипт, який переводить години в секунди і має робити насутпне:
//- запитати у користувача кількість годин;
//- порахувати, скільки секунд у цій кількості годин;
//- записати обчислене значення у змінну;
//- вивести цю змінну користувачеві через alert.

numberOfHours = prompt('Введи количество часов');
secondsInaMinute = 60;
minutesInAnHour = 60;
secondsInAnHour = ((secondsInaMinute * minutesInAnHour) * numberOfHours);
alert(`В ${numberOfHours} часах ${secondsInAnHour} секунд`);
