fetch('https://alpha-vantage.p.rapidapi.com/query').then((response)=>{
    console.log('resolved', response);
    return response.json()
}).catch((err)=>{
    console.log('rejected', err);
});