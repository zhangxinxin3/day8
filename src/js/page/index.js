require(['../main'], function() {
    require([], function() {
        var xhr = new XMLHttpRequest();
        xhr.open('get', '/list');
        xhr.onload = function(e) {
            render(JSON.parse(e.target.responseText));
        }
        xhr.send();
        var lists = document.querySelector('.lists');

        function render(data) {
            lists.innerHTML += data.data.map(function(item) {
                return `<li>
                            <p>${item.title}</p>
                            <img src="${item.img}">
                            <p>${item.price}</p>
                        </li>`
            }).join('');
        }
    });
});