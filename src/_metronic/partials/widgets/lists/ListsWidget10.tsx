/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG} from '../../../helpers'
import {Dropdown1} from '../../content/dropdown/Dropdown1'

type Props = {
  title: string
  description: string
  project1name: string
  project1domain: string
  project1reportdate: string
  project1senility: string
  project1logo: string
  project2name: string
  project2domain: string
  project2reportdate: string
  project2senility: string
  project2logo: string
  project3name: string
  project3domain: string
  project3reportdate: string
  project3senility: string
  project3logo: string
  project4name: string
  project4domain: string
  project4reportdate: string
  project4senility: string
  project4logo: string
  project5name: string
  project5domain: string
  project5reportdate: string
  project5senility: string
  project5logo: string
  project6name: string
  project6domain: string
  project6reportdate: string
  project6senility: string
  project6logo: string
  project7name: string
  project7domain: string
  project7reportdate: string
  project7senility: string
  project7logo: string
  project8name: string
  project8domain: string
  project8reportdate: string
  project8senility: string
  project8logo: string

}

const ListsWidget10: React.FC<Props> = ({
    title,
    description,
    project1name,
    project1domain,
    project1reportdate,
    project1senility,
    project1logo,
    project2name,
    project2domain,
    project2reportdate,
    project2senility,
    project2logo,
    project3name,
    project3domain,
    project3reportdate,
    project3senility,
    project3logo,
    project4name,
    project4domain,
    project4reportdate,
    project4senility,
    project4logo,
    project5name,
    project5domain,
    project5reportdate,
    project5senility,
    project5logo,
    project6name,
    project6domain,
    project6reportdate,
    project6senility,
    project6logo,
    project7name,
    project7domain,
    project7reportdate,
    project7senility,
    project7logo,
    project8name,
    project8domain,
    project8reportdate,
    project8senility,
    project8logo,
}) => {
  return (
    <div className="card h-xl ">
        {/* begin::Header */}
        <div className="card-header border-0 pt-5">
            <h3 className="card-title align-items-start flex-column">
                <span className="card-label fw-bolder text-light">{title}</span>
                <span className="text-muted mt-1 fw-bold fs-7">{description}</span>
            </h3>

        </div>
        <div className="separator separator-dashed my-3"></div>
        {/* end::Header */}
        {/* begin::Body */}
        <div className="card-body pt-6 overflow-auto" style={{ height: 300 }}>
            {/* begin::Table container */}
            <div className="table-responsive">
                {/* begin::Table */}
                <table className="table table-row-dashed align-middle gs-0 gy-3 my-0">
                    {/* begin::Table head */}
                    {/* end::Table head */}
                    {/* begin::Table body */}
                    <tbody>
                        <tr>
                            <td>
                                <div className="d-flex align-items-center">
                                    <div className="symbol symbol-50px me-3">
                                        <img src={project1logo}/>
                                    </div>
                                    <div className="d-flex justify-content-start flex-column">
                                        <a href="#" className="fw-bold text-white  fs-4">{project1name}</a>
                                        <span className="fw-bold text-white ">{project1domain}</span>
                                    </div>
                                </div>
                            </td>
                            <td className="text-end pe-0">
                                <span className="fw-bold text-white fs-6">{project1reportdate}</span>
                            </td>
                            <td className="text-end pe-0">
                                <span className="badge py-3 px-4 fs-7 badge-light-primary">{project1senility}</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="d-flex align-items-center">
                                    <div className="symbol symbol-50px me-3">
                                        <img src={project2logo}/>
                                    </div>
                                    <div className="d-flex justify-content-start flex-column">
                                        <a href="#" className="fw-bold text-white  fs-4">{project2name}</a>
                                        <span className="fw-bold text-white ">{project2domain}</span>
                                    </div>
                                </div>
                            </td>
                            <td className="text-end pe-0">
                                <span className="fw-bold text-white fs-6">{project2reportdate}</span>
                            </td>
                            <td className="text-end pe-0">
                                <span className="badge py-3 px-4 fs-7 badge-light-primary">{project2senility}</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="d-flex align-items-center">
                                    <div className="symbol symbol-50px me-3">
                                        <img src={project3logo}/>
                                    </div>
                                    <div className="d-flex justify-content-start flex-column">
                                        <a href="#" className="fw-bold text-white  fs-4">{project3name}</a>
                                        <span className="fw-bold text-white ">{project3domain}</span>
                                    </div>
                                </div>
                            </td>
                            <td className="text-end pe-0">
                                <span className="fw-bold text-white fs-6">{project3reportdate}</span>
                            </td>
                            <td className="text-end pe-0">
                                <span className="badge py-3 px-4 fs-7 badge-light-primary">{project3senility}</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="d-flex align-items-center">
                                    <div className="symbol symbol-50px me-3">
                                        <img src={project4logo}/>
                                    </div>
                                    <div className="d-flex justify-content-start flex-column">
                                        <a href="#" className="fw-bold text-white  fs-4">{project4name}</a>
                                        <span className="fw-bold text-white ">{project4domain}</span>
                                    </div>
                                </div>
                            </td>
                            <td className="text-end pe-0">
                                <span className="fw-bold text-white fs-6">{project4reportdate}</span>
                            </td>
                            <td className="text-end pe-0">
                                <span className="badge py-3 px-4 fs-7 badge-light-primary">{project4senility}</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="d-flex align-items-center">
                                    <div className="symbol symbol-50px me-3">
                                        <img src={project5logo}/>
                                    </div>
                                    <div className="d-flex justify-content-start flex-column">
                                        <a href="#" className="fw-bold text-white  fs-4">{project5name}</a>
                                        <span className="fw-bold text-white ">{project5domain}</span>
                                    </div>
                                </div>
                            </td>
                            <td className="text-end pe-0">
                                <span className="fw-bold text-white fs-6">{project5reportdate}</span>
                            </td>
                            <td className="text-end pe-0">
                                <span className="badge py-3 px-4 fs-7 badge-light-primary">{project5senility}</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="d-flex align-items-center">
                                    <div className="symbol symbol-50px me-3">
                                        <img src={project6logo}/>
                                    </div>
                                    <div className="d-flex justify-content-start flex-column">
                                        <a href="#" className="fw-bold text-white  fs-4">{project6name}</a>
                                        <span className="fw-bold text-white ">{project6domain}</span>
                                    </div>
                                </div>
                            </td>
                            <td className="text-end pe-0">
                                <span className="fw-bold text-white fs-6">{project6reportdate}</span>
                            </td>
                            <td className="text-end pe-0">
                                <span className="badge py-3 px-4 fs-7 badge-light-primary">{project6senility}</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="d-flex align-items-center">
                                    <div className="symbol symbol-50px me-3">
                                        <img src={project7logo}/>
                                    </div>
                                    <div className="d-flex justify-content-start flex-column">
                                        <a href="#" className="fw-bold text-white  fs-4">{project7name}</a>
                                        <span className="fw-bold text-white ">{project7domain}</span>
                                    </div>
                                </div>
                            </td>
                            <td className="text-end pe-0">
                                <span className="fw-bold text-white fs-6">{project7reportdate}</span>
                            </td>
                            <td className="text-end pe-0">
                                <span className="badge py-3 px-4 fs-7 badge-light-primary">{project7senility}</span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="d-flex align-items-center">
                                    <div className="symbol symbol-50px me-3">
                                        <img src={project8logo}/>
                                    </div>
                                    <div className="d-flex justify-content-start flex-column">
                                        <a href="#" className="fw-bold text-white  fs-4">{project8name}</a>
                                        <span className="fw-bold text-white ">{project8domain}</span>
                                    </div>
                                </div>
                            </td>
                            <td className="text-end pe-0">
                                <span className="fw-bold text-white fs-6">{project8reportdate}</span>
                            </td>
                            <td className="text-end pe-0">
                                <span className="badge py-3 px-4 fs-7 badge-light-primary">{project8senility}</span>
                            </td>
                        </tr>
                    </tbody>
                    {/* end::Table body */}
                </table>
            </div>
            {/* end::Table */}
        </div>
    </div>
  )
}

export {ListsWidget10}
