function toggleMode() {
    const html = document.documentElement;

    // if(html.classList.contains('light')) {
    //     html.classList.remove('light');
    // }
    // else {
    //     html.classList.add('light');
    // }

    // OR
    html.classList.toggle('light');

    const img = document.querySelector("#profile img");

    if(html.classList.contains('light')) {
        img.setAttribute('src', './assets/avatar-light.png');
    }
    else {
        img.setAttribute('src', './assets/avatar.png');
    }
}