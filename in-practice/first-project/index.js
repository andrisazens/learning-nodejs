var CountStream = require("./countstream");
var countstream = new CountStream("book");
var http = require("http");

http.get("http://natureofcode.com/book/", function (res) {
    res.pipe(countstream);
});

countstream.on('total', function (count) {
    console.log("Total matches: " + count);
});