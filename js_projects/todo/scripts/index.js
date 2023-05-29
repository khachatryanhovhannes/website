"use strict"
let todos = [
    {
        name: "HTML",
        description: "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It is often assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript. Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages.HTML describes the structure of a web page semantically and originally included cues for its appearance.",
        importantly: 1,
        startDate: "2023-05-01",
        endDate: "2023-05-10",
        id: Math.random(),
        checked: false
    },
    {
        name: "CSS",
        description: "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML (including XML dialects such as SVG, MathML or XHTML).[1] CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.[2]",
        importantly: 1,
        startDate: "2023-05-05",
        endDate: "2023-05-15",
        id: Math.random(),
        checked: false
    },
    {
        name: "SCSS",
        description: "Sass (short for syntactically awesome style sheets) is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS). SassScript is the scripting language itself.",
        importantly: 4,
        startDate: "2023-05-10",
        endDate: "2023-05-15",
        id: Math.random(),
        checked: false
    },
    {
        name: "GIT",
        description: "Git (/ɡɪt/)[8] is a distributed version control system that tracks changes in any set of computer files, usually used for coordinating work among programmers collaboratively developing source code during software development. Its goals include speed, data integrity, and support for distributed, non-linear workflows (thousands of parallel branches running on different computers).[9][10][11]",
        importantly: 2,
        startDate: "2023-05-03",
        endDate: "2023-05-30",
        id: Math.random(),
        checked: false
    },
    {
        name: "JAVASCRIPT",
        description: "JavaScript (/ˈdʒɑːvəskrɪpt/), often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries. All major web browsers have a dedicated JavaScript engine to execute the code on users' devices.",
        importantly: 2,
        startDate: "2023-05-15",
        endDate: "2023-06-5",
        id: Math.random(),
        checked: false
    },
    {
        name: "REACT",
        description: "React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library[3][4] for building user interfaces based on components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.",
        importantly: 2,
        startDate: "2023-06-1",
        endDate: "2023-06-30",
        id: Math.random(),
        checked: false
    },
    {
        name: "REDUX",
        description: "Redux helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.",
        importantly: 5,
        startDate: "2023-06-15",
        endDate: "2023-06-25",
        id: Math.random(),
        checked: false
    },
    {
        name: "GITHUB",
        description: "GitHub, Inc. (/ˈɡɪthʌb/[a]) is an Internet hosting service for software development and version control using Git. It provides the distributed version control of Git plus access control, bug tracking, software feature requests, task management, continuous integration, and wikis for every project.[6] Headquartered in California, it has been a subsidiary of Microsoft since 2018.[7]",
        importantly: 4,
        startDate: "2023-05-05",
        endDate: "2023-06-30",
        id: Math.random(),
        checked: false
    },
    {
        name: "GUTLAB",
        description: "GitLab Inc. is an open-core company that operates GitLab, a DevOps software package which can develop, secure, and operate software.[9] The open source software project was created by Ukrainian developer Dmytro Zaporozhets and Dutch developer Sytse Sijbrandij.[10] In 2018, GitLab Inc. was considered the first partly-Ukrainian unicorn.[11][12]",
        importantly: 5,
        startDate: "2023-05-05",
        endDate: "2023-06-30",
        id: Math.random(),
        checked: false
    },
    {
        name: "NPM",
        description: "Relied upon by more than 17 million developers worldwide, npm is committed to making JavaScript development elegant, productive, and safe. The free npm Registry has become the center of JavaScript code sharing, and with more than two million packages, the largest software registry in the world. Our other tools and services take the Registry, and the work you do around it, to the next level.",
        importantly: 4,
        startDate: "2023-05-05",
        endDate: "2023-06-30",
        id: Math.random(),
        checked: false
    },
    {
        name: "JQUERY",
        description: "JQuery is a JavaScript framework designed to simplify HTML DOM tree traversal and manipulation, as well as event handling, CSS animation, and Ajax.[3] It is free, open-source software using the permissive MIT License.[4] As of Aug 2022, jQuery is used by 77% of the 10 million most popular websites.[5] Web analysis indicates that it is the most widely deployed JavaScript library by a large margin, having at least 3 to 4 times more usage than any other JavaScript library.",
        importantly: 3,
        startDate: "2023-05-05",
        endDate: "2023-06-30",
        id: Math.random(),
        checked: false
    },
    {
        name: "ANGULAR",
        description: "ANGULAR is a TypeScript-based, free and open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS. Angular is a single-page application framework which is used for creating fast web Applications. It uses concepts of single-page application in which UI is delivered in the beginning of application request and later only data is requested which makes single-page application applications fast.",
        importantly: 2,
        startDate: "2023-05-05",
        endDate: "2023-06-30",
        id: Math.random(),
        checked: false
    },
    {
        name: "DATABASE",
        description: "In computing, a database is an organized collection of data stored and accessed electronically. Small databases can be stored on a file system, while large databases are hosted on computer clusters or cloud storage. The design of databases spans formal techniques and practical considerations, including data modeling, efficient data representation and storage, query languages, security and privacy of sensitive data, and distributed computing issues, including supporting concurrent access and fault tolerance.",
        importantly: 1,
        startDate: "2023-05-05",
        endDate: "2023-06-30",
        id: Math.random(),
        checked: false
    },
    {
        name: "VUE",
        description: "Vue.js (commonly referred to as Vue;) is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications.[10] It was created by Evan You, and is maintained by him and the rest of the active core team members.",
        importantly: 3,
        startDate: "2023-05-05",
        endDate: "2023-06-30",
        id: Math.random(),
        checked: false
    },

]
function drawTodos(todos) {

    const todosElem = document.getElementById("todos")
    while (todosElem.hasChildNodes())
        todosElem.removeChild(todosElem.firstChild)
    for (const todo of todos) {
        const todoElem = document.createElement("div")
        todoElem.class = "todo"
        let checked = document.createElement("button")
        checked.innerHTML = todo.checked ? "checked" : "unchecked";
        checked.id = "checked"
        checked.addEventListener("click", () => {
            todo.checked = !todo.checked
            checked.innerHTML = todo.checked ? "checked" : "unchecked";
        })
        todoElem.append(checked)
        const todoTitle = document.createElement("h1")
        todoTitle.innerHTML = todo.name
        todoElem.append(todoTitle)
        const time = document.createElement("h3")
        time.innerHTML = todo.startDate + " - " + todo.endDate
        todoElem.append(time)
        const imp = document.createElement("p")
        imp.innerHTML = "importance ֊ " + todo.importantly
        todoElem.append(imp)
        const btn = document.createElement("button")
        btn.innerHTML = "Learn more"
        btn.className = "learnMore"
        btn.addEventListener("click", () => {
            showOpenTodo(todo.id)
        })
        todoElem.append(btn)
        switch (todo.importantly) {
            case 1:
                todoElem.style.background = "rgb(255, 0, 0)"
                break;
            case 2:

                todoElem.style.background = "rgb(255, 89, 0)"
                break;
            case 3:

                todoElem.style.background = "rgb(255, 200, 0)"
                break;
            case 4:

                todoElem.style.background = "rgb(128, 255, 0)"
                break;
            default:

                todoElem.style.background = "rgb(0, 186, 0)"
                break;
        }
        todosElem.append(todoElem)
    }
}

drawTodos(todos)

function showOpenTodo(id) {
    const openDiv = document.createElement("div")
    openDiv.id = "openDiv"
    const todo = todos.find(i => i.id === id)
    const close = document.createElement("button")
    close.innerHTML = "&#10006; "
    close.addEventListener("click", () => {
        openDiv.style.display = "none"

        document.getElementById("root").style.opacity = "1"
    })
    openDiv.append(close)
    const todoTitle = document.createElement("h1")
    todoTitle.innerHTML = todo.name
    openDiv.append(todoTitle)
    const time = document.createElement("h3")
    time.innerHTML = todo.startDate + " - " + todo.endDate;
    openDiv.append(time)
    const imp = document.createElement("p")
    imp.innerHTML = "importance ֊ " + todo.importantly
    openDiv.append(imp)
    const desc = document.createElement("p")
    desc.innerHTML = todo.description
    openDiv.append(desc)
    document.body.append(openDiv)
    document.getElementById("root").style.opacity = "0.5"
}

const clearChecked = document.getElementById("clearChecked")
clearChecked.addEventListener("click", () => {
    todos = todos.filter(todo => !todo.checked)
    drawTodos(todos)
})

const add = document.getElementById("add");
add.addEventListener("click", () => {
    let newMember = {}
    const name = document.getElementById("name")
    if (name.value != "") {
        newMember.name = name.value
    } else {
        name.style = "border-bottom: 1px solid red"
    }
    const desc = document.getElementById("desc")
    if (desc.value != "") {
        newMember.description = desc.innerHTML
    } else {
        desc.style = "border-bottom: 1px solid red"
    }

    const num = document.getElementById("number")
    if (num.value >= 1 && num.value <= 5) {
        newMember.importantly = num.value
    } else {
        num.style = "border-bottom: 1px solid red"
    }
    const startDate = document.getElementById("startDate")
    const endDate = document.getElementById("endDate")
    if (startDate.value != "" && endDate.value != "" && startDate.value < endDate.value) {
        newMember.startDate = startDate.value;
        newMember.endDate = endDate.value
    }
    else {
        startDate.style = "border-bottom: 1px solid red"
        endDate.style = "border-bottom: 1px solid red"
    }
    newMember.id = Math.random()
    newMember.checked = false
    console.log(Object.keys(newMember).length)
    if (Object.keys(newMember).length === 7) {
        alert("sdjsgjh")
        todos.push(newMember);
        drawTodos(todos)
        document.getElementById("addTodo").style.display = "none";
    }
})


const addTodoInList = document.getElementById("addTodoInList")
addTodoInList.addEventListener("click", () => {
    document.getElementById("root").style.opacity = "0.5"
    document.getElementById("addTodo").style.display = "inline-flex";
})


const closeAddSection = document.getElementById("closeAddSection")
closeAddSection.addEventListener("click", () => {
    document.getElementById("addTodo").style.display = "none";
    document.getElementById("root").style.opacity = "1"

})

const clearAll = document.getElementById("clearAll")
clearAll.addEventListener("click", () => {
    todos = [];
    drawTodos(todos)
})


const sortedAZ = document.getElementById("sortedAZ")
sortedAZ.addEventListener("click", () => {
    todos = todos.sort((a, b) => {
        return a.name > b.name ? 1 : -1
    })
    drawTodos(todos)
})

const sortedStart = document.getElementById("sortedStart")
sortedStart.addEventListener("click", () => {
    todos = todos.sort((a, b) => {
        let x = new Date(a.startDate)
        let y = new Date(b.startDate)
        return x > y ? 1 : -1
    })
    drawTodos(todos)
})

const sortedEnd = document.getElementById("sortedEnd")
sortedEnd.addEventListener("click", () => {
    todos = todos.sort((a, b) => {
        let x = new Date(a.endDate)
        let y = new Date(b.endDate)
        return x > y ? 1 : -1
    })
    drawTodos(todos)
})

const sortedimp = document.getElementById("sortedimp")
sortedimp.addEventListener("click", () => {
    todos = todos.sort((a, b) => {
        return a.importantly > b.importantly ? 1 : -1
    })
    drawTodos(todos)
})