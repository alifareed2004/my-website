document.addEventListener('DOMContentLoaded', function() {
    const blogList = document.getElementById('blog-list');
  
    fetch('./posts.json')
      .then(response => response.json())
      .then(posts => {
        posts.forEach(post => {
          const postElement = document.createElement('div');
          postElement.className ='blog_posts';
          postElement.innerHTML = 
          `
            <h3>${post.title}</h3>
            <p>${post.description}</p>
          `;
          blogList.appendChild(postElement);
        });
      })
      .catch(error => console.error('Error loading blog posts:', error));
  });

/*document.addEventListener('DOMContentLoaded', function() {
    const blogList = document.getElementById('blog-list');

    fetch('./posts.json')
    .then(response => response.json())
    .then(posts => {
        posts.forEach(post => {
            const postElement = document.createElement('div');
            // manipulate postElement to show the content of the blog post with the specific style defined for it
            postElement.className = 'blog_posts';
            postElement.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.description}</p>
            `;
            blogList.appendChild(postElement);
        });
    })

    .catch(error => console.error('Error loading blog posts:', error));
});*/

/*document.addEventListener('DOMContentLoaded', function() {
    const blogList = document.getElementById('blog-list');
    
    fetch('./posts.json')
    .then(response => response.json())
    .then(posts => {
        posts.forEach(post => {
            // Create a container for each post
            const postElement = document.createElement('div');
            postElement.classList.add('post'); // Add a class for styling

            // Create and append the title
            const titleElement = document.createElement('h2');
            titleElement.textContent = post.title;
            postElement.appendChild(titleElement);

            // Create and append the content
            const contentElement = document.createElement('p');
            contentElement.textContent = post.description;
            postElement.appendChild(contentElement);

            // Append the post to the blog list
            blogList.appendChild(postElement);
        });
    })

    .catch(error => console.error('Error loading blog posts:', error));
});
*/