const config = {
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
                    "hasComment": true,
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
                    ]
                }
            ]
        }
    ],
    "showCompletedPage": false,
    "showPageNumbers": true,
    "goNextPageAutomatic": true
};

export default config;
