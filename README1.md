Создаем новый проект на github  и называем его также, как и на компьютере будет
на локальном компе тоже 
mkdir <name>
cd <name>
git init (появится файл .git)
git remote add origin git@github.com:vsmelyshev/hexlet-js.git
git branch -M main
что-то создаем, вроде echo “new”>readme.txt
git add . (добавили все в индекс)
git commit -m “new repository”
git push -u origin main (+enter pass code)

\\wsl.localhost\Ubuntu\root
_____________________________________________________
или можно 
в самом корне выполнить — создасться директория с названием проекта
git clone git@github.com:vsmelyshev/hexlet-js.git
git pull - - rebase (2 defis)

npm init  + Главное вручную — type: «module”.

+создать в корне проекта файл .gitignore
touch .gitignore
nano .gitignore (edit file)
node_modules/

npm install lodash
npm install  - -save-dev jest  +eslint, eslint-config-airbnb-base, eslint-plugin-import
__tests__/index.test.js
npx jest

git clone https://github.com/vsmelyshev/frontend-project-44.git
cd frontend-project-44
make install
создать Makefile
install:
	npm ci

brain-games:
	node bin/brain-games.js

для запуска файла — в начале файле шебанг
#!/usr/bin/env node 
1. Добавьте файлу bin/brain-games.js права на исполнение, выполнив в корневой директории проекта команду chmod +x bin/brain-games.js. Это позволит запускать исполняемый файл напрямую из консоли без указания интерпретатора (node) - ./bin/brain-games.js.
2. Добавьте в Makefile команду publish, которая выполнит npm publish --dry-run.
3. Проведите отладку публикации пакета. Если в процессе выполнения будут получены ошибки или предупреждения, исправьте их.
4. Установите пакет в систему с помощью npm link и убедитесь в том, что он работает, запустив brain-games в терминале. Команда npm link может потребовать запуск с sudo.

Eslint
1. Установите следующие пакеты: eslint, eslint-config-airbnb-base, eslint-plugin-import
2. Настройте правильно .eslintrc.yml. Документация: https://eslint.org/docs/user-guide/configuring. Сверяйтесь с nodejs-package
3. Создайте задачу make lint, которая должна запускать npx eslint .
4. Подключите eslint к своему редактору, убедитесь что все работает. Скорее всего, понадобится поставить eslint глобально
5. Исправьте все ошибки, которые выдает линтер. Отключите правила no-console (оно не актуально для nodejs разработки) и import/extensions (чтобы получить возможность указывать при импорте файлы с расширением)