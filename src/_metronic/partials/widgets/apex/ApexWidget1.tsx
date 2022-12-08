import React from "react";
import RadialBar from "./components/RadialBar";

type Props = {
    title: string
    description: string

}

const ApexWidget1: React.FC<Props> = ({
    title,
    description,
}) => {
    return (
        <div className="card" style={{ height: 450 }}>
            {/* begin::Body */}
            <div className="card-header border-0 pt-5">
                <h3 className="card-title align-items-start flex-column">
                    <span className="card-label fw-bold fs-3 mb-1">{title}</span>
                    <span className="text-muted fw-semibold fs-7 mt-1">{description}</span>
                </h3>
                {/* begin::Toolbar */}

                {/* end::Toolbar */}
            </div>
            <div className="d-flex flex-center w-100">
                <div className="mixed-widget-17-chart" data-kt-chart-color="primary">
                    <div>
                        <RadialBar />
                    </div>
                </div>
            </div>
            <div className="card-body">
                <div className="separator separator-dashed mb-8"></div>
                {/* begin:Search */}
                <div className="d-flex align-items-center mt-0">
                    {/* begin::Input group */}
                    <div className="position-relative w-md-400px me-md-2">
                        {/* begin::Svg Icon | path: icons/duotune/general/gen021.svg */}
                        <span className="svg-icon svg-icon-3 svg-icon-gray-500 position-absolute top-50 translate-middle ms-6">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1" transform="rotate(45 17.0365 15.1223)" fill="currentColor">
                                </rect>
                                <path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="currentColor"></path>
                            </svg>
                        </span>
                        {/* end::Svg Icon */}
                        <input type="text" className="form-control form-control-solid ps-10" name="search" value="" placeholder="100"/>
                    </div>
                    {/* end::Input group */}
                    {/* begin:Action */}

                    <div className="d-flex align-items-center">
                        <button type="submit" className="btn btn-primary me-5">Search</button>

                    </div>
                    {/* end:Action */}
                </div>


                <div className="separator separator-dashed my-8"></div>
                {/* end::Action */}
            </div>
            {/* end::Body */}
        </div>
    )
}

export {ApexWidget1}