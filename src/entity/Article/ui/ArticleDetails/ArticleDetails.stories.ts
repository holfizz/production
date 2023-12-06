import type { Meta, StoryObj } from "@storybook/react"
import ArticleDetails from "./ArticleDetails"
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator"
import { Article } from "entity/Article/model/types/article"
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator"
import { Theme } from "app/providers/ThemeProvider"
import {
    ArticleBlockType,
    ArticleType,
} from "entity/Article/model/const/const"

const meta = {
    title: "entities/Article/ArticleDetails",
    component: ArticleDetails,
    parameters: {},
} satisfies Meta<typeof ArticleDetails>

export default meta
type Story = StoryObj<typeof meta>;

const article: Article = {
    id: "1",
    title: "Javascript news",
    subtitle: "Что нового в JS за 2022 год?",
    img: "https://teknotower.com/wp-content/uploads/2020/11/js.png",
    views: 1022,
    createdAt: "26.02.2022",
    user: {
        id: "1",
        username: "admin",
        avatar:
          "https://images.unsplash.com/photo-1700068877703-8ab9b45f64b2?q=80&w=3552&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3",
    },
    type: [ArticleType.IT],
    blocks: [
        {
            id: "2",
            type: ArticleBlockType.TEXT,
            title: "Заголовок этого блока",
            paragraphs: [
                // eslint-disable-next-line max-len
                "Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.",

                // eslint-disable-next-line max-len
                "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.",

                // eslint-disable-next-line max-len
                "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:",
            ],
        },
        {
            id: "4",
            type: ArticleBlockType.CODE,

            // eslint-disable-next-line max-len
            code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
        },
        {
            id: "5",
            type: ArticleBlockType.TEXT,
            title: "Заголовок этого блока",
            paragraphs: [
                // eslint-disable-next-line max-len
                "Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.",
                // eslint-disable-next-line max-len
                "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:",
            ],
        },
    ],
}

export const Light: Story = {
    args: {
        id: "1",
    },
    decorators: [
        StoreDecorator({
            articleDetails: {
                data: article,
            },
        }),
    ],
}

export const Dark: Story = {
    args: {
        id: "1",
    },
    decorators: [
        StoreDecorator({
            articleDetails: {
                data: article,
            },
        }),
        ThemeDecorator(Theme.DARK),
    ],
}

export const IsLoading: Story = {
    args: {
        id: "1",
    },
    decorators: [
        StoreDecorator({
            articleDetails: {
                isLoading: true,
            },
        }),
    ],
}

export const Error: Story = {
    args: {
        id: "1",
    },
    decorators: [
        StoreDecorator({
            articleDetails: {
                error: "error",
            },
        }),
    ],
}
