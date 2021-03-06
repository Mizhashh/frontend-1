# Тестовое задание Lofty frontend advertising
### Задача 1:  Реализовать простой модуль interstitial

> interstitial - это попап с оверлеем, в котором содержится рекламный контент и срабатывает при клике на определенный элемент.

Стили и разметку для модуля нужно взять из ./server/static/index.html

### Задача 2: Реализовать логику загрузки рекламного контента
Перед отображением модуля нужно получить контент:

1. опросить основной endpoint http://localhost:8800/api/a, который вернет в json строку или null или пустой json
2. если http://localhost:8800/api/a не вернет строку, делаем запрос на 2й endpoint http://localhost:8800/api/b, который отдает ответ по тому же принципу, что и основной
3. если 2й endpoint тоже не вернул данных, тогда в контент interstitial передаем строку-заглушку `Fallback Advertising resp 1`

### Задача 3: Реализовать api и логику срабатывания модуля

1. bind - String[] - массив строк-селекторов для срабатывания на клик, дефолт `body`
2. ignore - String[] - массив строк-селекторов для ограничения на клик, дефолта нет
3. autoclose -  Number - количество секунд до автоматического скрытия, дефолта нет ( в разметке есть место для рендера таймера )

Пример подключения и использования модуля:
```
<!-- наш собранный модуль -->
<script src="./interstitial.js"></script>
<script>
  interstitial({
    bind: ['.bind-1', '.bind-2'], // модуль может сработать, если будет произведен клик по этим селекторам
    ignore: ['.ignore-1'], // модуль игнорирует срабатывание по эти селекторам
    autoclose: 5 // после рендера модуля с контентом будет запущен обратный таймер автоматического закрытия
  })
</script>
```

---

### Правила игры

- Модуль должен быть реализован без использования библиотек или фреймворков (Angular, React, Vue...)
- Проект содержит минимальную webpack конфигурацию с сервером ( сборку можно доработать на свое усмотрение )
- Реализация должна быть жизнеспособна на ie 11
- Результат данного тестового задания следует опубликовать на github.com в виде репозитория с публичным доступом


 






