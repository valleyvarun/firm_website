// Fetch the content of the .txt file and display it in the #about-text div
fetch('about_us.txt') // Replace 'about.txt' with the path to your .txt file
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to fetch the text file.');
        }
        return response.text();
    })
    .then(data => {
        document.getElementById('about-text').innerHTML = `<p>${data}</p>`;
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('about-text').innerHTML = `<p>Failed to load content.</p>`;
    });