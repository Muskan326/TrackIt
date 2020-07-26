const mongoose = require('mongoose');
const shortid = require('shortid');
const response = require('./../libs/responseLib')
const logger = require('./../libs/loggerLib');
const check = require('./../libs/checkLib');

/* Models */
const issueModel = mongoose.model('Issue')
const userModel = mongoose.model('User')
const watchModel = mongoose.model('Watcher')
const notifyModel = mongoose.model('Notification')


/*----------------------------------------------------------------------------------------------------------------------------------------*/

let getAllIssues = (req, res) => {
    issueModel.find({}, (err, result) => {
        if (err) {
            let apiresponse = response.generate(true, 403, 'Error While fetching Issue details', err)
            res.send(apiresponse)
        }
        else {
            let apiresponse = response.generate(false, 200, 'Issue Details', result)
            res.send(apiresponse)
        }
    })
}


/*----------------------------------------------------------------------------------------------------------------------------------------*/
let getIssueDetails = (req, res) => {
    issueModel.findOne({ 'issueId': req.params.issueId }, (err, result) => {
        if (err) {
            let apiresponse = response.generate(true, 403, 'Error While fetching Issue details', err)
            res.send(apiresponse)
        }
        else {
            if (result.assignedTo != "false") {
                issueModel.findOneAndUpdate({ 'issueId': req.params.issueId }, { $set: { 'state': 'Assigned' } }, (err, success) => {
                    if (err) {
                        let apiresponse = response.generate(true, 403, 'Error While fetching Issue details', err)
                        res.send(apiresponse)
                    }
                    else {
                        let apiresponse = response.generate(false, 200, 'Issue Details', success)
                        res.send(apiresponse)
                    }
                })
            }
            else {
                let apiresponse = response.generate(false, 200, 'Issue Details', result)
                res.send(apiresponse)
            }
        }
    })
}

/*----------------------------------------------------------------------------------------------------------------------------------------*/
let lodgeissue = (req, res) => {
    if (check.isEmpty(req)) {
        let apiresponse = response.generate(true, 403, 'Please Enter Details to lodge an Issue', req.body)
        res.send(apiresponse)
    }
    else {
        let id = shortid.generate()
        let Issuedata = new issueModel({
            issueId: id,
            title: req.body.title,
            description: req.body.description,
            author: req.body.author,
            assignedTo: req.body.assignedTo,
            files:req.body.files
        })
        Issuedata.save((err, result) => {
            if (err) {
                let apiresponse = response.generate(true, 403, 'Error While Raising Issue', err)
                res.send(apiresponse)
            }
            else {
                userModel.updateOne({ 'userId': req.body.author }, { $push: { lodgedIssue: [id] } }, (error, success) => {
                    if (error) {
                        let apiresponse = response.generate(true, 403, 'Error While Raising Issue', err)
                        res.send(apiresponse)
                    }
                })

                if (req.body.assignedTo) {
                    userModel.updateOne({ 'userId': req.body.assignedTo }, { $push: { assignedIssue: [id] } }, (error, success) => {
                        if (error) {
                            let apiresponse = response.generate(true, 403, 'Error While Raising Issue', err)
                            res.send(apiresponse)
                        }
                    })
                    issueModel.updateOne({ 'issueId': result.issueId }, { $set: { "state": "Assigned" } }, (error, success) => {
                        if (error) {
                            let apiresponse = response.generate(true, 403, 'Error While Raising Issue', err)
                            res.send(apiresponse)
                        }
                    })
                }
                let apiresponse = response.generate(false, 200, 'Issue Lodged Successfully', result)
                res.send(apiresponse)

            }
        }

        )
    }
}
/*----------------------------------------------------------------------------------------------------------------------------------------*/
let getAssignedIssues = (req, res) => {
    userModel.findOne({ 'userId': req.params.userId }, (err, result) => {
        if (err) {
            let apiresponse = response.generate(true, 403, 'Error while fetching Assigned Issues', req.body)
            res.send(apiresponse)
        }

        else if (check.isEmpty(result)) {
            let apiresponse = response.generate(true, 403, 'User Not Found', req.body)
            res.send(apiresponse)
        }

        else {
            let list = result.assignedIssue
            issueModel.find({ 'issueId': list }, (err, result) => {
                if (err) {
                    let apiresponse = response.generate(true, 403, 'Error while fetching Assigned Issues', err)
                    res.send(apiresponse)
                }
                else if (check.isEmpty(result)) {
                    let apiresponse = response.generate(true, 403, 'No Issues Not Found', result)
                    res.send(apiresponse)

                }
                else {
                    let apiresponse = response.generate(false, 200, 'The list of Assigned Issues', result)
                    res.send(apiresponse)
                }
            })

        }


    })
}
/*----------------------------------------------------------------------------------------------------------------------------------------*/

let getLodgedIssues = (req, res) => {
    userModel.findOne({ 'userId': req.params.userId }, (err, result) => {
        if (err) {
            let apiresponse = response.generate(true, 403, 'Error while fetching Assigned Issues', err)
            res.send(apiresponse)
        }

        else if (check.isEmpty(result)) {
            let apiresponse = response.generate(true, 403, 'User Not Found', req.params.userId)
            res.send(apiresponse)
        }

        else {
            let list = result.lodgedIssue
            issueModel.find({ 'issueId': list }, (err, result) => {
                if (err) {
                    let apiresponse = response.generate(true, 403, 'Error while fetching Assigned Issues', err)
                    res.send(apiresponse)
                }
                else if (check.isEmpty(result)) {
                    let apiresponse = response.generate(true, 403, 'No Issues Not Found', result)
                    res.send(apiresponse)

                }
                else {
                    let apiresponse = response.generate(false, 200, 'The list of Lodged Issues', result)
                    res.send(apiresponse)
                }
            })

        }


    })
}

/*----------------------------------------------------------------------------------------------------------------------------------------*/
let getIssuesStat = (req, res) => {
    issueModel.aggregate([{ $group: { _id: "$state", total: { $sum: 1 } } }], (err, result) => {
        if (err) {
            let apiresponse = response.generate(true, 403, 'Error while fetching report', err)
            res.send(apiresponse)
        }
        else {

            let apiresponse = response.generate(false, 200, 'Number of Total Issues', result)
            res.send(apiresponse)

        }
    })

}




/*------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

let editIssue = (req, res) => {
    issueModel.findOneAndUpdate({ 'issueId': req.params.issueId }, req.body, { multi: true }, (err, result) => {
        if (err) {
            let apiresponse = response.generate(true, 403, 'Error while editting Issue', err)
            res.send(apiresponse)
        }
        else {
            watchModel.findOne({ 'issueId': req.params.issueId }, { 'watcher': 1, '_id': 0 }, (err, result) => {
                if (err) {
                    let apiresponse = response.generate(true, 403, 'Error while editting Issue', err)
                    res.send(apiresponse)
                }
                else {
                    console.log(result.watcher)
                    let notify = {
                        issueId: req.body.issueId,
                        update: "The Issue '" + req.body.title + "' was edited by the issue reporter ."
                    }

                    notifyModel.updateMany({ 'userId': { $in: result.watcher } }, { $push: { 'notify': notify }}, { multi: true }, (err, resp) => {
                        if (err) {
                            let apiresponse = response.generate(true, 403, 'Error while editting Issue', err)
                            res.send(apiresponse)
                        }
                        else {
                            let apiresponse = response.generate(false, 200, 'Comment updated Successfully', resp)
                            res.send(apiresponse)
                        }
                    })
                }
            })

        }
    })
}

/*------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

let deleteIssue = (req, res) => {
    issueModel.findOneAndRemove({ issueId: req.params.issueId }, (err, result) => {
        if (err) {
            let apiResponse = response.generate(true, 500, `error occurred: ${err.message}`, null)
            res.send(apiResponse)
        } else if (check.isEmpty(result)) {
            let apiResponse = response.generate(true, 404, 'This Issue does not exist', null)
            res.send(apiResponse)
        } else {
            userModel.findOneAndUpdate({ 'lodgedIssue': req.params.issueId }, { $pull: { 'lodgedIssue': req.params.issueId } }, (err, success) => {
                if (err) {
                    let apiResponse = response.generate(true, 500, `error occurred: ${err.message}`, null)
                    res.send(apiResponse)
                }
            })
            userModel.findOneAndUpdate({ 'assignedIssue': req.params.issueId }, { $pull: { 'assignedIssue': req.params.issueId } }, (err, success) => {
                if (err) {
                    let apiResponse = response.generate(true, 500, `error occurred: ${err.message}`, null)
                    res.send(apiResponse)
                }
            })
            watchModel.findOneAndRemove({'issueId':req.params.issueId},(err,result)=>{
                if (err) {
                    let apiResponse = response.generate(true, 500, `error occurred: ${err.message}`, null)
                    res.send(apiResponse)
                }
            })
            let apiResponse = response.generate(false, 200, 'Issue deleted successfully', null)
            res.send(apiResponse)
        }
    })

}
/*----------------------------------------------------------------------------------------------------------------------------------------*/

let deleteFilekey=(req,res)=>{
    issueModel.findOneAndUpdate({'issueId':req.params.issueId},{$pull:{'files':{'key':req.params.key}}},(err,result)=>{
        if(err) {
            let apiresponse = response.generate(true, 403, 'Error while Deleting File', err)
            res.send(apiresponse)
        }
        else {
            let apiresponse = response.generate(false, 200, 'File Deleted', result)
            res.send(apiresponse)
        } 
    })
}


module.exports = {
    getAllIssues: getAllIssues,
    editIssue: editIssue,
    deleteIssue: deleteIssue,
    getIssueDetails: getIssueDetails,
    lodgeissue: lodgeissue,
    getAssignedIssues: getAssignedIssues,
    getLodgedIssues: getLodgedIssues,
    getIssuesStat: getIssuesStat,
    deleteFilekey:deleteFilekey
}