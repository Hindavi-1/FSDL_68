const images = [

    "https://media.istockphoto.com/id/518356812/photo/tropical-sea-and-rocks.jpg?s=612x612&w=0&k=20&c=bRAfkVsQ-d5wQjYiRWupDBThGr1Zn7aEP98VWFaxBy8=",
    "https://media.istockphoto.com/id/1220728836/photo/tropical-island-palm-tree-beach-from-above.jpg?s=612x612&w=0&k=20&c=1cYuKjGdtJwPRYT-iHk4S49C2-fq-U05JPzD66wR9BE=",
    "https://media.istockphoto.com/id/1133073540/photo/tropical-beach-and-beautiful-sunrise-view-in-punta-cana-bay-dominican-republic.jpg?s=612x612&w=0&k=20&c=YsLPlxvmgdx4DOjxB3VFYju6pMqTARvYwy4KkfnM09c=",
    "https://media.istockphoto.com/id/663787398/photo/bora-bora-tahiti.jpg?s=612x612&w=0&k=20&c=bItAfTDdmn6zBCJ8MvKmDQ9fdpYplF6wnxZ8j4eKoBQ=",
    "https://media.istockphoto.com/id/1195458582/photo/aerial-view-of-misty-mountains-at-sunrise.jpg?s=612x612&w=0&k=20&c=UQ4ZHZk0H_c75Vy9Wv5VaXn00obvPT98LMTOvjXZOWc=",
    "https://media.istockphoto.com/id/956989068/photo/two-deckchairs-under-parasol-in-tropical-beach-at-sunset.jpg?s=612x612&w=0&k=20&c=MwXz_DmwHh4u3k4JD3r0YPRiPn0mHP6GdVSelD9WieM="
];

// Dynamically generate gallery images
const galleryContainer = document.getElementById("gallery");

images.forEach(src => {
    const col = document.createElement("div");
    col.className = "col-md-4";

    const img = document.createElement("img");
    img.src = src;
    img.className = "img-fluid gallery-img";
    img.setAttribute("data-bs-toggle", "modal");
    img.setAttribute("data-bs-target", "#imageModal");
    img.onclick = () => showImage(src);

    col.appendChild(img);
    galleryContainer.appendChild(col);
});

// Function to update modal image
function showImage(src) {
    document.getElementById("modalImage").src = src;
}
