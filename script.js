function getRandomSpaceImageInfo() {
    const endpoint = 'https://api.nasa.gov/planetary/apod'

    const apiKey = 'DEMO_KEY'

    const query = `${endpoint}?api_key=${apiKey}&count=1`
    //const query = endpoint + "?api_key="" + apiKey + "&count=1"

    // make a request
    return fetch(query)
                .then((response) => response.json()) //parse the data
}

// //just to check the response correctly
//getRandomSpaceImageInfo().then(console.log)

//a function that changes the word in p and attach an image below
function getImageFromSpace() {
    getRandomSpaceImageInfo().then((imageInfoList) => {
        const imageInfo = imageInfoList[0]

        const imageTitle = imageInfo.title
        const imageUrl = imageInfo.url
    
    //find the paragraph with "p"
    //const imageTitle = 'Io Eclipse Shadow on Jupiter from Juno'
    const textElement = document.querySelector("p")
    textElement.innerText = imageTitle;

    //const imageUrl = 'https://apod.nasa.gov/apod/image/1910/JupiterShadow_JunoGill_3535.jpg'
    // Create a new image element from the url ...
    const imageElement = document.createElement('img')
    imageElement.src = imageUrl
    //add it to the document
    const imageContainer = document.querySelector('.image-container')
    imageContainer.appendChild(imageElement)
    })
}

//Math random returns between 0 and 1
const delay = Math.random() * 3000

//wait for a bit of time, and then run the function
setTimeout(getImageFromSpace, delay)
