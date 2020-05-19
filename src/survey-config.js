const config = {
    "locale": "es",
    "completedBeforeHtml": {
        "es": "<h1> Completado El Survey </h1>"
    },
    "loadingHtml": {
        "es": "<h1>Cargando Survey</h1>"
    },
    "pages": [
        {
            "name": "page1",
            "elements": [
                {
                    "type": "text",
                    "name": "question1",
                    "title": "Pregunta numero 1 ",
                    "isRequired": true,
                    "placeHolder": "Nombre de la pregunta "
                }
            ]
        },
        {
            "name": "page2",
            "elements": [
                {
                    "type": "checkbox",
                    "name": "question2",
                    "title": "Title question 2 ",
                    "description": "Tis is a description ",
                    "isRequired": true,
                    "commentText": "Esto es un comentario ",
                    "choices": [
                        {
                            "value": "item1",
                            "text": "Text item 1"
                        },
                        {
                            "value": "item2",
                            "text": "text item 2"
                        },
                        {
                            "value": "item3",
                            "text": "text item 3"
                        }
                    ],
                    "hasNone": true
                }
            ]
        }
    ],
    "showCompletedPage": false,
    "showPageNumbers": true,
    "showProgressBar": "bottom",
    "goNextPageAutomatic": true,
    "questionsOnPageMode": "questionPerPage"
};

export default config;
