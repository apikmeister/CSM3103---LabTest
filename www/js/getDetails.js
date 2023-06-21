$(document).ready(function () {
    var urlParams = new URLSearchParams(window.location.search);
    var id = urlParams.get('id');

    $.ajax({
        url: 'https://kerbau.odaje.biz/getstaffbyid.php?id=' + id,
        type: 'GET',
        dataType: 'json',
        // data: { id: id },
        success: function (data) {
            let employeeDetails = JSON.parse(data[1])
            console.log(employeeDetails)
            var table = $(".table");
            var rows = table.find('tr');

            rows.each(function (index) {
                var row = $(this);
                var attribute = Object.keys(employeeDetails)[index];
                var value = employeeDetails[attribute];

                var valueCell = $("<td></td>").text(value);
                row.append(valueCell);
            });
        },
        error: function (xhr, status, error) {
            console.log('Error:', error);
        }
    });
});
