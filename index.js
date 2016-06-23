var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

app.get('/', function(req, res) {
    var start = new Date().getTime();
    
    console.log("Start: " + start);
    
    var primes = getPrimes(10000);
    
    var stop = new Date().getTime() - start;
    
    console.log("Stop: " + stop);
    
    var json = {
        calculationTime: stop
    }
    
    res.end(JSON.stringify(json));
});

app.listen(port, function() {
    console.log("App running at port " + port);
});

function getPrimes(max) {
    sieve = [];
    primes = [];
    var i;
    var j;
    
    for(i = 2; i <= max; i++) {
        if(!sieve[i]) {
            
            primes.push(i);
            
            for(j = i << 1; j <= max; j += i) {
                sieve[j] = true;
            }
        }
    }
    
    return primes;
}