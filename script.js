const dictionary = (word) => {
    const url = `https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=${word}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '47cfc7bb83msh6df0e2f9e2eb6e1p153697jsnbde049d857ab',
            'x-rapidapi-host': 'dictionary-by-api-ninjas.p.rapidapi.com'
        }
    };

    fetch(url, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response);
            document.getElementById('word').innerHTML = response.word;
            document.getElementById('definition').innerHTML = response.definition.replace(/\d/g,"<br>$&");
        })
        .catch(err => console.log(err));
};

document.getElementById("searchBtn").addEventListener("click", (e) => {
    e.preventDefault();
    dictionary(document.querySelector("input[type='search']").value);
});
