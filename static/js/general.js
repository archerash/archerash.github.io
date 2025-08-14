function imageToggle(element, file, width, height) {
    const imgContainer = document.getElementById(`${element}`);

    if(imgContainer.querySelector('img')) {
        imgContainer.innerHTML = '<p></p>';
    } else {
        imgContainer.innerHTML = `<img src="${file}" width="${width}" height=${height}>`;
    }
}
