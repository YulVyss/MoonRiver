import replace from "gulp-replace" // Поиск и замена
import plumber from "gulp-plumber" // обработка ошибок
import notify from "gulp-notify" // сообщения
import browsersync from "browser-sync"  // локальный сервер
import newer from "gulp-newer" // проверка обновления
import ifPlugin from "gulp-if" // условное ветвление

//экспортируем объект
export const plugins = {
  replace: replace,
  plumber: plumber,
  notify: notify,
  browsersync: browsersync,
  newer: newer,
  if: ifPlugin
}
// 44:35 stop, pug не подключала, далее с 