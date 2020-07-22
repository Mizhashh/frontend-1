# Тестовое задание Lofty frontend advertising
### Задача 1:  Реализовать простой модуль interstitial

> interstitial - это попап с оверлеем, в котором содержится рекламный контент и срабатывает при клике на определенный элемент.

Параметры api:
1. bind - String[] - массив строк-селекторов для срабатывания на клик, дефолт `body`
2. ignore - String[] - массив строк-селекторов для ограничения на клик, дефолта нет
3. autoclose -  Number - количество секунд до автоматического скрытия, дефолта нет ( в разметке есть место для рендера таймера )

Модуль должен быть полностью автономным, пример:
```
<!-- наш собранный модуль -->
<script src="...interstitial.js"></script>
<script>
  interstitial({
    bind: ['.bind-1', '.bind-2'],
    ignore: ['.ignore-1'],
    autoclose: 5
  })
</script>
```

### Задача 2: Реализовать логику загрузки контента

1. при загрузке опросить основной endpoint http://localhost:8800/api/a, который вернет в json строку или null или пустой json
2. если http://localhost:8800/api/a не вернет строку, делаем запрос на 2й endpoint http://localhost:8800/api/b который работает по тому же принципу, что и основной
3. если 2й endpoint не вернул контент, тогда в контент interstitial передаем строку-заглушку `Fallback Advertising resp 1`

---

### Правила игры

- Модуль должен быть реализован без использования библиотек или фреймворков (Angular, React, Vue...)
- Стили и разметку для модуля нужно взять из ./server/static/index.html
- Проект содержит минимальную webpack конфигурацию с сервером ( сборку можно доработать под свое усмотрение )
- реализация должна быть жизнеспособна на ie 11


 





