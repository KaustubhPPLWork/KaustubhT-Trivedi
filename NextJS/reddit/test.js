let data


fetch("https://swapi.dev/api/people")
    .then((res) => res.json())
    .then(resData => data = resData)


    console.log(data.name)