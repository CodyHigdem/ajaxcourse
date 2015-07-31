
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");
    //MAKE STREET VARIABLES
    var street = $('#street').val();
    var city =  $('#city').val();
    var address = street + ', ' + city;
    // load streetview
    $greeting.text('So, you want to live at ' + address + '?');

    // make url
    var streetView = 'http://maps.googleapis.com/maps/api/streetview?size=600x400&location=' + address;

    //from udacity course, look at the append it's a body spot woot
    $body.append('<img class="bgimg" src="'+ streetView +'">');

    return false;
};

$('#form-container').submit(loadData);
