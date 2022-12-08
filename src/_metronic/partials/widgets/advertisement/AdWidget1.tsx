import React from "react";

type Props = {
    adsrc1: string
    adsrc2: string
    adsrc3: string

}

const AdWidget1: React.FC<Props> = ({
    adsrc1,
    adsrc2,
    adsrc3,
}) => {
    return (
        <div id="kt_carousel_1_carousel" className="carousel carousel-custom slide mb-5" data-bs-ride="carousel" data-bs-interval="5000">
            {/* begin::Heading */}

            {/* end::Heading */}

            {/* begin::Carousel */}
            <div className="carousel-inner ">
                {/* begin::Item */}
                <div className="carousel-item">
                    <img className="d-block w-100" src={adsrc1} alt=""/>
                </div>
                {/* end::Item */}

                {/* begin::Item */}
                <div className="carousel-item active">
                    <img className="d-block w-100" src={adsrc2} alt=""/>
                </div>
                {/* end::Item */}

                {/* begin::Item */}
                <div className="carousel-item">
                    <img className="d-block w-100" src={adsrc3} alt=""/>
                </div>
                {/* end::Item */}
            </div>
            {/* end::Carousel */}
        </div>
    )
}

export {AdWidget1}