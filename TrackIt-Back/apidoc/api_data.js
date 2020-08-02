define({ "api": [
  {
    "type": "get",
    "url": "/api/v1/users/deleteComment/:commentId",
    "title": "To delete a comment",
    "version": "0.0.1",
    "group": "Comment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "commentId",
            "description": "<p>The Comment id id the comment to be deleted</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n        \"status\": 200,\n        \"message\": \"Comment deleted Successfully\",\n\t    \"data\": null\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error while deleting comment\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/issue.js",
    "groupTitle": "Comment",
    "name": "GetApiV1UsersDeletecommentCommentid"
  },
  {
    "type": "get",
    "url": "/api/v1/users/getComments/:issueId",
    "title": "To get comments related to an issue",
    "version": "0.0.1",
    "group": "Comment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "issueId",
            "description": "<p>The issueId To add Comment</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n        \"status\": 200,\n        \"message\": \"All Comments\",\n\t    \"data\": [\n                {\n                    issueId:\"String\",\n                    userId:\"String\",\n                    comment:\"String\",\n                    date:\"Date\"\n               }\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error while getting comments \",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/issue.js",
    "groupTitle": "Comment",
    "name": "GetApiV1UsersGetcommentsIssueid"
  },
  {
    "type": "post",
    "url": "/api/v1/users/addComment",
    "title": "To add a new comment",
    "version": "0.0.1",
    "group": "Comment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>The userId of the user who added comment</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "issueId",
            "description": "<p>The issueId To add Comment</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "comment",
            "description": "<p>The Comment</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>The date of comment</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n        \"status\": 200,\n        \"message\": \"Comment updated Successfully\",\n\t    \"data\": [\n                {\n                    issueId:\"String\",\n                    userId:\"String\",\n                    comment:\"String\",\n                    date:\"Date\"\n               }\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error while Adding Comment \",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/issue.js",
    "groupTitle": "Comment",
    "name": "PostApiV1UsersAddcomment"
  },
  {
    "type": "get",
    "url": "/api/v1/users/delete/",
    "title": "To delete a file from attachment",
    "version": "0.0.1",
    "group": "File",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "issueId",
            "description": "<p>The issueId to delete attachment</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>The key of the attachment</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n        \"status\": 200,\n        \"message\": \"File Deleted\",\n\t    \"data\": null\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"File Not Deleted\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/issue.js",
    "groupTitle": "File",
    "name": "GetApiV1UsersDelete"
  },
  {
    "type": "post",
    "url": "/api/v1/users/delete",
    "title": "To delete an attachment from bucket",
    "version": "0.0.1",
    "group": "File",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>The key of the attachment</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n        \"status\": 200,\n        \"message\": \"File Deleted\",\n\t    \"data\": null\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"File Not Deleted\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/issue.js",
    "groupTitle": "File",
    "name": "PostApiV1UsersDelete"
  },
  {
    "type": "get",
    "url": "/api/v1/users/dashboard/assigned/:userId",
    "title": "To get assigned issue for a user",
    "version": "0.0.1",
    "group": "Issue",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>The userId to get all assigned issues</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n        \"status\": 200,\n        \"message\": \"The list of Assigned Issues\",\n\t    \"data\": [\n                {\n                    issueId:\"String\",\n                    title:\"String\",\n                    description:\"String\",\n                    author:\"String\",\n                    state:\"String\",\n                    assignedTo:\"String\",\n                    files:\"Array\",\n                    created:\"Date\",\n                    lastModified:\"Date\"\n               }\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error while fetching Assigned Issues\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/issue.js",
    "groupTitle": "Issue",
    "name": "GetApiV1UsersDashboardAssignedUserid"
  },
  {
    "type": "get",
    "url": "/api/v1/users/delete/:issueId",
    "title": "To get delete an issue",
    "version": "0.0.1",
    "group": "Issue",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "issueId",
            "description": "<p>The issueId of the issue to be deleted</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n        \"status\": 200,\n        \"message\": \"Issue deleted successfully\",\n\t    \"data\":null\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error while deleting Issues\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/issue.js",
    "groupTitle": "Issue",
    "name": "GetApiV1UsersDeleteIssueid"
  },
  {
    "type": "get",
    "url": "/api/v1/users/issues/all",
    "title": "To get all the issues",
    "version": "0.0.1",
    "group": "Issue",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n        \"status\": 200,\n        \"message\": \"Issue Details\",\n\t    \"data\": [\n                {\n                    issueId:\"String\",\n                    title:\"String\",\n                    description:\"String\",\n                    author:\"String\",\n                    state:\"String\",\n                    assignedTo:\"String\",\n                    files:\"Array\",\n                    created:\"Date\",\n                    lastModified:\"Date\"\n               }\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error while fetching Issues\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/issue.js",
    "groupTitle": "Issue",
    "name": "GetApiV1UsersIssuesAll"
  },
  {
    "type": "get",
    "url": "/api/v1/users/view/:issueId",
    "title": "To get deatils of a single issue",
    "version": "0.0.1",
    "group": "Issue",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "issueId",
            "description": "<p>The issueId of the issue</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n        \"status\": 200,\n        \"message\": \"Issue Details\",\n\t    \"data\": [\n                {\n                    issueId:\"String\",\n                    title:\"String\",\n                    description:\"String\",\n                    author:\"String\",\n                    state:\"String\",\n                    assignedTo:\"String\",\n                    files:\"Array\",\n                    created:\"Date\",\n                    lastModified:\"Date\"\n               }\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error while fetching Issues\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/issue.js",
    "groupTitle": "Issue",
    "name": "GetApiV1UsersViewIssueid"
  },
  {
    "type": "post",
    "url": "/api/v1/users/dashboard/lodge",
    "title": "To get deatils of a single issue",
    "version": "0.0.1",
    "group": "Issue",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>The title of the issue</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>The description of the issue</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "author",
            "description": "<p>The reporter of the issue</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>The state of the issue</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "assignedTo",
            "description": "<p>The asignee of the issue</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "files",
            "description": "<p>the list of attachments</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n        \"status\": 200,\n        \"message\": \"Issue Lodged Successfully\",\n\t    \"data\": [\n                {\n                    issueId:\"String\",\n                    title:\"String\",\n                    description:\"String\",\n                    author:\"String\",\n                    state:\"String\",\n                    assignedTo:\"String\",\n                    files:\"Array\",\n                    created:\"Date\",\n                    lastModified:\"Date\"\n               }\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error While Raising Issue\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/issue.js",
    "groupTitle": "Issue",
    "name": "PostApiV1UsersDashboardLodge"
  },
  {
    "type": "post",
    "url": "/api/v1/users/edit/:issueId",
    "title": "To get deatils of a single issue",
    "version": "0.0.1",
    "group": "Issue",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "issueId",
            "description": "<p>The issueId of the issue</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n        \"status\": 200,\n        \"message\": \"Issue Details\",\n\t    \"data\": [\n                {\n                    issueId:\"String\",\n                    title:\"String\",\n                    description:\"String\",\n                    author:\"String\",\n                    state:\"String\",\n                    assignedTo:\"String\",\n                    files:\"Array\",\n                    created:\"Date\",\n                    lastModified:\"Date\"\n               }\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error while Editing Issues\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/issue.js",
    "groupTitle": "Issue",
    "name": "PostApiV1UsersEditIssueid"
  },
  {
    "type": "get",
    "url": "/api/v1/users/dashboard/:issueId/:userId",
    "title": "To read notification for an issue",
    "version": "0.0.1",
    "group": "Notification",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>The userId to read notification</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "issueId",
            "description": "<p>The issueId to read notification</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n        \"status\": 200,\n        \"message\": \"All Notifications\",\n\t    \"data\": [\n                {\n                    userId:\"String\",\n                    notify:\"Array\"\n               }\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error while fetching notification\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/issue.js",
    "groupTitle": "Notification",
    "name": "GetApiV1UsersDashboardIssueidUserid"
  },
  {
    "type": "get",
    "url": "/api/v1/users/dashboard/notifications/:userId",
    "title": "To get notifications for a user",
    "version": "0.0.1",
    "group": "Notification",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>The userId to get all notification</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n        \"status\": 200,\n        \"message\": \"The list of Assigned Issues\",\n\t    \"data\": [\n                {\n                    userId:\"String\",\n                    notify:\"Array\"\n               }\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error while fetching notification\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/issue.js",
    "groupTitle": "Notification",
    "name": "GetApiV1UsersDashboardNotificationsUserid"
  },
  {
    "type": "get",
    "url": "/api/v1/users/markasRead/:userId",
    "title": "To read all notification for a user",
    "version": "0.0.1",
    "group": "Notification",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>The userId to read all notification</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n        \"status\": 200,\n        \"message\": \"All Notifications\",\n\t    \"data\": [\n                {\n                    userId:\"String\",\n                    notify:\"Array\"\n               }\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error while fetching notification\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/issue.js",
    "groupTitle": "Notification",
    "name": "GetApiV1UsersMarkasreadUserid"
  },
  {
    "type": "get",
    "url": "/api/v1/users/all",
    "title": "To get all the user names",
    "version": "0.0.1",
    "group": "User",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n        \"status\": 200,\n        \"message\": \"List Of All Users\",\n\t    \"data\": [\n                {\n                    firstName:\"String\",\n                    lastName:\"String\",\n                }\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error while fetching Users\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/issue.js",
    "groupTitle": "User",
    "name": "GetApiV1UsersAll"
  },
  {
    "type": "get",
    "url": "/api/v1/users/email/:email",
    "title": "To a user by emailcheck for",
    "version": "0.0.1",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The  email of the user</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n        \"status\": 200,\n        \"message\": \"User Found\",\n\t    \"data\": [\n             {\n                    userId:\"String\",\n                    firstName:\"String\",\n                    lastName:\"String\",\n                    mobile:\"Number\",\n                    email:\"String\",\n                    lodgedIssue:\"Array\",\n                    assignedIssue:\"Array\"\n                }\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error while fetching user\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/issue.js",
    "groupTitle": "User",
    "name": "GetApiV1UsersEmailEmail"
  },
  {
    "type": "get",
    "url": "/api/v1/users/logout/:userId",
    "title": "To logout a user",
    "version": "0.0.1",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>The userId to logout user</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n        \"status\": 200,\n        \"message\": \"Logged Out Successfully\",\n\t    \"data\":null\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Already Logged Out or Invalid UserId\",\n\t    \"status\": 404,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/issue.js",
    "groupTitle": "User",
    "name": "GetApiV1UsersLogoutUserid"
  },
  {
    "type": "get",
    "url": "/api/v1/users/:userId",
    "title": "To get username by Id",
    "version": "0.0.1",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>The userId to get username</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n        \"status\": 200,\n        \"message\": \"User Name\",\n\t    \"data\":[\n            name:\"String\"\n        ]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error while fetching username\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/issue.js",
    "groupTitle": "User",
    "name": "GetApiV1UsersUserid"
  },
  {
    "type": "post",
    "url": "/api/v1/users/login",
    "title": "To Login a registered user",
    "version": "0.0.1",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The registered email of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The registered password of the user</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n        \"status\": 200,\n        \"message\": \"Login Successful\",\n\t    \"data\": [\n            userDetails:{\n                    userId:\"String\",\n                    firstName:\"String\",\n                    lastName:\"String\",\n                    mobile:\"Number\",\n                    email:\"String\",\n                    lodgedIssue:\"Array\",\n                    assignedIssue:\"Array\"\n                }\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Login Failed\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/issue.js",
    "groupTitle": "User",
    "name": "PostApiV1UsersLogin"
  },
  {
    "type": "post",
    "url": "/api/v1/users/signup",
    "title": "To register a new user",
    "version": "0.0.1",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>First Name of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>LastName of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "mobile",
            "description": "<p>Mobile number of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>The  email of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>The password of the user</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n        \"status\": 200,\n        \"message\": \"User Registered Successfully\",\n\t    \"data\": [\n                {\n                    userId:\"String\",\n                    firstName:\"String\",\n                    lastName:\"String\",\n                    mobile:\"Number\",\n                    email:\"String\",\n                    lodgedIssue:\"Array\",\n                    assignedIssue:\"Array\"\n                }\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error while Signing up\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/issue.js",
    "groupTitle": "User",
    "name": "PostApiV1UsersSignup"
  },
  {
    "type": "get",
    "url": "/api/v1/users/addWatch/:issueId/:userId",
    "title": "To add a user to issue watchlist",
    "version": "0.0.1",
    "group": "Watcher",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "issueId",
            "description": "<p>The issueId To add watcher</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>The userId of the user to add to watch</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n        \"status\": 200,\n        \"message\": \"Added To watchList\",\n\t    \"data\": [\n                {\n                    issueId:\"String\",\n                    watcher:\"String\"\n               }\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error while adding to watch \",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/issue.js",
    "groupTitle": "Watcher",
    "name": "GetApiV1UsersAddwatchIssueidUserid"
  },
  {
    "type": "get",
    "url": "/api/v1/users/allwatchers/:issueId",
    "title": "To get all watchers of an issue",
    "version": "0.0.1",
    "group": "Watcher",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "issueId",
            "description": "<p>The issueId To add watcher</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n        \"status\": 200,\n        \"message\": \"Issue Watchers\",\n\t    \"data\": [\n                watcher:\"String\"\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error While fetching watchers\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/issue.js",
    "groupTitle": "Watcher",
    "name": "GetApiV1UsersAllwatchersIssueid"
  },
  {
    "type": "get",
    "url": "/api/v1/users/isWatcher/:issueId/:userId",
    "title": "To check if a user is a watcher for an issue",
    "version": "0.0.1",
    "group": "Watcher",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "issueId",
            "description": "<p>The issueId To add watcher</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>The userId of the user to add to watch</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n        \"status\": 200,\n        \"message\": \"IsWatcher\",\n\t    \"data\": true/false\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error While fetching watchList \",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/issue.js",
    "groupTitle": "Watcher",
    "name": "GetApiV1UsersIswatcherIssueidUserid"
  },
  {
    "type": "get",
    "url": "/api/v1/users/removeWatch/:issueId/:userId",
    "title": "To delete a watcher for an issue",
    "version": "0.0.1",
    "group": "Watcher",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "issueId",
            "description": "<p>The issueId To remove watcher</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>The userId of the user to remove from watch</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n        \"status\": 200,\n        \"message\": \"Removed From watchList\",\n\t    \"data\":[\n                {\n                    issueId:\"String\",\n                    watcher:\"String\"\n               }\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error While deleting watcher \",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/issue.js",
    "groupTitle": "Watcher",
    "name": "GetApiV1UsersRemovewatchIssueidUserid"
  }
] });
