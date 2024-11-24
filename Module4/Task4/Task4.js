function searchSeries(event) {
      event.preventDefault();

      const query = document.getElementById("query").value;
      const apiUrl = `https://api.tvmaze.com/search/shows?q=${query}`;

      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          // Clear old results
          document.getElementById("results").innerHTML = '';

          // Display information for each show
          data.forEach(tvShow => {
            const article = document.createElement("article");

            // Show Name
            const nameElement = document.createElement("h2");
            nameElement.textContent = tvShow.show.name;
            article.appendChild(nameElement);

            // Show URL
            const urlElement = document.createElement("a");
            urlElement.textContent = "Details";
            urlElement.href = tvShow.show.url;
            urlElement.target = "_blank";
            article.appendChild(urlElement);

            // Medium Image
            const imageElement = document.createElement("img");
            const imageUrl = tvShow.show.image ? tvShow.show.image.medium : 'https://via.placeholder.com/210x295?text=Not%20Found';
            imageElement.src = imageUrl;
            imageElement.alt = tvShow.show.name;
            article.appendChild(imageElement);

            // Summary
            const summaryElement = document.createElement("div");
            summaryElement.innerHTML = tvShow.show.summary; // Note: Using innerHTML to preserve HTML tags in summary
            article.appendChild(summaryElement);

            // Append article to results
            document.getElementById("results").appendChild(article);
          });
        })
        .catch(error => {
          console.error("Error fetching data:", error);
        });
    }