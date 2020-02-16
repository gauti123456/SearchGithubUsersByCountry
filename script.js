$(document).ready(function () {

    var country = ''
    var user = ''

    $.get("https://api.github.com/search/users?q=Afghanistan+in:location&per_page=100", function (data) {
            
            console.log(data)

            data.items.forEach(element => {

                user = `<a target="_blank" href="${element.html_url}"><img class="img-thumbnail ml-4" width="100" height="100" src="${element.avatar_url}"/></a>`

                $("#results").append(user)
                
            });
            
        })
    
    $.get("http://localhost:5500/countries.json", function (data) {
        console.log(data)

        data.forEach(element => {
            
            country = `<option value="${element.name}">${element.name}</option>`

            $("#countries").append(country)

        });
    })

    $("#countries").change(function () {
        var country = $("#countries option:selected").val()

        searchUserByCountry(country)
    })

    function searchUserByCountry(country) {

        $("#results").empty()

        $.get("https://api.github.com/search/users?q=" + country + "+in:location&per_page=100", function (data) {
            
            console.log(data)

            data.items.forEach(element => {

                user = `<a target="_blank" href="${element.html_url}"><img class="img-thumbnail ml-4" width="100" height="100" src="${element.avatar_url}"/></a>`

                $("#results").append(user)
                
            });
            
        })
    }


})