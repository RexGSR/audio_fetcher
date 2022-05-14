//ytdl-core module to dowload youtube videos
const ytdl = require('ytdl-core');


const getFormats = async (req, res) => {
    let url = req.query.url;
   

    try {
        if (ytdl.validateURL(url)) {
            let info = await ytdl.getInfo(url);

            return res.status(200).json(
                [
                    {
                        status: 1,
                        data: info
                    }
                ]
            )
        }
        else {
            return res.status(400).json([
                {
                    status: 0,
                    error: [
                        {
                            message:"please, enter a valid url."
                        }
                    ]
                }
            ]) 
        }
        
    }
    catch (error) {
        console.log(error)
        return res.status(500).json([
            {
                status: 0,
                error:
                    [{
                        message:"oops! somthing went wrong, try again."
                }]
            }
        ])
    }
    
}  


const getVideo = async (req, res) => {
    let { videoUrl, itag, fileName,length } = req.query;

    try {
        res.header("Content-Disposition", `attachment;\ filename="${fileName}"`)
        res.header("Content-Length",`${length}`)
        ytdl(videoUrl, {
            filter: format => format.itag == itag
        }).pipe(res)  
    }
    catch (error) {
        console.log(error);     
    }


}


module.exports = {
    getFormats,
    getVideo
}