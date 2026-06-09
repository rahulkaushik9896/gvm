import Footer from "../components/layout/Footer";
import { headerLinks } from "../data/navigation";
import HeroSection from "../components/sections/home/HeroSection";
import { useState } from "react";

// ---------------------------------------------------------------------------
// Document imports — uncomment each once the file exists at the given path
// ---------------------------------------------------------------------------

// Section B — Documents and Information
import recognitionCertific   from "../assets/mandatoryDisclosureDocuments/GVMPS AFFILIATION LETTER_250408_102923.pdf";
import buildingCertificate   from "../assets/mandatoryDisclosureDocuments/building safety gvmps old.pdf";
import fireCertificate       from "../assets/mandatoryDisclosureDocuments/FireSafetyGvm.pdf";
import waterHealthCertificateTestReport  from "../assets/mandatoryDisclosureDocuments/WATER REPORTING CBSE.pdf";
import waterHealthCertificate  from "../assets/mandatoryDisclosureDocuments/hygenic cerificate gvmps 2026.pdf";
import LandCertificate from "../assets/mandatoryDisclosureDocuments/landStructure.pdf"



// Section C — Result and Academics
import GVM12THResult from "../assets/mandatoryDisclosureDocuments/GVMPS XII RESULT 2025-26-1.pdf"
import poshCOMM  from "../assets/mandatoryDisclosureDocuments/POSH-COMM.pdf";
import POCSO    from "../assets/mandatoryDisclosureDocuments/POCSO.pdf";
import copyOfSocieties from "../assets/mandatoryDisclosureDocuments/KR Education Society (Amended MOA & Bye-Laws).pdf";
import academicCalender from "../assets/mandatoryDisclosureDocuments/AcademicCLENDER.pdf";
import PTA from "../assets/mandatoryDisclosureDocuments/PTA Details.pdf";
import feeStructure from "../assets/mandatoryDisclosureDocuments/GVMPSFeeStructure.pdf";
import teacherDetails from "../assets/mandatoryDisclosureDocuments/Teachers's Details.pdf";
 
// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface RowLink {
    href: string;
    text: string;
    external?: boolean;
}

interface Row {
    label: string;
    value?: string;
    link?: RowLink;
    sub?: boolean;
}

interface Section {
    id: string;
    title: string;
    rows: Row[];
}

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const sections: Section[] = [
    {
        id: "A",
        title: "General Information",
        rows: [
            { label: "Name of the School", value: "Geeta Vidya Mandir Public School" },
            { label: "Affiliation No. (If Applicable)", value: "530347" },
            { label: "School Code (If Applicable)", value: "40354" },
            {
                label: "Complete Address with Pincode",
                value: "Nimbri, Sanoli Road, Panipat-132103, Haryana",
            },
            {
                label: "Principal Name & Qualification",
                value: "Mrs. Shaifalika (M.A, M.Ed)",
            },
            { label: "School Email ID", value: "gvmpss@gmail.com" },
            { label: "Contact Details (Landline / Mobile)", value: "+91 99966-23013" },
        ],
    },
    {
        id: "B",
        title: "Documents and Information",
        rows: [
            {
                label: "Copies of Affiliation / Upgradation Letter and Recent Extension of Affiliation, if any",
                link: { href: recognitionCertific, text: "Download" },
          
            },
            
            {
                label: "Copies of Societies / Trust / Company Registration / Renewal Certificate",
                link: { href: copyOfSocieties, text: "Download" },
              
            },
            {
                label: "Copy of No Objection Certificate (NOC) Issued by State Govt./UT",
                // link: { href: noc, text: "Download" },
                link: { href: "#", text: "Download" },
            },
            {
                label: "Copies of Recognition Certificate under RTE Act, 2009",
                // link: { href: recognitionCertific, text: "Download" },
                link: { href: "#", text: "Download" },
            },
            {
                label: "Copy of Valid Building Safety Certificate",
                link: { href: buildingCertificate, text: "Download" },
               
            },
            {
                label: "Copy of Valid Fire Safety Certificate",
                link: { href: fireCertificate, text: "Download" },
               
            },
            {
                label: "Copy of Self Certification for Affiliation / Upgradation / Extension",
                // link: { href: selfCertificationProforma, text: "Download" },
                link: { href: "#", text: "Download" },
            },
            {
                label: "Copies of Valid Water, Health and Sanitation Certificates",
                link: { href: waterHealthCertificate, text: "Download" },
               
            },
            {
                label: "Copy of Valid Water Test Report",
                link: { href: waterHealthCertificateTestReport, text: "Download" },
              
            },
            {
                label: "Copy of Valid Land Certificate",
                link: { href: LandCertificate, text: "Download" },
                
            },
        ],
    },
    {
        id: "C",
        title: "Result and Academics",
        rows: [
            {
                label: "Fee Structure of the School 2025-26",
                link: { href: feeStructure, text: "Download" },
            },
            {
                label: "Academic Calendar of the School 2026",
                link: { href: academicCalender, text: "Download" },
               
            },
             {
                label: "Last 3 Year Result",
                link: { href: GVM12THResult, text: "Download" },
               
            },
            {
                label: "List of School Management Committee (SMC)",
                link: { href: "#", text: "Download" },
            },
            {
                label: "POCSO Committee Members List",
                link: { href: POCSO, text: "Download" },
               
            },
            {
                label: "POSH Committee Members List",
                link: { href: poshCOMM, text: "Download" },
               
            },
            {
                label: "List of Parents Teachers Association (PTA) Members",
                link: { href: PTA, text: "Download" },
                
            },
            {
                label: "Teachers Details",
                link: { href: teacherDetails, text: "Download" },
                
            },
        ],
    },
    {
        id: "D",
        title: "Staff (Teaching)",
        rows: [
            { label: "Principal", value: "1" },
            { label: "Total No. of Teachers", value: "25" },
            
            { label: "PPRTs", value: "5", sub: true },
            { label: "PRTs", value: "5", sub: true },
            { label: "TGTs", value: "5", sub: true },
            { label: "PGTs", value: "10", sub: true },
            
            { label: "Other Non-Teaching Staff", value: "1" },
            { label: "Teachers Section Ratio", value: "1:2:1" },
            { label: "Detail of Special Educator", value: "MS. SHEETAL KHATRI" },
            // { label: "Detail of Counsellor and Wellness Teacher", value: "MS. SEEMA VASHISTHA" },
        ],
    },
    {
        id: "E",
        title: "School Infrastructure",
        rows: [
            { label: "Total Campus Area of the School (in Square Mtr)", value: "8093 SQ. MTR." },
            { label: "Total Number of Class Rooms", value: "20" },
            { label: "Total Number of Laboratories Including Computer Labs", value: "6" },
            { label: "Internet Facility", value: "YES" },
            { label: "Number of Girls Toilets", value: "3" },
            { label: "Number of Boys Toilets", value: "3" },
            {
                label: "Instagram Video of the School Covering the Infrastructure",
                link: {
                    href: "https://www.instagram.com/geetavidyamandir/",
                    text: "View Link",
                    external: true,
                },
            },
        ],
    },
];

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

interface SectionTableProps {
    section: Section;
}

function SectionTable({ section }: SectionTableProps) {
    const [open, setOpen] = useState<boolean>(true);

    return (
        <div className="mb-10 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
            {/* Section Header */}
            <button
                onClick={() => setOpen((o) => !o)}
                className="w-full flex items-center justify-between px-6 py-4 bg-slate-800 text-white text-left hover:bg-slate-700 transition-colors duration-200"
            >
                <span className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-400 text-slate-900 font-bold text-sm">
                        {section.id}
                    </span>
                    <span className="font-semibold tracking-wide text-sm uppercase">
                        {section.title}
                    </span>
                </span>
                <svg
                    className={`w-5 h-5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {/* Table */}
            {open && (
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="bg-slate-100 text-slate-600 uppercase text-xs tracking-wider">
                                <th className="py-3 px-4 text-left font-semibold w-12">S.No.</th>
                                <th className="py-3 px-4 text-left font-semibold">Information</th>
                                <th className="py-3 px-4 text-left font-semibold">Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {section.rows.map((row: Row, i: number) => (
                                <tr
                                    key={i}
                                    className={`border-t border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50"
                                        } hover:bg-amber-50 transition-colors duration-100`}
                                >
                                    <td className="py-3 px-4 text-slate-400 font-mono text-xs">
                                        {row.sub ? "" : i + 1}
                                    </td>
                                    <td
                                        className={`py-3 px-4 text-slate-700 font-medium ${row.sub ? "pl-10 text-slate-500 italic" : ""
                                            }`}
                                    >
                                        {row.label}
                                    </td>
                                    <td className="py-3 px-4">
                                        {row.link ? (
                                            <a
                                                href={row.link.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-white text-xs font-semibold hover:bg-amber-400 hover:text-slate-900 transition-colors duration-150"
                                            >
                                                {row.link.external ? (
                                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                    </svg>
                                                ) : (
                                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                                    </svg>
                                                )}
                                                {row.link.text}
                                            </a>
                                        ) : (
                                            <span className="text-slate-800">{row.value}</span>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

// ---------------------------------------------------------------------------
// Page component
// ---------------------------------------------------------------------------


export default function SchoolDisclosure() {
    return (
        <>
            <HeroSection headerlinks={headerLinks} />
            <main>
                <div className="min-h-screen bg-slate-50 py-10 px-4">
                    <div className="max-w-5xl mx-auto">
                        {/* Page Header */}
                        <div className="mb-10 text-center">
                            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
                                Mandatory Public Disclosure
                            </h1>
                            <p className="mt-2 text-slate-500 text-sm">
                                Geeta Vidya Mandir Public SCHOOL — Nimbari, Panipat, Haryana
                            </p>
                            <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-amber-400" />
                        </div>

                        {/* Sections */}
                        {sections.map((section: Section) => (
                            <SectionTable key={section.id} section={section} />
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
