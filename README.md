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

---

# Smart Cursor for VS Code

A micro-extension for VS Code that brings JetBrains-like (IntelliJ IDEA, GoLand, WebStorm) multi-cursor cloning behavior:
* Pressing **`Ctrl+Shift+Down`** adds a cursor below.
* Pressing the opposite shortcut **`Ctrl+Shift+Up`** automatically removes added cursors from the bottom one by one (`cursorUndo`).
* Pressing **`Ctrl+Shift+Up`** adds a cursor above.
* Pressing the opposite shortcut **`Ctrl+Shift+Down`** automatically removes added cursors from the top one by one (`cursorUndo`).
* When only one cursor remains (or when clicking with the mouse / pressing `Escape`), the state resets so you can immediately expand cursors in the opposite direction.

---

## Installation

The extension requires no build step and has zero dependencies (`npm` is not needed; pure JavaScript).

### Quick Installation (Linux):
Copy the extension files to the VS Code extensions directory:

```bash
mkdir -p ~/.vscode/extensions/smart-cursor
cp package.json extension.js ~/.vscode/extensions/smart-cursor/
```

### Installation on Windows:
Copy the files into:
`%USERPROFILE%\.vscode\extensions\smart-cursor\`

---

## Keyboard Shortcuts Configuration (`keybindings.json`)

Open your keyboard shortcuts file in VS Code (`Ctrl+Shift+P` → `Preferences: Open Keyboard Shortcuts (JSON)` or file `~/.config/Code/User/keybindings.json`) and add:

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

> **Note:** If you previously had `editor.action.insertCursorBelow`, `editor.action.insertCursorAbove`, or `cursorUndo` bound to these keys, remove them to avoid conflicts.

---

## Activation

After copying the files, reload VS Code:
* **`Ctrl+Shift+P`** → `Developer: Reload Window`  
(or simply restart the editor).

