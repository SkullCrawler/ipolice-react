import React from "react";
import StackedColChart from "./components/StackedColChart";

type Props = {
    title: string
    description: string

}

const ApexWidget2: React.FC<Props> = ({
    title,
    description,
}) => {
    return (
        <div className="card card-xl-stretch mb-5 mb-xl-8" style={{ height: 450 }}>
            {/* begin::Header */}
            <div className="card-header border-0 pt-5">
                <h3 className="card-title align-items-start flex-column">
                    <span className="card-label fw-bold fs-3 mb-1">{title}</span>
                    <span className="text-muted fw-semibold fs-7">{description}</span>
                </h3>
                {/* begin::Toolbar */}
                <div className="card-toolbar" data-kt-buttons="true" data-kt-initialized="1">

                </div>
                {/* end::Toolbar */}
            </div>
            {/* end::Header */}
            {/* begin::Body */}
            <div className="card-body">
                {/* begin::Chart */}
                <div id="kt_charts_widget_6_chart" style={{ height: 350 }}>
                    <StackedColChart />
                </div>
                {/* end::Chart */}
            </div>
            {/* end::Body */}
        </div>
    )
}

export {ApexWidget2}