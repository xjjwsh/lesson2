/**
 * Created by wangsh on 2016/3/16.
 */
function access(req,res,next){
    var now = new Date().getHours();
    if(now <13 || now >18){
        console.log("time is error");
        res.writeHead(503,{'Content-Type':'text/plain'});
        res.end('下午1点到6点之外禁止访问！');
    }else{
        next();
    }
}
exports.access = access;