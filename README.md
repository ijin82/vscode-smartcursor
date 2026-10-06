# Smart Cursor для VS Code

Микро-расширение для VS Code, реализующее поведение мультикурсоров как в JetBrains (IntelliJ IDEA, GoLand, WebStorm):
* Нажатие **`Ctrl+Shift+Down`** добавляет курсор вниз.
* Нажатие противоположной клавиши **`Ctrl+Shift+Up`** автоматически убирает добавленные снизу курсоры по одному (`cursorUndo`).
* Нажатие **`Ctrl+Shift+Up`** добавляет курсор вверх.
* Нажатие противоположной клавиши **`Ctrl+Shift+Down`** автоматически убирает добавленные сверху курсоры по одному (`cursorUndo`).
* Когда курсор остаётся один (или при клике мыши / нажатии `Escape`), состояние сбрасывается — можно сразу растить курсоры в другую сторону.

---

## Установка

Расширение не требует сборки и зависимостей (`npm` не нужен, чистый JavaScript).

### Быстрая установка (Linux):
Скопируйте папку с файлами расширения в директорию расширений VS Code:

```bash
mkdir -p ~/.vscode/extensions/smart-cursor
cp package.json extension.js ~/.vscode/extensions/smart-cursor/
```

### Установка в Windows:
Скопируйте файлы в папку:
`%USERPROFILE%\.vscode\extensions\smart-cursor\`

---

## Настройка горячих клавиш (`keybindings.json`)

Откройте настройки клавиш в VS Code (`Ctrl+Shift+P` → `Preferences: Open Keyboard Shortcuts (JSON)` или файл `~/.config/Code/User/keybindings.json`) и добавьте:

```json
[
    {
        "key": "ctrl+shift+down",
        "command": "smartCursor.cloneDown",
        "when": "editorTextFocus"
    },
    {
        "key": "ctrl+shift+up",
        "command": "smartCursor.cloneUp",
        "when": "editorTextFocus"
    }
]
```

> **Примечание:** Если у вас ранее были привязаны `editor.action.insertCursorBelow`, `editor.action.insertCursorAbove` или `cursorUndo` к этим сочетаниям, удалите их, чтобы не было конфликтов.

---

## Активация

После копирования файлов выполните в VS Code:
* **`Ctrl+Shift+P`** → `Developer: Reload Window`  
(или просто перезапустите редактор).
