const getVideoData = async (url, setData, setTitle, setStateError, stateError) => {

    if (!url) return

    try {
      let videoData = await fetch(`/api/v1/videos/get-info?url=${url}`);
      videoData = await videoData.json();
      setData(videoData[0].data);
      setTitle(videoData[0].data.videoDetails.title);
  
    }
    catch (error) {
      console.log(error)
      setStateError(error)
      console.log(stateError)
    }
    
}

export default getVideoData