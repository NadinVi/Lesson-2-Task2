//Створити скрипт для додавання, віднімання, множення та поділу двох чисел та виведення результатів.
//Користувач вводить два числа через два промпти, і повідомлення виводиться алертом з таким результатом:
//Користувач ввів 2 і 2:
//2+2=4
//2-2=0
//2*2=4
//2/2=1

x = parseInt(prompt('Number 1'));
y = parseInt(prompt('Number 2'));
z = x + y;
alert(x + '+' + y + '=' + z)


x = parseInt(prompt('Number 1'));
y = parseInt(prompt('Number 2'));
z = x - y;
alert(x + '-' + y + '=' + z)


x = parseInt(prompt('Number 1'));
y = parseInt(prompt('Number 2'));
z = x * y;
alert(x + '*' + y + '=' + z)


x = parseInt(prompt('Number 1'));
y = parseInt(prompt('Number 2'));
z = x / y;
alert(x + '/' + y + '=' + z)