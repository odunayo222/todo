document.addEventListener('DOMContentLoaded', function () {
        document.querySelector('#submit').disabled = true;
        document.querySelector('#task').onkeyup = function () {
            if (document.querySelector('#task').value.length > 0) {
               document.querySelector('#submit').disabled = false;
            }
            else {
               document.querySelector('#submit').disabled = true;
            }
       }
        document.querySelector('form').onsubmit = function () {
            const task = document.querySelector('#task').value;
            if (document.querySelector('#task').value.length > 0) {
                document.querySelector('#submit').disabled = false;
             }
             else {
                document.querySelector('#submit').disabled = true;
             }
            document.querySelector('#tasks').innerHTML += `<li>${task}</li>`;
            document.querySelector('#task').value = '';
            document.querySelector('#submit').disabled = true;
            return false;
        }

        // Add a "checked" symbol when clicking on a list item
        var list = document.querySelector('ul');
        list.addEventListener('click', function(ev) {
        if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('checked');
        }
        }, false);

    })