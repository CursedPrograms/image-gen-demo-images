async function loadImageAsync(imageName, extensions) {
  for (const extension of extensions) {
    const imageSrc = `images/${imageName}.${extension}`;

    try {
      await new Promise((resolve, reject) => {
        const img = new Image();
        img.src = imageSrc;
        img.onload = resolve;
        img.onerror = reject;
      });

      return imageSrc;
    } catch (error) {

    }
  }
  return null;
}

async function loadImages() {
  for (let i = 1; i <= 192; i++) {
    const scaleFadeDiv = document.createElement("div");
    scaleFadeDiv.className = "scale-fade";

    const gridItemDiv = document.createElement("div");
    gridItemDiv.className = "grid-item";

    const imgTag = document.createElement("img");

    const imageName = `demo (${i})`;
    const supportedExtensions = ["jpg", "png"];

    const imageSrc = await loadImageAsync(imageName, supportedExtensions);

    if (imageSrc) {
      imgTag.src = imageSrc;
      imgTag.alt = `demo${i}`;
      imgTag.className = "img";

      gridItemDiv.appendChild(imgTag);
      scaleFadeDiv.appendChild(gridItemDiv);
      document.getElementById("imageContainer").appendChild(scaleFadeDiv);
    }
  }
}

loadImages();
