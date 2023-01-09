// @ts-nocheck
/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'

type Props = {
  className: string
  backGroundColor: string
}

const MixedWidget16: FC<Props> = ({className, backGroundColor}) => (
    <div className="card mt-5 mb-5 mb-xl-8" style={{height: 600}}>
        {/* begin::Header */}
        <div className="card-header border-0 pt-5">
            <h3 className="card-title align-items-start flex-column">
                <span className="card-label fw-bold fs-3 mb-1">Recent Events</span>
                <span className="text-muted mt-1 fw-semibold fs-8">A list of events over the last 24 hours,
                    grouped by
                    project. The list is sorted by the relevance of the last event of the project.</span>
            </h3>
        </div>
        {/* end::Header */}
        {/* begin::Body */}
        <div className="card-body py-3 overflow-auto">
            {/* begin::Table container */}
            <div className="table-responsive">
                {/* begin::Table */}
                <table className="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
                    {/* begin::Table head */}
                    <thead>
                        <tr className="fw-bold text-muted">

                            <th className="min-w-200px">HYIPs</th>
                            <th className="min-w-150px">Events</th>

                        </tr>
                    </thead>
                    {/* end::Table head */}
                    {/* begin::Table body */}
                    <tbody>
                        <tr>
                            <td>
                                <div className="d-flex align-items-center">
                                    <div className="d-flex justify-content-start flex-column">
                                        <a href="#" className="text-dark fw-bold text-hover-primary fs-6">Revod
                                            Finance</a>
                                        <span className="text-muted fw-semibold text-muted d-block fs-7"><span className="badge badge-danger ">7.33</span><span className="badge badge-success ">Paying</span>
                                            <span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor"></rect>
                                                    <rect x="11" y="14" width="7" height="2" rx="1" transform="rotate(-90 11 14)" fill="currentColor">
                                                    </rect>
                                                    <rect x="11" y="17" width="2" height="2" rx="1" transform="rotate(-90 11 17)" fill="currentColor">
                                                    </rect>
                                                </svg></span>
                                            <span className="badge badge-primary ">new</span></span>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="row">
                                    <div className=" col m-1 p-2 bg-light " style=" min-width: fit-content; max-width: fit-content;">
                                        <a href="#" className="text-dark fw-bold text-hover-primary fs-7">Profest.com</a>
                                        <a className="text-muted text-end fw-bold text-hover-primary fs-7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4m
                                            ago</a>
                                        <span className="text-muted fw-semibold text-muted d-block fs-9">

                                            <span className="badge badge-success ">Paying</span>

                                            <span className="text-dark ">changed to</span>
                                            <span className="badge badge-danger ">Not Paying</span>

                                        </span>
                                    </div>

                                    <div className=" col m-1 p-2 bg-light " style=" min-width: fit-content; max-width: fit-content;">
                                        <a href="#" className="text-dark fw-bold text-hover-primary fs-7">Profest.com</a>
                                        <a className="text-muted text-end fw-bold text-hover-primary fs-7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4m
                                            ago</a>
                                        <span className="text-muted fw-semibold text-muted d-block fs-9">

                                            <span className="badge badge-success ">Paying</span>

                                            <span className="text-dark ">changed to</span>
                                            <span className="badge badge-danger ">Not Paying</span>

                                        </span>
                                    </div>
                                    <div className=" col m-1 p-2 bg-light " style=" min-width: fit-content; max-width: fit-content;">
                                        <a href="#" className="text-dark fw-bold text-hover-primary fs-7">Profest.com</a>
                                        <a className="text-muted text-end fw-bold text-hover-primary fs-7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4m
                                            ago</a>
                                        <span className="text-muted fw-semibold text-muted d-block fs-9">

                                            <span className="badge badge-success ">Paying</span>

                                            <span className="text-dark ">changed to</span>
                                            <span className="badge badge-danger ">Not Paying</span>

                                        </span>
                                    </div>
                                    <div className=" col m-1 p-2 bg-light " style=" min-width: fit-content; max-width: fit-content;">
                                        <a href="#" className="text-dark fw-bold text-hover-primary fs-7">Profest.com</a>
                                        <a className="text-muted text-end fw-bold text-hover-primary fs-7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4m
                                            ago</a>
                                        <span className="text-muted fw-semibold text-muted d-block fs-9">

                                            <span className="badge badge-success ">Paying</span>

                                            <span className="text-dark ">changed to</span>
                                            <span className="badge badge-danger ">Not Paying</span>

                                        </span>
                                    </div>
                                    <div className=" col m-1 p-2 bg-light " style=" min-width: fit-content; max-width: fit-content;">
                                        <a href="#" className="text-dark fw-bold text-hover-primary fs-7">Profest.com</a>
                                        <a className="text-muted text-end fw-bold text-hover-primary fs-7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4m
                                            ago</a>
                                        <span className="text-muted fw-semibold text-muted d-block fs-9">

                                            <span className="badge badge-success ">Paying</span>

                                            <span className="text-dark ">changed to</span>
                                            <span className="badge badge-danger ">Not Paying</span>

                                        </span>
                                    </div>
                                    <div className=" col m-1 p-2 bg-light " style=" min-width: fit-content; max-width: fit-content;">
                                        <a href="#" className="text-dark fw-bold text-hover-primary fs-7">Profest.com</a>
                                        <a className="text-muted text-end fw-bold text-hover-primary fs-7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4m
                                            ago</a>
                                        <span className="text-muted fw-semibold text-muted d-block fs-9">

                                            <span className="badge badge-success ">Paying</span>

                                            <span className="text-dark ">changed to</span>
                                            <span className="badge badge-danger ">Not Paying</span>

                                        </span>
                                    </div>
                                    <div className=" col m-1 p-2 bg-light " style=" min-width: fit-content; max-width: fit-content;">
                                        <a href="#" className="text-dark fw-bold text-hover-primary fs-7">Profest.com</a>
                                        <a className="text-muted text-end fw-bold text-hover-primary fs-7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4m
                                            ago</a>
                                        <span className="text-muted fw-semibold text-muted d-block fs-9">

                                            <span className="badge badge-success ">Paying</span>

                                            <span className="text-dark ">changed to</span>
                                            <span className="badge badge-danger ">Not Paying</span>

                                        </span>
                                    </div>

                                </div>
                            </td>

                        </tr>
                        <tr>

                            <td>
                                <div className="d-flex align-items-center">

                                    <div className="d-flex justify-content-start flex-column">
                                        <a href="#" className="text-dark fw-bold text-hover-primary fs-6">Revod
                                            Finance</a>
                                        <span className="text-muted fw-semibold text-muted d-block fs-7"><span className="badge badge-danger ">7.33</span><span className="badge badge-success ">Paying</span>
                                            <span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor"></rect>
                                                    <rect x="11" y="14" width="7" height="2" rx="1" transform="rotate(-90 11 14)" fill="currentColor">
                                                    </rect>
                                                    <rect x="11" y="17" width="2" height="2" rx="1" transform="rotate(-90 11 17)" fill="currentColor">
                                                    </rect>
                                                </svg></span>
                                            <span className="badge badge-primary ">new</span></span>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="row">
                                    <div className=" col m-1 p-2 bg-light " style=" min-width: fit-content; max-width: fit-content;">
                                        <a href="#" className="text-dark fw-bold text-hover-primary fs-7">Profest.com</a>
                                        <a className="text-muted text-end fw-bold text-hover-primary fs-7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4m
                                            ago</a>
                                        <span className="text-muted fw-semibold text-muted d-block fs-9">

                                            <span className="badge badge-success ">Paying</span>

                                            <span className="text-dark ">changed to</span>
                                            <span className="badge badge-danger ">Not Paying</span>

                                        </span>
                                    </div>

                                    <div className=" col m-1 p-2 bg-light " style=" min-width: fit-content; max-width: fit-content;">
                                        <a href="#" className="text-dark fw-bold text-hover-primary fs-7">Profest.com</a>
                                        <a className="text-muted text-end fw-bold text-hover-primary fs-7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4m
                                            ago</a>
                                        <span className="text-muted fw-semibold text-muted d-block fs-9">

                                            <span className="badge badge-success ">Paying</span>

                                            <span className="text-dark ">changed to</span>
                                            <span className="badge badge-danger ">Not Paying</span>

                                        </span>
                                    </div>
                                    <div className=" col m-1 p-2 bg-light " style=" min-width: fit-content; max-width: fit-content;">
                                        <a href="#" className="text-dark fw-bold text-hover-primary fs-7">Profest.com</a>
                                        <a className="text-muted text-end fw-bold text-hover-primary fs-7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4m
                                            ago</a>
                                        <span className="text-muted fw-semibold text-muted d-block fs-9">

                                            <span className="badge badge-success ">Paying</span>

                                            <span className="text-dark ">changed to</span>
                                            <span className="badge badge-danger ">Not Paying</span>

                                        </span>
                                    </div>
                                    <div className=" col m-1 p-2 bg-light " style=" min-width: fit-content; max-width: fit-content;">
                                        <a href="#" className="text-dark fw-bold text-hover-primary fs-7">Profest.com</a>
                                        <a className="text-muted text-end fw-bold text-hover-primary fs-7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4m
                                            ago</a>
                                        <span className="text-muted fw-semibold text-muted d-block fs-9">

                                            <span className="badge badge-success ">Paying</span>

                                            <span className="text-dark ">changed to</span>
                                            <span className="badge badge-danger ">Not Paying</span>

                                        </span>
                                    </div>
                                    <div className=" col m-1 p-2 bg-light " style=" min-width: fit-content; max-width: fit-content;">
                                        <a href="#" className="text-dark fw-bold text-hover-primary fs-7">Profest.com</a>
                                        <a className="text-muted text-end fw-bold text-hover-primary fs-7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4m
                                            ago</a>
                                        <span className="text-muted fw-semibold text-muted d-block fs-9">

                                            <span className="badge badge-success ">Paying</span>

                                            <span className="text-dark ">changed to</span>
                                            <span className="badge badge-danger ">Not Paying</span>

                                        </span>
                                    </div>
                                    <div className=" col m-1 p-2 bg-light " style=" min-width: fit-content; max-width: fit-content;">
                                        <a href="#" className="text-dark fw-bold text-hover-primary fs-7">Profest.com</a>
                                        <a className="text-muted text-end fw-bold text-hover-primary fs-7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4m
                                            ago</a>
                                        <span className="text-muted fw-semibold text-muted d-block fs-9">

                                            <span className="badge badge-success ">Paying</span>

                                            <span className="text-dark ">changed to</span>
                                            <span className="badge badge-danger ">Not Paying</span>

                                        </span>
                                    </div>
                                    <div className=" col m-1 p-2 bg-light " style=" min-width: fit-content; max-width: fit-content;">
                                        <a href="#" className="text-dark fw-bold text-hover-primary fs-7">Profest.com</a>
                                        <a className="text-muted text-end fw-bold text-hover-primary fs-7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4m
                                            ago</a>
                                        <span className="text-muted fw-semibold text-muted d-block fs-9">

                                            <span className="badge badge-success ">Paying</span>

                                            <span className="text-dark ">changed to</span>
                                            <span className="badge badge-danger ">Not Paying</span>

                                        </span>
                                    </div>

                                </div>
                            </td>

                        </tr>
                        <tr>

                            <td>
                                <div className="d-flex align-items-center">

                                    <div className="d-flex justify-content-start flex-column">
                                        <a href="#" className="text-dark fw-bold text-hover-primary fs-6">Revod
                                            Finance</a>
                                        <span className="text-muted fw-semibold text-muted d-block fs-7"><span className="badge badge-danger ">7.33</span><span className="badge badge-success ">Paying</span>
                                            <span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor"></rect>
                                                    <rect x="11" y="14" width="7" height="2" rx="1" transform="rotate(-90 11 14)" fill="currentColor">
                                                    </rect>
                                                    <rect x="11" y="17" width="2" height="2" rx="1" transform="rotate(-90 11 17)" fill="currentColor">
                                                    </rect>
                                                </svg></span>
                                            <span className="badge badge-primary ">new</span></span>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="row">
                                    <div className=" col m-1 p-2 bg-light " style=" min-width: fit-content; max-width: fit-content;">
                                        <a href="#" className="text-dark fw-bold text-hover-primary fs-7">Profest.com</a>
                                        <a className="text-muted text-end fw-bold text-hover-primary fs-7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4m
                                            ago</a>
                                        <span className="text-muted fw-semibold text-muted d-block fs-9">

                                            <span className="badge badge-success ">Paying</span>

                                            <span className="text-dark ">changed to</span>
                                            <span className="badge badge-danger ">Not Paying</span>

                                        </span>
                                    </div>

                                    <div className=" col m-1 p-2 bg-light " style=" min-width: fit-content; max-width: fit-content;">
                                        <a href="#" className="text-dark fw-bold text-hover-primary fs-7">Profest.com</a>
                                        <a className="text-muted text-end fw-bold text-hover-primary fs-7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4m
                                            ago</a>
                                        <span className="text-muted fw-semibold text-muted d-block fs-9">

                                            <span className="badge badge-success ">Paying</span>

                                            <span className="text-dark ">changed to</span>
                                            <span className="badge badge-danger ">Not Paying</span>

                                        </span>
                                    </div>
                                    <div className=" col m-1 p-2 bg-light " style=" min-width: fit-content; max-width: fit-content;">
                                        <a href="#" className="text-dark fw-bold text-hover-primary fs-7">Profest.com</a>
                                        <a className="text-muted text-end fw-bold text-hover-primary fs-7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4m
                                            ago</a>
                                        <span className="text-muted fw-semibold text-muted d-block fs-9">

                                            <span className="badge badge-success ">Paying</span>

                                            <span className="text-dark ">changed to</span>
                                            <span className="badge badge-danger ">Not Paying</span>

                                        </span>
                                    </div>
                                    <div className=" col m-1 p-2 bg-light " style=" min-width: fit-content; max-width: fit-content;">
                                        <a href="#" className="text-dark fw-bold text-hover-primary fs-7">Profest.com</a>
                                        <a className="text-muted text-end fw-bold text-hover-primary fs-7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4m
                                            ago</a>
                                        <span className="text-muted fw-semibold text-muted d-block fs-9">

                                            <span className="badge badge-success ">Paying</span>

                                            <span className="text-dark ">changed to</span>
                                            <span className="badge badge-danger ">Not Paying</span>

                                        </span>
                                    </div>
                                    <div className=" col m-1 p-2 bg-light " style=" min-width: fit-content; max-width: fit-content;">
                                        <a href="#" className="text-dark fw-bold text-hover-primary fs-7">Profest.com</a>
                                        <a className="text-muted text-end fw-bold text-hover-primary fs-7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4m
                                            ago</a>
                                        <span className="text-muted fw-semibold text-muted d-block fs-9">

                                            <span className="badge badge-success ">Paying</span>

                                            <span className="text-dark ">changed to</span>
                                            <span className="badge badge-danger ">Not Paying</span>

                                        </span>
                                    </div>
                                    <div className=" col m-1 p-2 bg-light " style=" min-width: fit-content; max-width: fit-content;">
                                        <a href="#" className="text-dark fw-bold text-hover-primary fs-7">Profest.com</a>
                                        <a className="text-muted text-end fw-bold text-hover-primary fs-7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4m
                                            ago</a>
                                        <span className="text-muted fw-semibold text-muted d-block fs-9">

                                            <span className="badge badge-success ">Paying</span>

                                            <span className="text-dark ">changed to</span>
                                            <span className="badge badge-danger ">Not Paying</span>

                                        </span>
                                    </div>
                                    <div className=" col m-1 p-2 bg-light " style=" min-width: fit-content; max-width: fit-content;">
                                        <a href="#" className="text-dark fw-bold text-hover-primary fs-7">Profest.com</a>
                                        <a className="text-muted text-end fw-bold text-hover-primary fs-7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4m
                                            ago</a>
                                        <span className="text-muted fw-semibold text-muted d-block fs-9">

                                            <span className="badge badge-success ">Paying</span>

                                            <span className="text-dark ">changed to</span>
                                            <span className="badge badge-danger ">Not Paying</span>

                                        </span>
                                    </div>

                                </div>
                            </td>

                        </tr>
                        <tr>

                            <td>
                                <div className="d-flex align-items-center">

                                    <div className="d-flex justify-content-start flex-column">
                                        <a href="#" className="text-dark fw-bold text-hover-primary fs-6">Revod
                                            Finance</a>
                                        <span className="text-muted fw-semibold text-muted d-block fs-7"><span className="badge badge-danger ">7.33</span><span className="badge badge-success ">Paying</span>
                                            <span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor"></rect>
                                                    <rect x="11" y="14" width="7" height="2" rx="1" transform="rotate(-90 11 14)" fill="currentColor">
                                                    </rect>
                                                    <rect x="11" y="17" width="2" height="2" rx="1" transform="rotate(-90 11 17)" fill="currentColor">
                                                    </rect>
                                                </svg></span>
                                            <span className="badge badge-primary ">new</span></span>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="row">
                                    <div className=" col m-1 p-2 bg-light " style=" min-width: fit-content; max-width: fit-content;">
                                        <a href="#" className="text-dark fw-bold text-hover-primary fs-7">Profest.com</a>
                                        <a className="text-muted text-end fw-bold text-hover-primary fs-7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4m
                                            ago</a>
                                        <span className="text-muted fw-semibold text-muted d-block fs-9">

                                            <span className="badge badge-success ">Paying</span>

                                            <span className="text-dark ">changed to</span>
                                            <span className="badge badge-danger ">Not Paying</span>

                                        </span>
                                    </div>

                                    <div className=" col m-1 p-2 bg-light " style=" min-width: fit-content; max-width: fit-content;">
                                        <a href="#" className="text-dark fw-bold text-hover-primary fs-7">Profest.com</a>
                                        <a className="text-muted text-end fw-bold text-hover-primary fs-7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4m
                                            ago</a>
                                        <span className="text-muted fw-semibold text-muted d-block fs-9">

                                            <span className="badge badge-success ">Paying</span>

                                            <span className="text-dark ">changed to</span>
                                            <span className="badge badge-danger ">Not Paying</span>

                                        </span>
                                    </div>
                                    <div className=" col m-1 p-2 bg-light " style=" min-width: fit-content; max-width: fit-content;">
                                        <a href="#" className="text-dark fw-bold text-hover-primary fs-7">Profest.com</a>
                                        <a className="text-muted text-end fw-bold text-hover-primary fs-7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4m
                                            ago</a>
                                        <span className="text-muted fw-semibold text-muted d-block fs-9">

                                            <span className="badge badge-success ">Paying</span>

                                            <span className="text-dark ">changed to</span>
                                            <span className="badge badge-danger ">Not Paying</span>

                                        </span>
                                    </div>
                                    <div className=" col m-1 p-2 bg-light " style=" min-width: fit-content; max-width: fit-content;">
                                        <a href="#" className="text-dark fw-bold text-hover-primary fs-7">Profest.com</a>
                                        <a className="text-muted text-end fw-bold text-hover-primary fs-7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4m
                                            ago</a>
                                        <span className="text-muted fw-semibold text-muted d-block fs-9">

                                            <span className="badge badge-success ">Paying</span>

                                            <span className="text-dark ">changed to</span>
                                            <span className="badge badge-danger ">Not Paying</span>

                                        </span>
                                    </div>
                                    <div className=" col m-1 p-2 bg-light " style=" min-width: fit-content; max-width: fit-content;">
                                        <a href="#" className="text-dark fw-bold text-hover-primary fs-7">Profest.com</a>
                                        <a className="text-muted text-end fw-bold text-hover-primary fs-7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4m
                                            ago</a>
                                        <span className="text-muted fw-semibold text-muted d-block fs-9">

                                            <span className="badge badge-success ">Paying</span>

                                            <span className="text-dark ">changed to</span>
                                            <span className="badge badge-danger ">Not Paying</span>

                                        </span>
                                    </div>
                                    <div className=" col m-1 p-2 bg-light " style=" min-width: fit-content; max-width: fit-content;">
                                        <a href="#" className="text-dark fw-bold text-hover-primary fs-7">Profest.com</a>
                                        <a className="text-muted text-end fw-bold text-hover-primary fs-7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4m
                                            ago</a>
                                        <span className="text-muted fw-semibold text-muted d-block fs-9">

                                            <span className="badge badge-success ">Paying</span>

                                            <span className="text-dark ">changed to</span>
                                            <span className="badge badge-danger ">Not Paying</span>

                                        </span>
                                    </div>
                                    <div className=" col m-1 p-2 bg-light " style=" min-width: fit-content; max-width: fit-content;">
                                        <a href="#" className="text-dark fw-bold text-hover-primary fs-7">Profest.com</a>
                                        <a className="text-muted text-end fw-bold text-hover-primary fs-7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4m
                                            ago</a>
                                        <span className="text-muted fw-semibold text-muted d-block fs-9">

                                            <span className="badge badge-success ">Paying</span>

                                            <span className="text-dark ">changed to</span>
                                            <span className="badge badge-danger ">Not Paying</span>

                                        </span>
                                    </div>

                                </div>
                            </td>

                        </tr>
                        <tr>

                            <td>
                                <div className="d-flex align-items-center">

                                    <div className="d-flex justify-content-start flex-column">
                                        <a href="#" className="text-dark fw-bold text-hover-primary fs-6">Revod
                                            Finance</a>
                                        <span className="text-muted fw-semibold text-muted d-block fs-7"><span className="badge badge-danger ">7.33</span><span className="badge badge-success ">Paying</span>
                                            <span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor"></rect>
                                                    <rect x="11" y="14" width="7" height="2" rx="1" transform="rotate(-90 11 14)" fill="currentColor">
                                                    </rect>
                                                    <rect x="11" y="17" width="2" height="2" rx="1" transform="rotate(-90 11 17)" fill="currentColor">
                                                    </rect>
                                                </svg></span>
                                            <span className="badge badge-primary ">new</span></span>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="row">
                                    <div className=" col m-1 p-2 bg-light " style=" min-width: fit-content; max-width: fit-content;">
                                        <a href="#" className="text-dark fw-bold text-hover-primary fs-7">Profest.com</a>
                                        <a className="text-muted text-end fw-bold text-hover-primary fs-7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4m
                                            ago</a>
                                        <span className="text-muted fw-semibold text-muted d-block fs-9">

                                            <span className="badge badge-success ">Paying</span>

                                            <span className="text-dark ">changed to</span>
                                            <span className="badge badge-danger ">Not Paying</span>

                                        </span>
                                    </div>

                                    <div className=" col m-1 p-2 bg-light " style=" min-width: fit-content; max-width: fit-content;">
                                        <a href="#" className="text-dark fw-bold text-hover-primary fs-7">Profest.com</a>
                                        <a className="text-muted text-end fw-bold text-hover-primary fs-7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4m
                                            ago</a>
                                        <span className="text-muted fw-semibold text-muted d-block fs-9">

                                            <span className="badge badge-success ">Paying</span>

                                            <span className="text-dark ">changed to</span>
                                            <span className="badge badge-danger ">Not Paying</span>

                                        </span>
                                    </div>
                                    <div className=" col m-1 p-2 bg-light " style=" min-width: fit-content; max-width: fit-content;">
                                        <a href="#" className="text-dark fw-bold text-hover-primary fs-7">Profest.com</a>
                                        <a className="text-muted text-end fw-bold text-hover-primary fs-7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4m
                                            ago</a>
                                        <span className="text-muted fw-semibold text-muted d-block fs-9">

                                            <span className="badge badge-success ">Paying</span>

                                            <span className="text-dark ">changed to</span>
                                            <span className="badge badge-danger ">Not Paying</span>

                                        </span>
                                    </div>
                                    <div className=" col m-1 p-2 bg-light " style=" min-width: fit-content; max-width: fit-content;">
                                        <a href="#" className="text-dark fw-bold text-hover-primary fs-7">Profest.com</a>
                                        <a className="text-muted text-end fw-bold text-hover-primary fs-7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4m
                                            ago</a>
                                        <span className="text-muted fw-semibold text-muted d-block fs-9">

                                            <span className="badge badge-success ">Paying</span>

                                            <span className="text-dark ">changed to</span>
                                            <span className="badge badge-danger ">Not Paying</span>

                                        </span>
                                    </div>
                                    <div className=" col m-1 p-2 bg-light " style=" min-width: fit-content; max-width: fit-content;">
                                        <a href="#" className="text-dark fw-bold text-hover-primary fs-7">Profest.com</a>
                                        <a className="text-muted text-end fw-bold text-hover-primary fs-7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4m
                                            ago</a>
                                        <span className="text-muted fw-semibold text-muted d-block fs-9">

                                            <span className="badge badge-success ">Paying</span>

                                            <span className="text-dark ">changed to</span>
                                            <span className="badge badge-danger ">Not Paying</span>

                                        </span>
                                    </div>
                                    <div className=" col m-1 p-2 bg-light " style=" min-width: fit-content; max-width: fit-content;">
                                        <a href="#" className="text-dark fw-bold text-hover-primary fs-7">Profest.com</a>
                                        <a className="text-muted text-end fw-bold text-hover-primary fs-7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4m
                                            ago</a>
                                        <span className="text-muted fw-semibold text-muted d-block fs-9">

                                            <span className="badge badge-success ">Paying</span>

                                            <span className="text-dark ">changed to</span>
                                            <span className="badge badge-danger ">Not Paying</span>

                                        </span>
                                    </div>
                                    <div className=" col m-1 p-2 bg-light " style=" min-width: fit-content; max-width: fit-content;">
                                        <a href="#" className="text-dark fw-bold text-hover-primary fs-7">Profest.com</a>
                                        <a className="text-muted text-end fw-bold text-hover-primary fs-7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4m
                                            ago</a>
                                        <span className="text-muted fw-semibold text-muted d-block fs-9">

                                            <span className="badge badge-success ">Paying</span>

                                            <span className="text-dark ">changed to</span>
                                            <span className="badge badge-danger ">Not Paying</span>

                                        </span>
                                    </div>

                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="d-flex align-items-center">
                                    <div className="d-flex justify-content-start flex-column">
                                        <a href="#" className="text-dark fw-bold text-hover-primary fs-6">Revod
                                            Finance</a>
                                        <span className="text-muted fw-semibold text-muted d-block fs-7"><span className="badge badge-danger ">7.33</span><span className="badge badge-success ">Paying</span>
                                            <span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor"></rect>
                                                    <rect x="11" y="14" width="7" height="2" rx="1" transform="rotate(-90 11 14)" fill="currentColor">
                                                    </rect>
                                                    <rect x="11" y="17" width="2" height="2" rx="1" transform="rotate(-90 11 17)" fill="currentColor">
                                                    </rect>
                                                </svg></span>
                                            <span className="badge badge-primary ">new</span></span>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className="row">
                                    <div className=" col m-1 p-2 bg-light " style=" min-width: fit-content; max-width: fit-content;">
                                        <a href="#" className="text-dark fw-bold text-hover-primary fs-7">Profest.com</a>
                                        <a className="text-muted text-end fw-bold text-hover-primary fs-7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4m
                                            ago</a>
                                        <span className="text-muted fw-semibold text-muted d-block fs-9">

                                            <span className="badge badge-success ">Paying</span>

                                            <span className="text-dark ">changed to</span>
                                            <span className="badge badge-danger ">Not Paying</span>

                                        </span>
                                    </div>

                                    <div className=" col m-1 p-2 bg-light " style=" min-width: fit-content; max-width: fit-content;">
                                        <a href="#" className="text-dark fw-bold text-hover-primary fs-7">Profest.com</a>
                                        <a className="text-muted text-end fw-bold text-hover-primary fs-7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4m
                                            ago</a>
                                        <span className="text-muted fw-semibold text-muted d-block fs-9">

                                            <span className="badge badge-success ">Paying</span>

                                            <span className="text-dark ">changed to</span>
                                            <span className="badge badge-danger ">Not Paying</span>

                                        </span>
                                    </div>
                                    <div className=" col m-1 p-2 bg-light " style=" min-width: fit-content; max-width: fit-content;">
                                        <a href="#" className="text-dark fw-bold text-hover-primary fs-7">Profest.com</a>
                                        <a className="text-muted text-end fw-bold text-hover-primary fs-7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4m
                                            ago</a>
                                        <span className="text-muted fw-semibold text-muted d-block fs-9">

                                            <span className="badge badge-success ">Paying</span>

                                            <span className="text-dark ">changed to</span>
                                            <span className="badge badge-danger ">Not Paying</span>

                                        </span>
                                    </div>
                                    <div className=" col m-1 p-2 bg-light " style=" min-width: fit-content; max-width: fit-content;">
                                        <a href="#" className="text-dark fw-bold text-hover-primary fs-7">Profest.com</a>
                                        <a className="text-muted text-end fw-bold text-hover-primary fs-7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4m
                                            ago</a>
                                        <span className="text-muted fw-semibold text-muted d-block fs-9">

                                            <span className="badge badge-success ">Paying</span>

                                            <span className="text-dark ">changed to</span>
                                            <span className="badge badge-danger ">Not Paying</span>

                                        </span>
                                    </div>
                                    <div className=" col m-1 p-2 bg-light " style=" min-width: fit-content; max-width: fit-content;">
                                        <a href="#" className="text-dark fw-bold text-hover-primary fs-7">Profest.com</a>
                                        <a className="text-muted text-end fw-bold text-hover-primary fs-7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4m
                                            ago</a>
                                        <span className="text-muted fw-semibold text-muted d-block fs-9">

                                            <span className="badge badge-success ">Paying</span>

                                            <span className="text-dark ">changed to</span>
                                            <span className="badge badge-danger ">Not Paying</span>

                                        </span>
                                    </div>
                                    <div className=" col m-1 p-2 bg-light " style=" min-width: fit-content; max-width: fit-content;">
                                        <a href="#" className="text-dark fw-bold text-hover-primary fs-7">Profest.com</a>
                                        <a className="text-muted text-end fw-bold text-hover-primary fs-7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4m
                                            ago</a>
                                        <span className="text-muted fw-semibold text-muted d-block fs-9">

                                            <span className="badge badge-success ">Paying</span>

                                            <span className="text-dark ">changed to</span>
                                            <span className="badge badge-danger ">Not Paying</span>

                                        </span>
                                    </div>
                                    <div className=" col m-1 p-2 bg-light " style=" min-width: fit-content; max-width: fit-content;">
                                        <a href="#" className="text-dark fw-bold text-hover-primary fs-7">Profest.com</a>
                                        <a className="text-muted text-end fw-bold text-hover-primary fs-7">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4m
                                            ago</a>
                                        <span className="text-muted fw-semibold text-muted d-block fs-9">

                                            <span className="badge badge-success ">Paying</span>

                                            <span className="text-dark ">changed to</span>
                                            <span className="badge badge-danger ">Not Paying</span>

                                        </span>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                    {/* end::Table body */}
                </table>
                {/* end::Table */}
            </div>
            {/* end::Table container */}
        </div>
        {/* begin::Body */}
    </div>
)

export {MixedWidget16}
