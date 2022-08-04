import './App.css'

import React, { useEffect, useState } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'

export const App = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm()

  const { fields, append, remove } = useFieldArray({ name: 'emails', control })
  const [count, setCount] = useState(1)

  useEffect(() => {
    const previousProp = fields.length
    if (count > previousProp) {
      for (let i = previousProp; i < count; i++) {
        append({ name: '' })
      }
    } else {
      for (let i = previousProp; i > count; i--) {
        remove(i - 1)
      }
    }
  }, [count])

  const onSubmit = (res) => {
    console.log(JSON.stringify(res, null, 4))
    console.log('res', res)
  }

  return (
    <div key="sd">
      <h1>Hello world!</h1>

      <h2>Adaptive grid list:</h2>

      <button style={{ margin: '24px 0' }} onClick={() => setCount(count + 1)}>
        Add field
      </button>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="list">
          {fields.map((item, i) => (
            <div key={i} className="mt-3 mb-2">
              <div>
                <strong className="text-primary">Email {i + 1}</strong>
                <div className="form-group">
                  <input
                    name={`emails[${i}]name`}
                    {...register(`emails.${i}.name`, {
                      required: { value: true, message: 'Email required' },
                      pattern: {
                        value: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]{1,4}$/i,
                        message: 'Invalid email',
                      },
                    })}
                    type="text"
                  />
                  <div className="error">
                    {errors.emails?.[i]?.name?.message}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div>
          <button style={{ marginTop: '24px' }} type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}
