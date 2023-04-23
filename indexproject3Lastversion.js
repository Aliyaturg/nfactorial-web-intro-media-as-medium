fetch("https://api.nytimes.com/svc/topstories/v2/movies.json?api-key=gD9IU2QvCP1RIM33ArbttgsdVz8WnPkl")
.then(response => response.json())
.then(data => {
  console.log(data.results);
  const main = document.getElementById("main");
  const content = document.querySelector("#content");
  // let mainContent = ``;
  // let elements = ``;
  let articlesLength = data.results.length;
  // var arr = [];

  
  
  if (document.URL.includes ("project3.html")) {
  for (let i = 0; i < articlesLength; i++) {
    const date = new Date(data.results[i].published_date);
    const options = { day: 'numeric', month: 'long' };
    const formattedDate = date.toLocaleDateString('en-US', options);
    const author = data.results[i].per_facet[0];
    const section = data.results[i].section;
    const paragraph11 = document.querySelector("#paragraph11");
    paragraph11.innerHTML = data.results[i].abstract;
    const div115 = document.querySelector("#div-115");
    div115.innerHTML = data.results[i].item_type;
    const span11 = document.querySelector("#id-span1");
    span11.innerHTML = data.results[i].byline;
    const image11 = document.querySelector("#id-img11");
    image11.src= data.results[i].multimedia[0].url;
    const heading5 = document.querySelector("#id-heading5");
    heading5.innerHTML = data.results[i].title;
    heading5.dataset.articleId= `${i}`;
    const span2 = document.querySelector("#id-span2");
    span2.innerHTML = author;
    const span3 = document.querySelector("#id-span3");
    span3.innerHTML = section;
    const span4 = document.querySelector("#id-span4");
    span4.innerHTML = formattedDate;
    const contentEl = document.getElementById('content-element1');
    let element = contentEl.innerHTML;
    content.innerHTML += element;
    
  //   var object = {
  //     title: data.results[i].title,
  //     number: `${i}`
  //   }
  //   arr.push(object);

  }
}



  
  const articles = document.querySelectorAll('.article');
  articles.forEach(article=>{
    article.addEventListener ('click', ()=> {
     
      const articleId = article.dataset.articleId;
      window.location.href = `subpageProject3.html?id=${articleId}`;
      // content.innerHTML = "";
    

    // if (document.URL.includes ("subpageProject3.html")) {
      const params = new URLSearchParams(window.location.search);
      articleId = params.get('id');
      
      fetch ("https://api.nytimes.com/svc/topstories/v2/movies.json?api-key=gD9IU2QvCP1RIM33ArbttgsdVz8WnPkl")
      .then(response => response.json())
      .then(data => {
            const heading3 = document.querySelector("#h3-id");
            heading3.innerHTML = data.results[articleId].per_facet[0];
            const paragraph1 = document.querySelector("#id-paragraph1");
            paragraph1.innerHTML = data.results[articleId].published_date;
            const heading1 = document.querySelector("#id-heading1");
            heading1.innerHTML = data.results[articleId].title;
            const paragraph2 = document.querySelector("#id-paragraph2");
            paragraph2.innerHTML = data.results[articleId].abstract;
            const image1 = document.querySelector("#id-image1");
            image1.src= data.results[articleId].multimedia[0].url;
            const subheading = document.querySelector("#id-subheading");
            subheading.innerHTML = data.results[articleId].title;
            const paragraph3 = document.querySelector("#id-paragraph3");
            paragraph3.innerHTML = data.results[articleId].abstract; 
            // console.log(articleId);
    
      })
    })
    // }
  })

 
  // main.addEventListener("click", (event) => {
  //       // if(event.target.classList.contains("links")) {
  //       //   currentIndex = +(event.target.role);
  //       //   // console.log(currentIndex);
  //       //   // var currentObject = event.target.heading5.innerHTML;
  //       //   window.location.href = 'subpageProject3.html?id=${i}';
          
  //       //   // main.innerHTML = "";
  //       // }
          
  //           if(event.target.classList.contains("arrow-left")) {
  //             window.location.href = './project3.html';
  //           }
            
        
  //     });

      
      // if (document.title === 'Media as Medium01') {
      //   const heading3 = document.querySelector("#h3-id");
      //   heading3.innerHTML = data.results[currentIndex].per_facet[0];
      //   const paragraph1 = document.querySelector("#id-paragraph1");
      //   paragraph1.innerHTML = data.results[currentIndex].published_date;
      //   const heading1 = document.querySelector("#id-heading1");
      //   heading1.innerHTML = data.results[currentIndex].title;
      //   const paragraph2 = document.querySelector("#id-paragraph2");
      //   paragraph2.innerHTML = data.results[currentIndex].abstract;
      //   const image1 = document.querySelector("#id-image1");
      //   image1.src= data.results[currentIndex].multimedia[0].url;
      //   const subheading = document.querySelector("#id-subheading");
      //   subheading.innerHTML = data.results[currentIndex].title;
      //   const paragraph3 = document.querySelector("#id-paragraph3");
      //   paragraph3.innerHTML = data.results[currentIndex].abstract; }
 }).catch(error => console.log(error));
    // объявить массив до цикла, в цикле записать в каждую ячейку номер топика
