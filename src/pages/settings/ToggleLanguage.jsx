import React from 'react'

function ToggleLanguage() {
  return (
    <div className="relative flex justify-between items-center">
      <h5 className="text-white text-base font-semibold">Language</h5>
      <div className="relative custom-select">
        <select className="bg-transparent text-brand outline-none border-none cursor-pointer">
          <option value="English">English</option>
        </select>
      </div>
    </div>
  )
}

export default ToggleLanguage