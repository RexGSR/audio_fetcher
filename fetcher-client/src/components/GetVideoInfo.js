import PropTypes from 'prop-types'
import Button from "./Button"

const GetVideoInfo = ({ url, setUrl, clickHandler }) => {
    return (
        <div className="container">
            <h1>Download Your Favourite Audio/Video From YouTube</h1>

            <div className="info__input-wrapper">
                <input type="url" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="https://www.youtube.com/watch?v=RBJVjZUIh1g" />
                <Button text="Get Video" functionHandler={clickHandler} />
            </div>

        </div>
    )
}

GetVideoInfo.propTypes = {
    url: PropTypes.string,
    setUrl: PropTypes.func,
    clickHandler: PropTypes.func
}

export default GetVideoInfo