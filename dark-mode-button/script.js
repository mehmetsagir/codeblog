$('#switch').on('click', () => {
    if ($('#switch').prop('checked')) {
        $('body').addClass('dark');
    } else {
        $('body').removeClass('dark');
    }
})