/**
 * Created by ltleelong on 2017/3/26.
 *
 */
var request = require('request');
var iconv = require('iconv-lite');
var cheerio = require('cheerio');
var debug = require('debug');
var logger = debug('crawl:read');
module.exports = function(url,callback){
    //读取出入的url地址并得到响应体body;
    request({url,encoding:null},function(err,response,body){
          body= iconv.decode(body,'gbk');
        var movies = [];
        var $ = cheerio.load(body);
        //通过筛选符找出我们想要的电影标题
        $('.keyword .list-title').each(function(){
            var $this = $(this);
            var movie = {
                name:$this.text(),//电影名称
                url:$this.attr('href')//电影的url地址;
            };
            logger(`读取到电影:${movie.name}`)
            movies.push(movie);
        });
        callback(err,movies);
    })
};
/*
var url='http://top.baidu.com/buzz?b=26&c=1&fr=topcategory_c1';

module.exports(url,function(err,movies){
    console.log(movies);
})*/
