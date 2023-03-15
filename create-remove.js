/****************************** ADD DOG BUTTON ******************************/
const add = document.getElementById("add");
add.addEventListener("click", async () => {
    try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random")
        const data = await res.json();

        const url = data.message; // URL of new dog image

        /*--------------- Get breed (Hint: Parse from URL) ---------------- */
        const breed = url.split('/')[4]
        console.log(breed)
       

        /*------------ Create new dog card with the url above ------------- */
        /* (use the HTML structure for the current dog image in the index.html
            file to create a new image with the url) */
        const li = document.createElement('li')

        li.innerHTML = `<figure>
        <img src="${url}"/>
        <figcaption>${breed}</figcaption>
    </figure>`
        // const figure = document.createElement('figure')
        // const image = document.createElement('img')
        // const figcaption = document.createElement('figcaption')
        // image.setAttribute('src', url)
        // figcaption.innerText = breed
        // figure.appendChild(image)
        // figure.appendChild(figcaption)
        // li.appendChild(figure)

        const ul = document.querySelector('ul')
        ul.appendChild(li)
        /* Add the new dog card as a child to the ul in the .gallery element */
        // Your code here

    } catch (e) {
        console.log("Couldn't fetch dog :(")
    }
});

/************************** REMOVE FIRST DOG BUTTON **************************/
const removeFirst = document.getElementById("remove-first");
removeFirst.addEventListener("click", () => {
    /*-------------------- Select the first dog card --------------------- */
    const first = document.querySelector('li')
    first.remove()
    /*-------------------- Remove the first dog card --------------------- */
    // Your code here
});

/************************** REMOVE LAST DOG BUTTON ***************************/
const removeLast = document.getElementById("remove-last");
removeLast.addEventListener("click", () => {
    /*-------------------- Select the last dog card ----------------------- */
   const all = document.querySelectorAll('li')
   console.log(all)
   const last = all[all.length-1]
   last.remove()

    /*-------------------- Remove the last dog card ----------------------- */
    // Your code here
});