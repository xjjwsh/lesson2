/**
 * Created by wangsh on 2016/3/16.
 */
function access(req,res,next){
    var now = new Date().getHours();
    if(now <13 || now >18){
        console.log("time is error");
        res.writeHead(503,{'Content-Type':'text/plain'});
        res.end('����1�㵽6��֮���ֹ���ʣ�');
    }else{
        next();
    }
}
exports.access = access;