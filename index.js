const url = require('url');
const querystring = require('querystring');

var arg = url.parse(process.argv[2]);

var parameters = ['protocol', 'host', 'hostname', 'port', 'path', 'pathname', 'query'];

var queries = querystring.parse(arg['query']);

parameters.forEach(function(item){
    console.log('the ' + item + ' is ' + arg[item]);
});

for (var item in queries){
    console.log('the value of the ' + item + ' parameter is ' + queries[item]);
}
