const mongoose = require('mongoose');
const shortid = require('shortid');
const response = require('../libs/responseLib')
const logger = require('../libs/loggerLib');
const check = require('../libs/checkLib');

/* Models */
const watchModel = mongoose.model('Watcher')
const commentModel = mongoose.model('Comment')
const notifyModel = mongoose.model('Notification')

/*----------------------------------------------------------------------------------------------------------------------------------------*/
let addComment = (req, res) => {
    if (req.body == null || req.body == undefined) {
        let apiresponse = response.generate(true, 403, 'No Comments To Add', null)
        res.send(apiresponse)
    }
    else {
        let id = shortid.generate()
        let newcom = new commentModel({
            commentId: id,
            userId: req.body.userId,
            issueId: req.body.issueId,
            comment: req.body.comment
        })

        newcom.save((err, result) => {
            if (err) {
                let apiresponse = response.generate(true, 403, 'Error while editting Issue', err)
                res.send(apiresponse)
            }
            else {
                watchModel.findOne({ 'issueId': req.body.issueId }, { 'watcher': 1, '_id': 0 }, (err, result) => {
                    if (err) {
                        let apiresponse = response.generate(true, 403, 'Error while editting Issue', err)
                        res.send(apiresponse)
                    }
                    else {
                        let notify = {
                            issueId: req.body.issueId,
                            update: "A Comment was added to '" + req.body.issueTitle + "' by " + req.body.username + " ."
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

}
/*----------------------------------------------------------------------------------------------------------------------------------------*/

let getAllComments = (req, res) => {
    commentModel.find({ 'issueId': req.params.issueId }, (err, result) => {
        if (err) {
            let apiresponse = response.generate(true, 403, 'Error while getting comments', err)
            res.send(apiresponse)
        }
        else if (check.isEmpty(result)) {
            let apiresponse = response.generate(true, 200, 'No Comments', 'No Comments')
            res.send(apiresponse)
        }
        else {
            let apiresponse = response.generate(false, 200, 'All Comments', result)
            res.send(apiresponse)
        }
    })
}

/*----------------------------------------------------------------------------------------------------------------------------------------*/

let deleteComment = (req, res) => {
    commentModel.findOneAndRemove({ 'commentId': req.params.commentId }, (err, result) => {
        if (err) {
            let apiresponse = response.generate(true, 403, 'Error while editting Issue', err)
            res.send(apiresponse)
        }
        else {
            let apiresponse = response.generate(false, 200, 'Comment deleted Successfully', null)
            res.send(apiresponse)
        }
    })
}

module.exports = {
    addComment: addComment,
    getAllComments: getAllComments,
    deleteComment: deleteComment,

}
