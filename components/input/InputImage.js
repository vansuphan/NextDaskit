import React, { useEffect, useState } from "react";
import Dropzone from "react-dropzone";

export default function ABC() {
    const [fileNames, setFileNames] = useState([]);
    const [files, setFiles] = useState([])
    const handleDrop = async (acceptedFiles) => {
            setFileNames(acceptedFiles.map(file => file.name));
            await setFiles(
                [...acceptedFiles.map(file =>
                    Object.assign(file, {
                        preview: URL.createObjectURL(file)
                    })
                )]
            );
    }
    // useEffect(()=>{
    //     if(files.length !== 0){
    //         console.log(files[0].preview,"file 1");
    //         console.log(files,"file 2");
    //         console.log(data, "data 1")
    //     }
    // },[files])

  return (
    <div className="1223">
      <Dropzone onDrop={handleDrop}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps({ className: "dropzone" })}>
            <input {...getInputProps()} />
            <p>Drag'n'drop files, or click to select files</p>
          </div>
        )}
      </Dropzone>
      <div>
          {files[0] ? <img src={files[0].preview}/> : null}
        <strong>Files:</strong>
        <ul>
            {files.length !== 0 ? (
                files.map(file => (
                    <>
                        <li key={file.path}>
                            <img src={file.preview}/>
                            <span>{file.path}</span>
                            <span>{file.path}</span>
                        </li>
                    </>
                    
                  ))
            ):null}
        </ul>
      </div>
    </div>
  );
}
