try{
    var socket = io('/' + igra);
} catch(e) {
    console.log('Ne moze ucitati io');
    console.log(e);
}

socket.on('zaponiIgru', function() {
    console.log('zapocni igru');
});

socket.on('userDisconected', function() {
    console.log('prekini igru');
});