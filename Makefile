install:  # устнавливает зависимости после клонирования или удаления node_modules
	npm ci

brain-games: # запускает игру
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js

brain-calc:
	node bin/brain-calc.js

brain-gcd:
	node bin/brain-gcd.js

brain-progression:
	node bin/brain-progression.js

brain-prime:
	node bin/brain-prime.js

publish: # проводит отладку публикации пакета
	npm publish --dry-run

lint:
	npx eslint .


