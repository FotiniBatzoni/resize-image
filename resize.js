const sizeOf = require('image-size');
const sharp = require('sharp')
const fs = require('fs');


router.post("/", upload.single('image'), async (req, res) => {
    let image = req.file;
    const targetColor = req.body.targetColor;
    let deltaE = parseInt(req.body.deltaE);
    const mimetype = image.mimetype.split("/")[1];

    let input = `${image.destination}/${image.filename}`;
    let resizedImage = `${image.destination}/resizedImage.${mimetype}`;

    const dimensions = sizeOf(`${image.destination}/${image.filename}`); // replace with your image
    console.log(dimensions.width, dimensions.height)

    if(dimensions.width>1000){
        sharp(input).resize({ width: 1000 }) .toFile(resizedImage)
            .then(function(newFileInfo) {
                if (fs.existsSync(resizedImage)) {
                    image = resizedImage;
                }
            })
            .catch(function(err) {
                console.log(err);
            });
    }
    if(dimensions.height>1000){

        sharp(input).resize({ height: 1000 }).toFile(resizedImage)
            .then(function(newFileInfo) {
                if (fs.existsSync(resizedImage)) {
                    image = resizedImage;
                }
            })
            .catch(function(err) {
                console.log(err);
            });
    }


    //const resizedDimensions = sizeOf(resizedImage); // replace with your image
    //console.log("rd",resizedDimensions.width, resizedDimensions.height)

})

