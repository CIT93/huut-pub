function renderPhotos(photos) {
    photos.forEach((img) => {
        const imgEl = document.createElement("img");
        imgEl.setAttribute("src", img.thumbnailUrl);
        document.getElementById("output").appendChild(imgEl);
    })
}

const url = "https://jsonplaceholder.typicode.com/photos";

async function getData() {
  try {
    const response = await fetch(url);
    const data = await response.json();

    if (response.status === 200) {
      console.log(`Success`, data);
      renderPhotos(data);
    } else {
      console.log(`Server error: ${response.status}`, data);
    }
  } catch (error) {
    console.log("Fetch error", error);
  }
}

getData();

