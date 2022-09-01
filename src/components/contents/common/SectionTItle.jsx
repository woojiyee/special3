import React from 'react'

function SectionTItle(section) {
  return (
    <div>
        <div className="text-center pb-3">
            <h3 className="mb-0 h3 fw-bold">{section.title}</h3>
            <p className="mb-0 text-capitalize">{section.info}</p>
        </div>
    </div>
  )
}

export default SectionTItle