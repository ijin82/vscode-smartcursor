const vscode = require('vscode');

let currentDirection = null; // 'up' | 'down' | null

function activate(context) {
    // Сбрасываем направление, если курсор остался один
    context.subscriptions.push(
        vscode.window.onDidChangeTextEditorSelection(e => {
            if (e.selections.length <= 1) {
                currentDirection = null;
            }
        })
    );

    // Сбрасываем направление при смене активного редактора
    context.subscriptions.push(
        vscode.window.onDidChangeActiveTextEditor(() => {
            currentDirection = null;
        })
    );

    // Клонирование курсора вниз (или откат верхнего)
    context.subscriptions.push(
        vscode.commands.registerCommand('smartCursor.cloneDown', async () => {
            const editor = vscode.window.activeTextEditor;
            if (!editor) return;

            if (currentDirection === 'up' && editor.selections.length > 1) {
                await vscode.commands.executeCommand('cursorUndo');
                if (editor.selections.length <= 1) {
                    currentDirection = null;
                }
            } else {
                currentDirection = 'down';
                await vscode.commands.executeCommand('editor.action.insertCursorBelow');
            }
        })
    );

    // Клонирование курсора вверх (или откат нижнего)
    context.subscriptions.push(
        vscode.commands.registerCommand('smartCursor.cloneUp', async () => {
            const editor = vscode.window.activeTextEditor;
            if (!editor) return;

            if (currentDirection === 'down' && editor.selections.length > 1) {
                await vscode.commands.executeCommand('cursorUndo');
                if (editor.selections.length <= 1) {
                    currentDirection = null;
                }
            } else {
                currentDirection = 'up';
                await vscode.commands.executeCommand('editor.action.insertCursorAbove');
            }
        })
    );
}

function deactivate() {
    currentDirection = null;
}

module.exports = {
    activate,
    deactivate
};
