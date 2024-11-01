console.log("Скрипт из файла начал работу");
var users = [["levanart", "artem.levandovskiy@artstorm.com", "1234"],[],[],[]];
var errs = 0;
console.log(users)



if (errs == 0)
{
    console.log("Скрипт из файла завершил работу без ошибок");
}
else
{
    console.warn("Скрипт из файла завершил работу c ошибками!\n Количество ошибок: " + errs)
}