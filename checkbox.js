$(function () {
    disableCheckOut();
    $('.chckHead').click(function () {
        if ($(".chckHead").prop('checked')) {
            $('.chcktbl').prop('checked', true);
            disableCheckOut();
        } else {
            $('.chcktbl').prop('checked', false)
            disableCheckOut();
        }
    });
    $('.chcktbl').click(function () {
        disableCheckOut();
    });
    $('#btnSubmit').click(function () {
        var value = [];
        $('.chcktbl:checked').each(function (res) {
            value.push($(this).val());
        })
        console.log(value);
        alert(value)
    });
});
function disableCheckOut() {
    if ($('.chcktbl:checked').length === 0) {
        $("#btnSubmit").attr("disabled", true);
    } else {
        $("#btnSubmit").attr("disabled", false);
    }
}