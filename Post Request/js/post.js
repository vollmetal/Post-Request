const postButton = document.getElementById('')
const postTitleInput = document.getElementById('postTitleInput')
const postSymbolInput = document.getElementById('postSymbolInput')
const postPriceInput = document.getElementById('')
const postQuantityInput = document.getElementById('')
const websiteURL = 'https://endurable-bead-polo.glitch.me/stocks'


function makePostRequest (postInfo) {
    let request = new XMLHttpRequest()

    request.open('POST', websiteURL)
    request.setRequestHeader('Content-Type', 'application/json')
    request.send(JSON.stringify(postInfo))
}

postButton.addEventListener('click', function () {
    let completePost = {
        "title": postTitleInput.value,
        "symbol": postSymbolInput.value,
        'price': 10,
        'quantity': 10
    }

    makePostRequest()
})