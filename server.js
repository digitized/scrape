var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();

app.get('/scrape', function(req, res){
	// Let's scrape Anchorman 2
	url = 'http://www.reddit.com/r/nbastreams';

	request(url, function(error, response, html){
		if(!error){
			var $ = cheerio.load(html);

			// var title, release, rating;
			// var json = { title : "", release : "", rating : ""};
			var threads;
			
			$('#siteTable').filter(function(){
		        // var data = $(this);
		        // title = data.children().first().text();
		        // release = data.children().last().children().text();

		        // json.title = title;
		        // json.release = release;
		        threads = $(this);
	        })

	        // $('.star-box-giga-star').filter(function(){
	        // 	var data = $(this);
	        // 	rating = data.text();

	        // 	json.rating = rating;
	        // })
		}

		fs.writeFile('output.txt', threads, function(err){
        	console.log('File successfully written! - Check your project directory for the output.json file');
        	console.log(threads);
        })

        // res.send(threads)
	})
})

app.listen('8081')
console.log('Magic happens on port 8081');
exports = module.exports = app; 	