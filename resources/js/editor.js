
import EditorJS from '@editorjs/editorjs'
const editor = new EditorJS({
    holder: 'editor',
    i18n: {
        messages: {
            toolNames: {
                "Text": "Параграф",
                "Heading": "Заголовок",
                "List": "Список",
            },
            ui: {
            "toolbar": {
                "toolbox": {
                "Add": "Добавить"
                }
            },
            "blockTunes": {
                "toggler": {
                        "Click to tune": "Нажмите, чтобы настроить",
                        "or drag to move": "Или перетащите, чтобы переместить"
                    }
                },
            },
            tools: { "warning": { "Title": "Название", "Message": "Сообщение", }, "link": { "Add a link": "Вставьте ссылку" }, },
            blockTunes: {
                delete: {
                    Delete: "Удалить"
                },
                moveUp: {
                    "Move up": "Переместить вверх"
                },
                moveDown: {
                    "Move down": "Переместить вниз"
                }
            }
        }
    }
})
