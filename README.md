# resume

Интерфейс для резюме. Сейчас есть только один шаблон, который можно только вручную менять под себя

# Installatin
> We use yarn cos it is faster and nicer than npm
```bash
> yarn && yarn dev
```

# Eslint
Fix eslint errors in all files src/*
```bash
> npx eslint --fix src
```
# TypeScript
```bash
> tsc --noEmit
```

# Commiting
> make commit messages great again!

If you don't have, install commitizen globally
```
> npm install --global commitizen
```
Then you can use this command to create a new commit
```
> git add .
> git cz
```

# Style Guide 
Action functions, that passed to onClick, onSubmit and so on, should starts from `handle` word. For example handleClick, handleSubmit.
```
function HomePage() {
  //    ...
  function handleClick() {
    console.log('increment like count')
  }

  return (
    <div>
      {/* ... */}
      <button onClick={handleClick}>Like</button>
    </div>
  )
}
```

### Imports Order
1. import React from 'react'
2. others external libs
3. models
4. hooks
5. components
6. styles (import styles from './index.module.scss')
- Использую только нативные методы
  - Intl вместо moment, date-fns, dayjs и тд
  - Не использую lodash
  - Минимум зависимостей