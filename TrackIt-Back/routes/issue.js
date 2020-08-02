const appConfig = require("./../config/appConfig")
const attach = require('../controllers/addFile')
const remove = require('../controllers/removeFiles')
const issueController = require('./../controllers/issueController')
const userController = require('./../controllers/userController')
const watchController = require('./../controllers/watchController')
const commentController = require('./../controllers/commentController')
const notificationController = require('./../controllers/notificationController')


let setRouter = (app) => {
	let baseUrl = appConfig.apiVersion + '/users';
	app.post(baseUrl + '/login', userController.login)
    /**
	 * @api {post} /api/v1/users/login To Login a registered user
	 * @apiVersion 0.0.1
	 * @apiGroup User
	 *
	 * @apiParam {String} email The registered email of the user
     * @apiParam {String} password The registered password of the user
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
        "status": 200,
        "message": "Login Successful",
	    "data": [
            userDetails:{
                    userId:"String",
                    firstName:"String",
                    lastName:"String",
                    mobile:"Number",
                    email:"String",
                    lodgedIssue:"Array",
                    assignedIssue:"Array"
                }
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Login Failed",
	    "status": 500,
	    "data": null
	   }
	 */


	app.post(baseUrl + '/signup', userController.signup)

	/**
 * @api {post} /api/v1/users/signup To register a new user
 * @apiVersion 0.0.1
 * @apiGroup User
 *
 * @apiParam {String} firstName First Name of the user
 * @apiparam {String} lastName LastName of the user
 * @apiParam {Number} mobile Mobile number of the user
 * @apiParam {String} email The  email of the user
 * @apiParam {String} password The password of the user
 *
 *  @apiSuccessExample {json} Success-Response:
 *  {
	"error": false,
	"status": 200,
	"message": "User Registered Successfully",
	"data": [
			{
				userId:"String",
				firstName:"String",
				lastName:"String",
				mobile:"Number",
				email:"String",
				lodgedIssue:"Array",
				assignedIssue:"Array"
			}
			]
		}
	}
}
  @apiErrorExample {json} Error-Response:
 *
 * {
	"error": true,
	"message": "Error while Signing up",
	"status": 500,
	"data": null
   }
 */

	app.get(baseUrl + '/all', userController.getAllusersList)
	/**
  * @api {get} /api/v1/users/all To get all the user names
  * @apiVersion 0.0.1
  * @apiGroup User
  *
  *
  *  @apiSuccessExample {json} Success-Response:
  *  {
	 "error": false,
	 "status": 200,
	 "message": "List Of All Users",
	 "data": [
			 {
				 firstName:"String",
				 lastName:"String",
			 }
			 ]
		 }
	 }
 }
   @apiErrorExample {json} Error-Response:
  *
  * {
	 "error": true,
	 "message": "Error while fetching Users",
	 "status": 500,
	 "data": null
	}
  */

	app.get(baseUrl + '/issues/all', issueController.getAllIssues)
	/**
* @api {get} /api/v1/users/issues/all To get all the issues
* @apiVersion 0.0.1
* @apiGroup Issue
*
*
*  @apiSuccessExample {json} Success-Response:
*  {
 "error": false,
 "status": 200,
 "message": "Issue Details",
 "data": [
		 {
			 issueId:"String",
			 title:"String",
			 description:"String",
			 author:"String",
			 state:"String",
			 assignedTo:"String",
			 files:"Array",
			 created:"Date",
			 lastModified:"Date"
		}
		 ]
	 }
 }
}
@apiErrorExample {json} Error-Response:
*
* {
 "error": true,
 "message": "Error while fetching Issues",
 "status": 500,
 "data": null
}
*/
	app.get(baseUrl + '/view/:issueId', issueController.getIssueDetails)
	/**
* @api {get} /api/v1/users/view/:issueId To get details of a single issue
* @apiVersion 0.0.1
* @apiGroup Issue
*
* @apiParam {String} issueId The issueId of the issue
*
*  @apiSuccessExample {json} Success-Response:
*  {
  "error": false,
  "status": 200,
  "message": "Issue Details",
  "data": [
		  {
			  issueId:"String",
			  title:"String",
			  description:"String",
			  author:"String",
			  state:"String",
			  assignedTo:"String",
			  files:"Array",
			  created:"Date",
			  lastModified:"Date"
		 }
		  ]
	  }
  }
}
@apiErrorExample {json} Error-Response:
*
* {
  "error": true,
  "message": "Error while fetching Issues",
  "status": 500,
  "data": null
 }
*/

	app.post(baseUrl + '/edit/:issueId', issueController.editIssue)
	/**
	* @api {post} /api/v1/users/edit/:issueId To get details of a single issue
	* @apiVersion 0.0.1
	* @apiGroup Issue
	*
	* @apiParam {String} issueId The issueId of the issue
	*
	*  @apiSuccessExample {json} Success-Response:
	*  {
	   "error": false,
	   "status": 200,
	   "message": "Issue Details",
	   "data": [
			   {
				   issueId:"String",
				   title:"String",
				   description:"String",
				   author:"String",
				   state:"String",
				   assignedTo:"String",
				   files:"Array",
				   created:"Date",
				   lastModified:"Date"
			  }
			   ]
		   }
	   }
   }
	 @apiErrorExample {json} Error-Response:
	*
	* {
	   "error": true,
	   "message": "Error while Editing Issues",
	   "status": 500,
	   "data": null
	  }
	*/

	app.post(baseUrl + '/addComment', commentController.addComment)
	/**
* @api {post} /api/v1/users/addComment To add a new comment
* @apiVersion 0.0.1
* @apiGroup Comment
*
* @apiParam {String} userId The userId of the user who added comment
* @apiParam {String} issueId The issueId To add Comment
* @apiParam {String} comment The Comment
* @apiParam {Date} date The date of comment
*
*  @apiSuccessExample {json} Success-Response:
*  {
   "error": false,
   "status": 200,
   "message": "Comment updated Successfully",
   "data": [
		   {
			   issueId:"String",
			   userId:"String",
			   comment:"String",
			   date:"Date"
		  }
		   ]
	   }
   }
}
 @apiErrorExample {json} Error-Response:
*
* {
   "error": true,
   "message": "Error while Adding Comment ",
   "status": 500,
   "data": null
  }
*/


	app.get(baseUrl + '/deleteComment/:commentId', commentController.deleteComment)
	/**
   * @api {get} /api/v1/users/deleteComment/:commentId To delete a comment
   * @apiVersion 0.0.1
   * @apiGroup Comment
   *
   * @apiParam {String} commentId The Comment id id the comment to be deleted
   *
   *  @apiSuccessExample {json} Success-Response:
   *  {
	  "error": false,
	  "status": 200,
	  "message": "Comment deleted Successfully",
	  "data": null
		  }
	  }
  }
	@apiErrorExample {json} Error-Response:
   *
   * {
	  "error": true,
	  "message": "Error while deleting comment",
	  "status": 500,
	  "data": null
	 }
   */


	app.get(baseUrl + '/getComments/:issueId', commentController.getAllComments)
	/**
 * @api {get} /api/v1/users/getComments/:issueId To get comments related to an issue
 * @apiVersion 0.0.1
 * @apiGroup Comment
 *
 * @apiParam {String} issueId The issueId To add Comment
 *
 *  @apiSuccessExample {json} Success-Response:
 *  {
	"error": false,
	"status": 200,
	"message": "All Comments",
	"data": [
			{
				issueId:"String",
				userId:"String",
				comment:"String",
				date:"Date"
		   }
			]
		}
	}
}
  @apiErrorExample {json} Error-Response:
 *
 * {
	"error": true,
	"message": "Error while getting comments ",
	"status": 500,
	"data": null
   }
 */

	app.get(baseUrl + '/addWatch/:issueId/:userId', watchController.addToWatch)
	/**
	* @api {get} /api/v1/users/addWatch/:issueId/:userId  To add a user to issue watchlist
	* @apiVersion 0.0.1
	* @apiGroup Watcher
	*
	* @apiParam {String} issueId The issueId To add watcher
	* @apiParam {String} userId The userId of the user to add to watch
	*
	*  @apiSuccessExample {json} Success-Response:
	*  {
	   "error": false,
	   "status": 200,
	   "message": "Added To watchList",
	   "data": [
			   {
				   issueId:"String",
				   watcher:"String"
			  }
			   ]
		   }
	   }
   }
	 @apiErrorExample {json} Error-Response:
	*
	* {
	   "error": true,
	   "message": "Error while adding to watch ",
	   "status": 500,
	   "data": null
	  }
	*/

	app.get(baseUrl + '/isWatcher/:issueId/:userId', watchController.isWatcher)
	/**
   * @api {get} /api/v1/users/isWatcher/:issueId/:userId  To check if a user is a watcher for an issue
   * @apiVersion 0.0.1
   * @apiGroup Watcher
   *
   * @apiParam {String} issueId The issueId To add watcher
   * @apiParam {String} userId The userId of the user to add to watch
   *
   *  @apiSuccessExample {json} Success-Response:
   *  {
	  "error": false,
	  "status": 200,
	  "message": "IsWatcher",
	  "data": true/false
		  }
	  }
  }
	@apiErrorExample {json} Error-Response:
   *
   * {
	  "error": true,
	  "message": "Error While fetching watchList ",
	  "status": 500,
	  "data": null
	 }
   */

	app.get(baseUrl + '/allwatchers/:issueId', watchController.getAllWatchers)
    /**
	 * @api {get} /api/v1/users/allwatchers/:issueId To get all watchers of an issue
	 * @apiVersion 0.0.1
	 * @apiGroup Watcher
	 *
     * @apiParam {String} issueId The issueId To add watcher
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
        "status": 200,
        "message": "Issue Watchers",
	    "data": [
                watcher:"String"
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error While fetching watchers",
	    "status": 500,
	    "data": null
	   }
	 */

	app.get(baseUrl + "/removeWatch/:issueId/:userId", watchController.removeFromWatch)
	/**
* @api {get} /api/v1/users/removeWatch/:issueId/:userId  To delete a watcher for an issue
* @apiVersion 0.0.1
* @apiGroup Watcher
*
* @apiParam {String} issueId The issueId To remove watcher
* @apiParam {String} userId The userId of the user to remove from watch
*
*  @apiSuccessExample {json} Success-Response:
*  {
  "error": false,
  "status": 200,
  "message": "Removed From watchList",
  "data":[
		  {
			  issueId:"String",
			  watcher:"String"
		 }
		  ]
	  }
  }
}
@apiErrorExample {json} Error-Response:
*
* {
  "error": true,
  "message": "Error While deleting watcher ",
  "status": 500,
  "data": null
 }
*/

	app.get(baseUrl + '/delete/:issueId', issueController.deleteIssue)
	/**
	* @api {get} /api/v1/users/delete/:issueId To get delete an issue
	* @apiVersion 0.0.1
	* @apiGroup Issue
	*
	* @apiParam {String} issueId The issueId of the issue to be deleted 
	*
	*  @apiSuccessExample {json} Success-Response:
	*  {
	   "error": false,
	   "status": 200,
	   "message": "Issue deleted successfully",
	   "data":null
		   }
	   }
   }
	 @apiErrorExample {json} Error-Response:
	*
	* {
	   "error": true,
	   "message": "Error while deleting Issues",
	   "status": 500,
	   "data": null
	  }
	*/


	app.get(baseUrl + '/:userId', userController.getUserById)
	/**
	* @api {get} /api/v1/users/:userId To get username by Id
	* @apiVersion 0.0.1
	* @apiGroup User
	*
	* @apiParam {String} userId The userId to get username
	*
	*  @apiSuccessExample {json} Success-Response:
	*  {
	   "error": false,
	   "status": 200,
	   "message": "User Name",
	   "data":[
		   name:"String"
	   ]
		   }
	   }
   }
	 @apiErrorExample {json} Error-Response:
	*
	* {
	   "error": true,
	   "message": "Error while fetching username",
	   "status": 500,
	   "data": null
	  }
	*/

	app.get(baseUrl + '/email/:email', userController.getUserByEmail)
    /**
	 * @api {get} /api/v1/users/email/:email To a user by emailcheck for 
	 * @apiVersion 0.0.1
	 * @apiGroup User
	 *
	 * @apiParam {String} email The  email of the user
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
        "status": 200,
        "message": "User Found",
	    "data": [
             {
                    userId:"String",
                    firstName:"String",
                    lastName:"String",
                    mobile:"Number",
                    email:"String",
                    lodgedIssue:"Array",
                    assignedIssue:"Array"
                }
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error while fetching user",
	    "status": 500,
	    "data": null
	   }
	 */

	app.get(baseUrl + '/logout/:userId', userController.logout)
	/**
* @api {get} /api/v1/users/logout/:userId To logout a user
* @apiVersion 0.0.1
* @apiGroup User
*
* @apiParam {String} userId The userId to logout user
*
*  @apiSuccessExample {json} Success-Response:
*  {
   "error": false,
   "status": 200,
   "message": "Logged Out Successfully",
   "data":null
	   }
   }
}
 @apiErrorExample {json} Error-Response:
*
* {
   "error": true,
   "message": "Already Logged Out or Invalid UserId",
   "status": 404,
   "data": null
  }
*/


	app.post(baseUrl + '/dashboard/lodge', issueController.lodgeissue)
	/**
* @api {post} /api/v1/users/dashboard/lodge To Lodge a new Issue
* @apiVersion 0.0.1
* @apiGroup Issue
*
* @apiParam {String} title The title of the issue
* @apiParam {String} description The description of the issue
* @apiParam {String} author The reporter of the issue
* @apiParam {String} state The state of the issue
* @apiParam {String} assignedTo The asignee of the issue
* @apiParam {Array} files the list of attachments
* 
*  @apiSuccessExample {json} Success-Response:
*  {
  "error": false,
  "status": 200,
  "message": "Issue Lodged Successfully",
  "data": [
		  {
			  issueId:"String",
			  title:"String",
			  description:"String",
			  author:"String",
			  state:"String",
			  assignedTo:"String",
			  files:"Array",
			  created:"Date",
			  lastModified:"Date"
		 }
		  ]
	  }
  }
}
@apiErrorExample {json} Error-Response:
*
* {
  "error": true,
  "message": "Error While Raising Issue",
  "status": 500,
  "data": null
 }
*/

	app.get(baseUrl + '/dashboard/assigned/:userId', issueController.getAssignedIssues)
	/**
	* @api {get} /api/v1/users/dashboard/assigned/:userId To get assigned issue for a user
	* @apiVersion 0.0.1
	* @apiGroup Issue
	*
	* @apiParam {String} userId The userId to get all assigned issues
	*
	*  @apiSuccessExample {json} Success-Response:
	*  {
	   "error": false,
	   "status": 200,
	   "message": "The list of Assigned Issues",
	   "data": [
			   {
				   issueId:"String",
				   title:"String",
				   description:"String",
				   author:"String",
				   state:"String",
				   assignedTo:"String",
				   files:"Array",
				   created:"Date",
				   lastModified:"Date"
			  }
			   ]
		   }
	   }
   }
	 @apiErrorExample {json} Error-Response:
	*
	* {
	   "error": true,
	   "message": "Error while fetching Assigned Issues",
	   "status": 500,
	   "data": null
	  }
	*/


	app.get(baseUrl + '/dashboard/notifications/:userId', notificationController.getNotifications)
	/**
	* @api {get} /api/v1/users/dashboard/notifications/:userId To get notifications for a user
	* @apiVersion 0.0.1
	* @apiGroup Notification
	*
	* @apiParam {String} userId The userId to get all notification
	*
	*  @apiSuccessExample {json} Success-Response:
	*  {
	   "error": false,
	   "status": 200,
	   "message": "The list of Assigned Issues",
	   "data": [
			   {
				   userId:"String",
				   notify:"Array"
			  }
			   ]
		   }
	   }
   }
	 @apiErrorExample {json} Error-Response:
	*
	* {
	   "error": true,
	   "message": "Error while fetching notification",
	   "status": 500,
	   "data": null
	  }
	*/

	app.get(baseUrl + '/dashboard/:issueId/:userId', notificationController.readNotificationForIssue)
    /**
	 * @api {get} /api/v1/users/dashboard/:issueId/:userId To read notification for an issue
	 * @apiVersion 0.0.1
	 * @apiGroup Notification
	 *
     * @apiParam {String} userId The userId to read notification
     * @apiParam {String} issueId The issueId to read notification
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
        "status": 200,
        "message": "All Notifications",
	    "data": [
                {
                    userId:"String",
                    notify:"Array"
               }
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error while fetching notification",
	    "status": 500,
	    "data": null
	   }
	 */


	app.get(baseUrl + '/markAsRead/:userId', notificationController.markAllRead)
    /**
	 * @api {get} /api/v1/users/markasRead/:userId To read all notification for a user
	 * @apiVersion 0.0.1
	 * @apiGroup Notification
	 *
     * @apiParam {String} userId The userId to read all notification
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
        "status": 200,
        "message": "All Notifications",
	    "data": [
                {
                    userId:"String",
                    notify:"Array"
               }
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error while fetching notification",
	    "status": 500,
	    "data": null
	   }
	 */

	app.post(baseUrl + '/upload', attach.array('file', 1), (req, res) => { res.send({ file: req.file }); });


	app.post(baseUrl + '/delete', remove.deleteFile)
    /**
	 * @api {post} /api/v1/users/delete To delete an attachment from bucket
	 * @apiVersion 0.0.1
	 * @apiGroup File
	 *
     * @apiParam {String} key The key of the attachment
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
        "status": 200,
        "message": "File Deleted",
	    "data": null
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "File Not Deleted",
	    "status": 500,
	    "data": null
	   }
	 */


	app.get(baseUrl + '/delete/:issueId/:key', issueController.deleteFilekey)
    /**
	 * @api {get} /api/v1/users/delete/ To delete a file from attachment
	 * @apiVersion 0.0.1
	 * @apiGroup File
	 *
     * @apiParam {String} issueId The issueId to delete attachment
     * @apiParam {String} key The key of the attachment
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
        "status": 200,
        "message": "File Deleted",
	    "data": null
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "File Not Deleted",
	    "status": 500,
	    "data": null
	   }
	 */
}// end setRouter function 

module.exports = {
	setRouter: setRouter
}