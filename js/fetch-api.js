const container = document.querySelector('.blogs');

const renderPosts = async () => {
    let uri = 'https://restcountries.com/v3.1/all';

    const res = await fetch(uri);
    const posts = await res.json();
    console.log(posts)
    
    let template = '';

    posts.map(post => {
        template += `
        <div class="post">
            <div class='indPost>
              <h2 >Name: ${post.name.common}</h2>
              <img src="${post.flags.png}" alt="" >
              <h2>Capital: ${post.capital}</h2>
              <h2>Population: ${post.population}</h2>
              <h2>Currency: ${post.currencies}</h2>
              <h2>${post.languages}</h2>
              <h2>Time Zone: ${post.timezones}</h2>
            </div>
             
        </div>
        `
    })

   container.innerHTML = template;

}

window.addEventListener('DOMContentLoaded', () => renderPosts());