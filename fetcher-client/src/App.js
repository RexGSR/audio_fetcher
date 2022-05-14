import { useState } from 'react';

import GetVideoInfo from './components/GetVideoInfo';
import ShowData from './components/ShowData';
import DownloadInfo from './components/DownloadInfo';
import getVideoData from './helpers/getVideoData';
import makeDownloadLink from './helpers/makeDownloadRequest';

function App() {

  const [data, setData] = useState(null);
  const [stateError, setStateError] = useState(null);
  const [url, setUrl] = useState("https://www.youtube.com/watch?v=RBJVjZUIh1g");
  const [title, setTitle] = useState('');
  const [downloading, setDownloading] = useState(false);
  const [receivedLength, setReceivedLength] = useState(0);
  const [contentLength, setContentLength] = useState(0);


  //? to handle get video/audio info 
  const fetchInfo = async () => {
    try {
      await getVideoData(url, setData, setTitle, setStateError, stateError);
    } catch (error) {
      console.log("error while fetching video details");
    }

  }

  //? to get download event
  const downloadVideo = async (event) => {
    try {
      await makeDownloadLink(event, url, setDownloading, setContentLength, setReceivedLength, stateError, setStateError, title)
    } catch (error) {
      console.log("error while generating download link");
      console.error(error);

    }

  }

  return (
    <div className="App">
      <GetVideoInfo
        url={url}
        setUrl={setUrl}
        clickHandler={fetchInfo} />

      {
        data ? <ShowData
          data={data}
          clickHandler={downloadVideo} /> : null
      }

      {
        downloading ? <DownloadInfo
          contentLength={contentLength.toFixed(2)}
          receivedLength={receivedLength.toFixed(2)} /> : null
      }
    </div>
  );
}

export default App;
