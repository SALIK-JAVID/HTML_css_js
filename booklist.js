document.getElementById("addBookBtn").addEventListener("click", function() {
    let title = prompt("Enter book title:");
    let author = prompt("Enter book author:");
    let description = prompt("Enter book description:");

    if (title && author && description) {
        let bookList = document.getElementById("bookList");
        let bookCard = document.createElement("div");
        bookCard.classList.add("book-card");
        bookCard.innerHTML = `<h3>${title}</h3><p><strong>Author:</strong> ${author}</p><p>${description}</p>`;
        bookList.appendChild(bookCard);
    }
});