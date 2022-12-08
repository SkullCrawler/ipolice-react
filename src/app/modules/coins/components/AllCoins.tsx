/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"

export function AllCoins() {
  return (
    <>
      <div className="container">
        <div className="content flex-row-fluid pb-0" id="kt_content">
        {/* begin::Form  */}
        <form action="#">
            {/* begin::Card */}
            <div className="card mb-7">
                {/* begin::Card body */}
                <div className="card-body">
                    {/* begin::Compact form */}
                    <div className="d-flex align-items-center">
                        {/* begin::Input group */}
                        <div className="position-relative w-md-400px me-md-2">
                            {/* begin::Svg Icon | path: icons/duotune/general/gen021.svg */}
                            <span className="svg-icon svg-icon-3 svg-icon-gray-500 position-absolute top-50 translate-middle ms-6">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1" transform="rotate(45 17.0365 15.1223)" fill="currentColor"></rect>
                                    <path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="currentColor"></path>
                                </svg>
                            </span>
                            {/* end::Svg Icon */}
                            <input type="text" className="form-control form-control-solid ps-10" name="search" value="" placeholder="Search"/>
                        </div>
                        {/* end::Input group */}
                        {/* begin:Action */}
                        <div className="d-flex align-items-center">
                            <button type="submit" className="btn btn-primary me-5">Search</button>
                            <a id="kt_horizontal_search_advanced_link" className="btn btn-link" data-bs-toggle="collapse" href="#kt_advanced_search_form">Advanced Search</a>
                        </div>
                        {/* end:Action */}
                    </div>
                    {/* end::Compact form */}
                    {/* begin::Advance form */}
                    <div className="collapse" id="kt_advanced_search_form">
                        {/* begin::Separator */}
                        <div className="separator separator-dashed mt-9 mb-6"></div>

                        <div className="row g-8">
                            {/* begin::Col */}
                            <div className="col">
                                <label className="fs-6 form-label fw-bold text-dark">Chain</label>
                                {/* begin::Select */}
                                <select className="form-select form-select-solid select2-hidden-accessible" data-control="select2" data-placeholder="In Progress" data-hide-search="true" data-select2-id="select2-data-1-54eg" aria-hidden="true" data-kt-initialized="1"> {/*tabindex="-1"*/}
                                    <option value=""></option>
                                    <option value="1">BSC</option>
                                    <option value="2" selected={true} data-select2-id="select2-data-3-dhy8">ETH</option>
                                    <option value="3">TRON</option>
                                    <option value="4">POLYGON</option>
                                    <option value="5">SOLANA</option>
                                    <option value="6">HECO</option>
                                    <option value="7">FANTOM</option>
                                </select>
                                <span className="select2 select2-container select2-container--bootstrap5" dir="ltr" data-select2-id="select2-data-2-hqsl" >
                                  <span className="selection">
                                    <span className="select2-selection select2-selection--single form-select form-select-solid" role="combobox" aria-haspopup="true" aria-expanded="false" aria-disabled="false" aria-labelledby="select2-yhec-container" aria-controls="select2-yhec-container"> {/*tabindex="0"*/}
                                      <span className="select2-selection__rendered" id="select2-yhec-container" role="textbox" aria-readonly="true" title="ETH">
                                        ETH
                                      </span>
                                      <span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>
                                    </span>
                                  </span>
                                  <span className="dropdown-wrapper" aria-hidden="true"></span>
                                </span>
                                {/* end::Select */}
                            </div>
                            <div className="col">
                                <label className="fs-6 form-label fw-bold text-dark">Platform</label>
                                {/* begin::Select */}
                                <select className="form-select form-select-solid select2-hidden-accessible" data-control="select2" data-placeholder="In Progress" data-hide-search="true" data-select2-id="select2-data-4-yug7" aria-hidden="true" data-kt-initialized="1">
                                    <option value=""></option>
                                    <option value="1">CMC</option>
                                    <option value="2" selected={true} data-select2-id="select2-data-6-yyym">CG</option>
                                    <option value="3">All</option>
                                </select>
                                <span className="select2 select2-container select2-container--bootstrap5" dir="ltr" data-select2-id="select2-data-5-ca99" ><span className="selection"><span className="select2-selection select2-selection--single form-select form-select-solid" role="combobox" aria-haspopup="true" aria-expanded="false" aria-disabled="false" aria-labelledby="select2-f75w-container" aria-controls="select2-f75w-container">  {/*tabindex="0" */}
                                  <span className="select2-selection__rendered" id="select2-f75w-container" role="textbox" aria-readonly="true" title="CG">
                                    CG
                                  </span>
                                  <span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>
                                  </span>
                                  </span>
                                  <span className="dropdown-wrapper" aria-hidden="true"></span>
                                </span>
                                {/* end::Select */}
                            </div>
                            <div className="col">
                                <label className="fs-6 form-label fw-bold text-dark">Audit</label>
                                {/* begin::Select */}
                                <select className="form-select form-select-solid select2-hidden-accessible" data-control="select2" data-placeholder="In Progress" data-hide-search="true" data-select2-id="select2-data-7-7rkj" aria-hidden="true" data-kt-initialized="1"> {/* tabindex="-1" */}
                                    <option value=""></option>
                                    <option value="1">Yes</option>
                                    <option value="2" selected={true} data-select2-id="select2-data-9-3221">No</option>
                                    <option value="3">All</option>
                                </select>
                                <span className="select2 select2-container select2-container--bootstrap5" dir="ltr" data-select2-id="select2-data-8-hknd" >
                                  <span className="selection">
                                    <span className="select2-selection select2-selection--single form-select form-select-solid" role="combobox" aria-haspopup="true" aria-expanded="false"  aria-disabled="false" aria-labelledby="select2-ykq2-container" aria-controls="select2-ykq2-container"> {/* tabindex="0" */}
                                      <span className="select2-selection__rendered" id="select2-ykq2-container" role="textbox" aria-readonly="true" title="No">No</span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>
                                    </span>
                                  </span>
                                  <span className="dropdown-wrapper" aria-hidden="true"></span>
                                </span>
                                {/* end::Select */}
                            </div>
                            <div className="col">
                                <label className="fs-6 form-label fw-bold text-dark">KYC</label>
                                {/* begin::Select */}
                                <select className="form-select form-select-solid select2-hidden-accessible" data-control="select2" data-placeholder="In Progress" data-hide-search="true" data-select2-id="select2-data-10-n05r" aria-hidden="true" data-kt-initialized="1"> {/* tabindex="-1" */}
                                    <option value=""></option>
                                    <option value="1">Yes</option>
                                    <option value="2" selected={true} data-select2-id="select2-data-12-14ky">No</option>
                                    <option value="3">All</option>
                                </select>
                                <span className="select2 select2-container select2-container--bootstrap5" dir="ltr" data-select2-id="select2-data-11-ss37" >
                                  <span className="selection">
                                    <span className="select2-selection select2-selection--single form-select form-select-solid" role="combobox" aria-haspopup="true" aria-expanded="false" aria-disabled="false" aria-labelledby="select2-fqgp-container" aria-controls="select2-fqgp-container">{/* tabindex="0" */}
                                      <span className="select2-selection__rendered" id="select2-fqgp-container" role="textbox" aria-readonly="true" title="No">No</span>
                                      <span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>
                                    </span>
                                  </span>
                                  <span className="dropdown-wrapper" aria-hidden="true"></span>
                                </span>
                                {/* end::Select */}
                            </div>

                            {/* end::Col */}
                        </div>

                        {/* end::Row */}
                        {/* begin::Row */}

                        {/* end::Row */}
                    </div>
                    {/* end::Advance form */}
                </div>
                {/* end::Card body */}
            </div>
            {/* end::Card */}
        </form>
        {/* end::Form */}
        {/* begin::Toolbar */}

        {/* end::Toolbar */}
        {/* begin::Tab Content */}

        {/* end::Tab Content */}
    </div>



    <div className="card mb-5 mb-xl-8">
        {/* begin::Header */}

        {/* end::Header */}
        {/* begin::Body */}
        <div className="card-body py-3">
            {/* begin::Table container */}
            <div className="table-responsive">
                {/* begin::Table */}
                <table className="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
                    {/* begin::Table head */}
                    <thead>
                        <tr className="fw-bold text-muted">
                            <th className="">#</th>

                            <th className="">Coin</th>
                            <th className="">Name</th>
                            <th className="">Chain</th>
                            <th className="">Market Cap</th>
                            <th className="">Price</th>
                            <th className="">Change 24h</th>
                            <th className="">Launch</th>
                            <th className="">Votes</th>
                            <th className="">Votes 24h</th>
                            <th className="">Submittted</th>
                            <th className="">Actions</th>
                        </tr>
                    </thead>
                    {/* end::Table head */}

                    {/* begin::Table body */}
                    <tbody>
                                            </tbody>
                    {/* end::Table body */}
                </table>
                {/* end::Table */}
            </div>
            {/* end::Table container */}
        </div>
        {/* begin::Body */}
      </div>
    </div>
    </>
  )
}