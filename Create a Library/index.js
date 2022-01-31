async function fetchData() {

    let display = document.getElementById("display")
    let res = await fetch("http://localhost:3000/data")
    let data = await res.json()
    console.log(data)

    for ( var i = 0; i < data.length; i++ ) {
        let tr = document.createElement("tr")

        let td1 = document.createElement("td")
        td1.append(data[i].book)
        tr.append(td1)

        let td2 = document.createElement("td")
        td2.append(data[i].author)
        tr.append(td2)

        let td3 = document.createElement("td")
        td3.append(data[i].comments)
        tr.append(td3)
        display.append(tr)

    }
}

fetchData()

let btn = document.getElementById("submit")

async function postData() {
    let bookName = document.getElementById("name").value
    let bookAuthor = document.getElementById("author").value
    let bookComment = document.getElementById("comment").value
    
    const data = {
        book: bookName,
        author: bookAuthor,
        comments: bookComment,
    }
    fetch('http://localhost:3000/data', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    })

    .then(response => response.json())
    .then(data => {
    console.log('Success:', data);
    })
}

btn.addEventListener("click", postData)