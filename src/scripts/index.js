import { posts } from './database.js'

function renderPosts (array) {
    const postsSection = document.querySelector(".main__second__section")
    const postH2 = document.querySelector(".post")

    postsSection.innerHTML = ''
    postsSection.appendChild(postH2)


    for (let i = 0; i < array.length; i++) {
        const post = array[i]

        const section = createPost(post)

        postsSection.appendChild(section)
    }
}

function createPost(post) {
    const divContainer = document.createElement("div")
    const divHeader = document.createElement("div")
    const figure = document.createElement("figure")
    const img = document.createElement("img")

    const divUser = document.createElement("div")
    const h3 = document.createElement("h3")
    const pJob = document.createElement("p")

    const divText = document.createElement("div")
    const h2 = document.createElement("h2")
    const pText = document.createElement("p")

    const divInteraction = document.createElement("div")
    const button = document.createElement("button")
    const i = document.createElement("i")
    const pNumber = document.createElement("p")

    divContainer.classList.add("post__container")

    divHeader.classList.add("post__header")

    figure.classList.add("figure__post__container")

    img.classList.add("post__image")
    img.src = post.img

    divUser.classList.add("user__information__post__container")
    h3.innerText = post.user
    pJob.classList.add("job")
    pJob.innerText = post.stack

    divText.classList.add("text__container")
    h2.innerText = post.title
    pText.innerText = post.text

    divInteraction.classList.add("post__interaction")
    button.innerText = "Abrir Post"
    i.classList.add("fa-solid", "fa-heart")
    pNumber.classList.add("number")
    pNumber.innerText = post.likes

    button.dataset.postId = post.id

    figure.appendChild(img)
    divUser.append(h3, pJob)

    divHeader.append(figure, divUser)
    divInteraction.append(button, i, pNumber)
    divText.append(h2, pText, divInteraction)

    divContainer.append(divHeader, divText)

    return divContainer
}

function createPostModal(post) {
    const divContainer = document.createElement("div")
    const close = document.createElement("i")
    const divHeader = document.createElement("div")
    const figure = document.createElement("figure")
    const img = document.createElement("img")

    const divUser = document.createElement("div")
    const h3 = document.createElement("h3")
    const pJob = document.createElement("p")

    const divText = document.createElement("div")
    const h2 = document.createElement("h2")
    const pText = document.createElement("p")

    const divInteraction = document.createElement("div")
    const button = document.createElement("button")

    divContainer.classList.add("post__container")

    close.classList.add("fa-duotone", "fa-x")

    divHeader.classList.add("post__header")

    figure.classList.add("figure__post__container")

    img.classList.add("post__image")
    img.src = post.img

    divUser.classList.add("user__information__post__container")
    h3.innerText = post.user
    pJob.classList.add("job")
    pJob.innerText = post.stack

    divText.classList.add("text__container--modal", "text__container")
    h2.innerText = post.title
    pText.innerText = post.text

    divContainer.appendChild(close)

    figure.appendChild(img)
    divUser.append(h3, pJob)

    divHeader.append(figure, divUser)
    divText.append(h2, pText, divInteraction)

    divContainer.append(divHeader, divText)

    return divContainer
}

renderPosts(posts)

function showPostModal (array) {
    const modalController = document.querySelector(".modal__open__post")

    const buttons = document.querySelectorAll(".post__interaction > button")

    for (let i = 0; i<buttons.length; i++) {
        const button = buttons[i]

        button.addEventListener("click", (event) =>{
            modalController.innerHTML = ""
            const post = findPost (array, event.target.dataset.postId)
            const modalPost = createPostModal(post)

            const modalDiv = document.createElement("div")

            modalDiv.appendChild(modalPost)
            modalController.appendChild(modalDiv)

            modalController.showModal()

            const closeModal = document.querySelector(".fa-x")

            closeModal.addEventListener("click", () => {
                modalController.close()
            })
        })
    }
}

function findPost(array, id) {
    let post = {}

    for (let i = 0; i < array.length; i++ ){
        if (array[i].id == id) {
            post = array[i]

            return post
        }
    }
}

showPostModal(posts)

