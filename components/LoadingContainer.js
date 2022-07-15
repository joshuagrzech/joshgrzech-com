import React from 'react'
import LoadingOverlay from 'react-loading-overlay';
import Loading from './animations/Loading';
const LoadingContainer = () => {
    
    return (
        <LoadingOverlay
        active={true}
        spinner={<Loading/>}
        styles={{
            wrapper: {
            width: "100%",
            height: "100%",
            overflow: 'hidden',
            zIndex: 10
            }
        }}
        />
    );
    }

    export default LoadingContainer;