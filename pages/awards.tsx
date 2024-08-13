import React from 'react'

function Awards() {
  return (
    <div className="bg-light-blue-100 mt-10 py-10">
      <aside className="mx-auto max-w-4xl rounded-lg bg-white p-4 shadow-lg sm:p-6 lg:p-8">
        <div className="text-center">
          <p className="text-2xl font-bold text-blue-700 sm:text-3xl lg:text-5xl">
            Awards
          </p>
        </div>
        <p className="my-4 text-justify text-lg font-medium text-gray-700 sm:text-xl lg:text-2xl">
          The below awards will be conferred by CSITSS-2024:
        </p>
        <p className="my-4 text-justify text-base font-medium text-gray-600 sm:text-lg lg:text-xl">
          <i>i.</i> Best Ph.D Thesis
          <br />
          <i>ii.</i> Best Faculty and Student Paper
        </p>
        <p className="my-4 text-justify text-base font-medium text-gray-600 sm:text-lg lg:text-xl">
          Ph.D. scholars, who have been awarded their Ph.D. degree in the
          conference themes specified, from recognized universities during the
          period June 1, 2023 to May 31, 2024, are eligible to apply for CSITSS
          2024 Best Ph.D. Thesis Award. Ph.D. Thesis (in pdf format) and degree
          certificate can be submitted to the{' '}
          <b>Email ID: csitss2024@rvce.edu.in.</b> Application fees: Rs.1000/-.
          While registering for <b>Best Thesis award</b>, enter the paper ID as 9999
        </p>

        <div className="mt-6">
          <div className="mb-4 text-center">
            <p className="text-xl font-bold text-blue-700 sm:text-2xl lg:text-3xl">
              Preview PDF
            </p>
          </div>
          <div className="rounded-lg bg-gray-100 p-2 shadow-inner sm:p-4">
            <iframe
              src="Award.pdf"
              width="100%"
              height="400px"
              className="rounded-lg"
              style={{ border: 'none' }}
              title="PDF Preview"
            />
          </div>
          <div className="mt-4 text-center">
            <a
              href="Award.pdf"
              download
              className="text-lg font-medium text-blue-700 hover:underline sm:text-xl lg:text-2xl"
            >
              Download PDF
            </a>
          </div>
        </div>
      </aside>
    </div>
  )
}

export default Awards
