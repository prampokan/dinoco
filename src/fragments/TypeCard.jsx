import React from 'react'

const TypeCard = () => {
  return (
    <div>
        <select name="address" id="address" className="bg-zinc-700 text-white outline-none text-sm font-medium w-[210px]" >
                        <option value="semarang">
                            Semarang, Indonesia
                        </option>
                        <option value="jakarta">
                            Jakarta, Indonesia
                        </option>
                    </select>
    </div>
  )
}

export default TypeCard