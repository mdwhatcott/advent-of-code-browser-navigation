var url   = window.location.href;
var parts = url.split('/');
var year  = parts[parts.length-3];
var day   = parseInt(parts[parts.length-1]);

var previous = day - 1;
var next     = day + 1;

var previousDay = $('<a/>', {text: "[--]", href:"/"+year+"/day/" + previous.toString()});
var nextDay     = $('<a/>', {text: "[++]", href:"/"+year+"/day/" + next.toString()});

var puzzleTitle = $('article h2').text();

if (previous > 0)
	puzzleTitle = puzzleTitle.substr(3); // remove leading '---'
if (next <= 25)
	puzzleTitle = puzzleTitle.substr(0, puzzleTitle.length-3); // remove trailing '+++'

var title = $('article h2');
title.html(puzzleTitle);

if (previous > 0)
	title.prepend(previousDay);
if (next <= 25)
	title.append(nextDay);
