#AJAX Tut

## Calls

### NYT
Most API's require a key of some kind. Others may also require OAUTH procedures.

NYT api, requires a key and we need to use the address made in the first step to query for articles.

To do the NYTimes ajaz request start with something like this:

$.getJSON(URL,function(data){
	console.log(data);
});

By using console.log(data) you are being able to see the data and then successfully iterate through it.

