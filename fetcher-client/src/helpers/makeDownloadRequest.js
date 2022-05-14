
const makeDownloadLink = async (data, url, setDownloading, setContentLength, setReceivedLength, stateError, setStateError, title) => {

  const itag = data?.target.attributes.itag.value
  const format = data?.target.attributes.format.value
  const ext = data?.target.attributes.ext.value
  const length = data?.target.attributes["content-length"].value


  let fetchUrl = `/api/v1/videos/download?itag=${itag}&videoUrl=${url}&fileName=${title ? title : format}.${ext}&length=${length}`

  if (!itag || !format || !ext || !length) {
    throw new Error('failed to obtain attributes')
  }

  try {

    //? changing state to show download component
    setDownloading(true);

    let file = await fetch(fetchUrl)

    //getting file reader from response body
    const reader = file.body.getReader();

    //getting content length header 
    //  + typecasting it into number
    const contentLength = +file.headers.get('Content-Length');

    setContentLength(contentLength / 1000000);

    //total received length
    let receivedLength = 0

    //storing the body in an array
    let chunks = []

    while (true) {
      const { done, value } = await reader.read()

      if (done) break

      chunks.push(value)
      receivedLength += value.length;

      setReceivedLength(receivedLength / 1000000)

    }


    let fileBlob = new Blob(chunks)
    const blobUrl = window.URL.createObjectURL(fileBlob)
    const link = document.createElement("a")
    link.href = blobUrl
    link.setAttribute(
      "download",
      `${title ? title : format}.${ext}`
    )
    document.body.appendChild(link)
    setDownloading(false);
    link.click()
    document.body.removeChild(link);
    window.URL.revokeObjectURL(blobUrl)
  }
  catch (error) {
    console.log(error)
    setStateError(error)
    console.log(stateError)
  }
  finally {
    return
  }
}

export default makeDownloadLink