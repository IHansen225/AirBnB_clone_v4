window.onload = function () {
    const url = 'http://localhost:5001/api/v1/status/';
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const element = document.querySelector('#api_status');
        if (data.status === 'OK') {
          element.classList.add('available');
        } else {
          element.classList.remove('available');
        }
      })
      .catch(error => {
        const element = document.querySelector('#api_status');
        element.classList.remove('available');
      });
    const url1 = 'http://localhost:5001/api/v1/places_search/';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({})
    };
    fetch(url, options)
      .then(response => response.json())
      .then(data => {
        // Itera sobre el resultado de la solicitud
        data.forEach(place => {
          // Crea un elemento article
          const article = document.createElement('article');
          article.classList.add('place');
  
          // Crea un título para el lugar
          const title = document.createElement('h2');
          title.textContent = place.name;
          article.appendChild(title);
  
          // Crea una descripción para el lugar
          const description = document.createElement('p');
          description.textContent = place.description;
          article.appendChild(description);
  
          // Agrega el elemento article a la sección places
          const places = document.querySelector('.places');
          places.appendChild(article);
        });
      })
      .catch(error => console.error(error));
    const checkbox = document.querySelector('#sad');
    const listofchilds = checkbox.children;
    const title = document.querySelector('.amenities h4');
    const list_checked = [];
    for (const x of listofchilds) {
      const input = x.firstElementChild;
      input.addEventListener('change', function () {
        if (input.checked) {
          list_checked.push(input.getAttribute('data-name'));
        } else {
          const index = list_checked.indexOf(input.getAttribute('data-name'));
          list_checked.splice(index, 1);
        }
        let string = '';
        let count = 0;
        for (const i of list_checked) {
          if (count === list_checked.length - 1) {
            string += i;
          } else {
            string += i + ', ';
          }
          count += 1;
        }
        if (string.length >= 27) {
          string = string.substring(0, 27) + '...';
        }
        title.textContent = string;
      });
    }
  };