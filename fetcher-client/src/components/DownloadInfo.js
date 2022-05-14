
function DownloadInfo({contentLength, receivedLength}){

    return(
        <div className="floating__download">
            <span>Downloading...</span>
            <div><span>{receivedLength} MB/{contentLength} MB</span></div>
        </div>
    )
}

export default DownloadInfo