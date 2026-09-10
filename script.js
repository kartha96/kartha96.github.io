const filters = document.querySelectorAll(".filter");
const photos = document.querySelectorAll(".photo");

filters.forEach(filter => {
    filter.addEventListener("click", () => {

        // Remove active state
        filters.forEach(button => {
            button.classList.remove("active");
        });

        // Activate selected filter
        filter.classList.add("active");

        const selectedCategory = filter.dataset.filter;

        photos.forEach(photo => {

            if (
                selectedCategory === "all" ||
                photo.classList.contains(selectedCategory)
            ) {
                photo.style.display = "block";
            } else {
                photo.style.display = "none";
            }

        });
    });
});


// Simple photo viewer

photos.forEach(photo => {

    photo.addEventListener("click", () => {

        const image = photo.querySelector("img");

        const viewer = document.createElement("div");

        viewer.className = "photo-viewer";

        viewer.innerHTML = `
            <span class="close-viewer">&times;</span>
            <img src="${image.src}" alt="${image.alt}">
        `;

        document.body.appendChild(viewer);

        viewer.addEventListener("click", (event) => {

            if (
                event.target === viewer ||
                event.target.classList.contains("close-viewer")
            ) {
                viewer.remove();
            }

        });

    });

});
