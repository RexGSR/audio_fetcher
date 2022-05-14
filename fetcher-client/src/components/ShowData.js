import DownloadOptions from "./DownloadOptions"

const ShowData = ({ data, clickHandler }) => {

    return (
        <div className="container optionsContainer">
            <h2 className="data-heading">Video Details</h2>
            <DownloadOptions
                formats={data.formats}
                title={data.videoDetails.title}
                clickHandler={clickHandler}
                imgSrc={data.videoDetails.thumbnails[data.videoDetails.thumbnails.length - 1].url}
            />
        </div>
    )
}

export default ShowData