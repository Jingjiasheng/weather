const fs=require('fs');

module.exports.loadhtml=function(htmlpath,res){
	fs.readFile(htmlpath,function(err, data){
        if(!err){
            res.writeHead(200, {"Content-Type": "text/html;charset=UTF-8"});
            res.end(data);
        }else{
            throw err;
        }
    });
}