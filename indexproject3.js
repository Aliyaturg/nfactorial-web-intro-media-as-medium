fetch("https://api.nytimes.com/svc/topstories/v2/movies.json?api-key=gD9IU2QvCP1RIM33ArbttgsdVz8WnPkl")
.then(response => response.json())
.then(data => {
  console.log(data.results);
  const generalContent = document.getElementById("general-content");
  const subContent = document.querySelector("#sub-content");
  let saveContent = ``;
  let articles = ``;
  let articlesLength = data.results.length;

  for (let i = 0; i < articlesLength; i++) {
    const date = new Date(data.results[i].published_date);
    const options = { day: 'numeric', month: 'long' };
    const formattedDate = date.toLocaleDateString('en-US', options);
    const author = data.results[i].per_facet[0];
    const section = data.results[i].section;
    let element = `    <div class="element">
    <div class="elementContent">
      <div class="information">
        <img src="./assets/img/avatar.png"/>
        <p class="content-header">
          ${author} <span class="gray-text">in</span> ${section} • <span class="gray-text">${formattedDate}</span>
          </p>
      </div>
      <div class="textContent">
        <h1 id="id-${i}" class="links content-topic">${data.results[i].title}</h1>
        <p class="content-paragraph">
        ${data.results[i].abstract}
        </p>
      </div>
      <div class="content-footer">
        <div class="content-footer-left">
          <div class="language">${data.results[i].item_type}</div>
          <p>
            <span class="gray-text">12 min read</span> • <span class="gray-text">${data.results[i].byline}</span>
          </p>
        </div>
        <div class="squares">
          <div class="square"></div>
          <div class="square"></div>
          <div class="square"></div>
        </div>
      </div>
    </div>
    <div><img src="${data.results[i].multimedia[0].url}" class="imgContent" /></div>
  </div>`;
    articles += element;
    subContent.innerHTML += element;
  }
  saveContent = `<h1 class="header">Hello, World!</h1>
  <div id="sub-content">${elements}</div>`

  let currentIndex = 0;
  
  generalContent.addEventListener("click", (event) => {
        if(event.target.classList.contains("links")) {
          currentIndex = +(event.target.id).slice(3);
          
           let newContent = `<img class="arrow-left" src="./assets/img/arrow-left.png"/>
      <div class="content-header changed-content">
          <div class="content-left-header">
              <img width="64" height="64" src="./assets/img/avatar-changed.png"/>
              <div class="content-left-info">
                  <h3>${data.results[currentIndex].per_facet[0]}</h3>
                  <p class="gray-text">${data.results[currentIndex].published_date} · 12 min read · Member-only</p>
              </div>
          </div>
          <div class="content-right-header">
              <img src="./assets/img/linkedin.png"/>
              <img src="./assets/img/facebook.png"/>
              <img src="./assets/img/twitter.png"/>
          </div>
      </div>
      <div class="content-main">
          <h1 class="changed-text">${data.results[currentIndex].title}</h1>
          <p class="changed-p">${data.results[currentIndex].abstract}</p>
          <img class="changed-img" src="${data.results[currentIndex].multimedia[0].url}"/>
          <div class="changed-subheader">${data.results[currentIndex].title}</div>
          <p class="changed-subparagraph">${data.results[currentIndex].abstract}</p>
          
      </div>
      <div class="content-likes">
          <img src="./assets/img/likes.png"/>
          <img height="20" src="./assets/img/bookmark.png"/>       
      </div>`
       
          generalContent.innerHTML = newContent;
       
        } else if(event.target.classList.contains("arrow-left")) {
          generalContent.innerHTML = saveContent;
        }
        
      });
      

}).catch(error => console.log(error));