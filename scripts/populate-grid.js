for (var i = 1; i <= 104; i++) {
    var scaleFadeDiv = document.createElement("div");
    scaleFadeDiv.className = "scale-fade";

    var gridItemDiv = document.createElement("div");
    gridItemDiv.className = "grid-item";

    var imgTag = document.createElement("img");
    imgTag.src = "images/demo (" + i + ").jpg";
    imgTag.alt = "Demo" + i;
    imgTag.className = "img";

    gridItemDiv.appendChild(imgTag);
    scaleFadeDiv.appendChild(gridItemDiv);

    document.getElementById("imageContainer").appendChild(scaleFadeDiv);
}
