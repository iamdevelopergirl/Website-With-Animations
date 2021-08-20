const Video = ({className, videoFile}) => (
    <video width="100%" 
        autoPlay={true} 
        muted={true} 
        playsInline={true} 
        className={className}
        src={videoFile}
        data-poster="../images/bg-element-01.png"
        data-src={videoFile}>
            <source src={videoFile} data-src={videoFile} type="video/mp4">
            </source>
    </video>
);

export default Video;