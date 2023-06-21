$.ajax({
    url: 'https://kerbau.odaje.biz/getstaff.php',
    type: 'GET',
    dataType: 'json',
    // data: data,
    success: function (data) {
        $.each(data, function (i, item) {
            let jsonItem = JSON.parse(item)
            let email = $('<a></a>').attr('href', 'secondpage.html?id=' + jsonItem.employeeNumber).text(jsonItem.email)
            $('.listOfEmployee').append(email)
        })
    },
})