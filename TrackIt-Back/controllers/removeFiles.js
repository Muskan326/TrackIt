const aws = require('aws-sdk');
const dotenv = require('dotenv');
const response=require('./../libs/responseLib')
dotenv.config();

aws.config.update({
  secretAccessKey: 'IthiPQzGOBQKCDQ3AiMkai89uSR80d2A5tGZQgri',
  accessKeyId: 'AKIAXTIPWYVR5HVROI5X',
  region: 'ap-south-1' //E.g us-east-1
});

const s3 = new aws.S3();

let deleteFile=(req,res)=>{
    console.log(req.body.key)
    var params = {
      Bucket: 'trackit-docs-bucket-public', 
      Key: req.body.key
    };
    s3.deleteObject(params, function(err, data) {
      if (err){
        let apiresponse=response.generate(true,403,'File Not Deleted',err)
        res.send(apiresponse)
      }// an error occurred
      else{
        let apiresponse=response.generate(false,200,'File Deleted',data)
        res.send(apiresponse)
      }          // successful response
    });
    
  }

  


  module.exports={
    deleteFile:deleteFile
  }