# OTUS-JS-PRO-LeetCode

В данном репозитории представлена реализация проекта **"LeetCode"**, выполняемая в рамках курса JS-Pro платформы онлайн-образования "Otus".

## На данный момент реализовано:
1. Описание модели данных. Мною было выделено 5 ресурсов (Users, Tasks, Comments, Roles, Rules), для которых были описаны типы и Api-endpoints.
2. Для работы с ресурсами подключил typeorm. Создал базу, на основе классов ресурсов сгенерировал и применил миграции. Структура базы данных была успешно создана.
3. Сгенерировал API документацию с помощью Swagger Autogen. С этим пунктом есть проблема. Почему-то swagger отказывается генерировать описание параметров для метода Post у всех ресурсов.

## Запуск
1. Создать БД Postgresql.
2. Применить миграции: `npm run migration:run`
3. Запустить приложение: `npm run start:dev`
