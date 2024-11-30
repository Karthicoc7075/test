const multer = require('multer');
const CustomError = require("../errors");


const allowedFormats = {
    IMAGE: ['image/jpeg', 'image/png', 'image/gif','image/webp'],
    DOCUMENT: ['application/pdf', 'application/msword']
};  
const storage = multer.memoryStorage()
const upload = multer({ storage: storage,limits: { fileSize: 1024 * 1024 * 5 }})

function uploadImage(fileFormat) {
    return function(req, res, next) {
        upload.single('image')(req, res, function(err) {
           
          try{
           
            if (!req.file) {
              throw new CustomError.BadRequestError('Image is required');
           }

            if(req.file){
                if (!fileFormat.includes(req.file.mimetype)) {
                    throw new CustomError.BadRequestError('Image format not allowed');
                }
            }
            

           
            if (err) {
                console.log(err);
                throw new CustomError.BadRequestError('Image upload failed');
            }

          
            next();
          }
          catch(err){
            next(err)
          }
        });
    };
}

function uploadUpdateImage(fileFormat) {
    return function(req, res, next) {
        upload.single('image')(req, res, function(err) {
           
          try{
           
            if(req.file){
                if (!fileFormat.includes(req.file.mimetype)) {
                    throw new CustomError.BadRequestError('Image format not allowed');
                }
            }
            

          
            if (err) {
                console.log(err);
                throw new CustomError.BadRequestError('Image upload failed');
            }

            
          
            next();
          }
          catch(err){
            next(err)
          }
        });
    };
}




module.exports = { uploadImage, allowedFormats, uploadUpdateImage };




       



