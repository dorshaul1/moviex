import { useEffect, useState } from 'react';


export function useForm(initialState, cb = function () { }) {
  const [fields, setFields] = useState(initialState)

  useEffect(() => {
    cb(fields)
  }, [fields])

  return [
    fields,
    function ({ target }) {
      const field = target.name
      const value = target.type === 'number' ? + target.value : target.value
      setFields({ ...fields, [field]: value })
    }
  ]
}