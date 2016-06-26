var CountStream = require("./countstream");
var countstream = new CountStream("book");

http.get("http://www.manning.com", function (res) {
    res.pipe(countstream);
});

countstream.on('total', function (count) {
    console.log("Total matches: " + total);
});