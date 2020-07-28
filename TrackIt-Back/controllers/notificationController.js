const mongoose = require('mongoose');
const response = require('./../libs/responseLib')
const logger = require('./../libs/loggerLib');

/* Models */
const notifyModel = mongoose.model('Notification')




let getNotifications=(req,res)=>{
    if(req.params.userId==null){
        let apiresponse=response.generate(true,403,"No User Id Passes","Pass The UserId")
        res.send(apiresponse)
    }
    notifyModel.findOne({'userId':req.params.userId},(err,result)=>{
        if(err) {
            let apiresponse = response.generate(true, 403, 'Error while editting Issue', err)
            res.send(apiresponse)
        }
        else {
            let apiresponse = response.generate(false, 200, 'All Notifications', result)
            res.send(apiresponse)
        }
    })
}

let readNotificationForIssue=(req,res)=>{
    notifyModel.update({'userId':req.params.userId},{$pull:{'notify':{'issueId':req.params.issueId}}},(err,result)=>{
        if(err) {
            let apiresponse = response.generate(true, 403, 'Error while fetching Notifications', err)
            res.send(apiresponse)
        }
        else {
            let apiresponse = response.generate(false, 200, 'All Notifications', result)
            res.send(apiresponse)
        } 
    })
}

let markAllRead=(req,res)=>{
    notifyModel.update({'userId':req.params.userId},{$set:{'notify':[]}},(err,result)=>{
        if(err) {
            let apiresponse = response.generate(true, 403, 'Error while Marking as read', err)
            res.send(apiresponse)
        }
        else {
            let apiresponse = response.generate(false, 200, 'All Notifications marked as read', result)
            res.send(apiresponse)
        } 
    })
}


module.exports={
    getNotifications:getNotifications,
    readNotificationForIssue:readNotificationForIssue,
    markAllRead:markAllRead
}