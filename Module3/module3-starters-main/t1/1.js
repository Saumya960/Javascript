var buttonElement = window.document.querySelector('.button');

buttonElement.addEventListener('click', function () {

    var targetElement = document.getElementById("target");

    targetElement.innerHTML = `
        <li>First item</li>
        <li>Second item</li>
        <li>Third item</li>
    `;

    targetElement.classList.add("my-list");

    alert('Button Clicked!');
});