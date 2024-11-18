// Default
$('.default').click(function() {
   Snackbar.show({text: 'Hello World! Life is good.', duration: 2000});
});
// Position
$('.top-left').click(function() {
    Snackbar.show({
        text: 'Hello World! Life is good',
        pos: 'top-left'
    });
});
$('.top-center').click(function() {
    Snackbar.show({
        text: 'Hello World! Life is good',
        pos: 'top-center'
    });
});
$('.top-right').click(function() {
    Snackbar.show({
        text: 'Hello World! Life is good',
        pos: 'top-right'
    });
});
$('.bottom-left').click(function() {
    Snackbar.show({
        text: 'Hello World! Life is good',
        pos: 'bottom-left'
    });
});
$('.bottom-center').click(function() {
    Snackbar.show({
        text: 'Hello World! Life is good',
        pos: 'bottom-center'
    });
});
$('.bottom-right').click(function() {
    Snackbar.show({
        text: 'Hello World! Life is good',
        pos: 'bottom-right'
    });
});
// Action Button
$('.no-action').click(function() {
    Snackbar.show({
        showAction: false
    });
});
// Action Text
$('.action-text').click(function() {
    Snackbar.show({
        actionText: 'Close!'
    });
});
// Text Color
$('.text-color').click(function() {
    Snackbar.show({
        actionTextColor: '#e91e63',
    });
});
// Click Callback
$('.click-callback').click(function() {
    Snackbar.show({
        text: 'Hello World! Life is good',
        actionText: 'Close!',
        width: 'auto',
        onActionClick: function(element) {
            //Set opacity of element to 0 to close Snackbar 
            $(element).css('opacity', 0);
            Snackbar.show({
                text: 'Thanks for clicking the  <strong>close</strong>  button!',
                showActionButton: false
            });
        }
    });
});
// Duration
$('.duration').click(function() {
    Snackbar.show({
        text: 'Hello World! Life is good for 2 seconds',
        duration: 2000,
    });
});
