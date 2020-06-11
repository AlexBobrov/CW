import React, { useState, useEffect, useCallback } from 'react';
import Hero from '../components/Hero';
import {SRLWrapper} from 'simple-react-lightbox';
import Content from "../components/Content";

const options = {
    buttons: {
        iconPadding: "7px",
        iconColor: "#FE938C"
    },
    caption: {
        captionFontFamily: "Montserrat, sans-serif",
        captionFontSize: "18px",
        captionContainerPadding: "20px 10px",
        captionColor: "#FE938C",
        captionFontWeight: 700,
        captionTextTransform: "uppercase"
    },
    settings: {
        overlayColor: "rgba(93, 87, 107, 0.9)",
        lightboxTransitionSpeed: 0.6,
        slideAnimationType: "fade",
        slideSpringValues: [300, 200],
        autoplaySpeed: 3000,
        hideControlsAfter: false
    },
    progressBar: {
        height: "3px",
        fillColor: "#FE938C",
        backgroundColor: "rgba(43, 45, 66, 0.9)"
    },
    thumbnails: {
        showThumbnails: true,
        thumbnailsPosition: "right",
        thumbnailsOpacity: 0.4,
        thumbnailsAlignment: "space-between",
        thumbnailsSize: ["130px", "100px"]
    }
};

const GalleryPage = () => {
    const [images, setImages] = useState([]);
    // console.log(images)
    let page = 0;
    const fetchData = useCallback(async () => {
        page++;
        const response = await fetch(
            "http://api.afloo/photos/" +
            page
        );
        const data = await response.json();
        setImages(prevData => {
            return [...prevData, ...data];
        });
    }, [page]);

    useEffect(() => {
        fetchData();
    }, []);



    return (
        <Content>
            <SRLWrapper options={options}>
                <div id="content-page-one" className="container content">
                    {!images ? (
                        <div className="row">
                            <div className="col-12">
                                <h1>LOADING...</h1>
                            </div>
                        </div>
                    ) : (
                        <div className="row">
                            {images.map(({ id, urls, alt_description }) => (
                                <div key={id} className="col-md-4 col-6 col-image-small">
                                    <a href={urls.regular} data-attribute="SRL">
                                        <img src={urls.small} alt={alt_description} />
                                    </a>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </SRLWrapper>
        </Content>
    )
}

export default GalleryPage;