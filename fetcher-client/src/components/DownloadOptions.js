

function DownloadOptions({ formats, clickHandler, title, imgSrc }) {

    return (
        <div className="optionsList"   >
            {
                formats.map((item) => {
                    return (
                        <div key={item.itag}
                            onClick={(event) => clickHandler(event)}
                            className="details-wrapper" itag={item.itag} format={item.hasVideo ? "video" : "audio"} content-length={item.contentLength} ext={item.container} >
                            <div className="img-wrapper">
                                <img src={imgSrc} alt="video banner" />
                                <p>{title}</p>
                            </div>

                            <div className="option">
                                <span> {item.hasVideo ? "video" : "audio"}</span>
                                <span> {item.hasVideo ? item.qualityLabel : null} </span>
                                <span>{item.audioBitrate ? `${item.audioBitrate}kbps` : `No audio`}</span>
                                <span> {item.container} </span>
                            </div>
                        </div>
                    )
                }
                )
            }
        </div>

    )

}

export default DownloadOptions  