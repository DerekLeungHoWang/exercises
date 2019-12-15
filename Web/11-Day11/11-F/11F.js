$(function(){

    $('#form').on('submit', function(e){
        e.preventDefault();

        const getCountry =(country)=>{
            `https://restcountries.eu/rest/v2/name/${country}?fullText=true`
        }

        // let countryA = $.ajax({
        //     type: "GET",
        //     url: `https://restcountries.eu/rest/v2/name/Canada?fullText=true`

        // })

        // let countryB = $.ajax({
        //     type:"GET",
        //     url: `https://restcountries.eu/rest/v2/name/Hong Kong?fullText=true`
        // })
        
        $.when(getCountry).done(function(countryAData, countryBData){
            console.log(countryAData[0][0].latlng)
            console.log(countryBData[0][0].latlng)
        })
    })

    getCountry(Canada);
    getCountry(Hong Kong);
 })
