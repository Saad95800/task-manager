import React from 'react'

export default function Task({task}) {
  return (
    <div className="mb-1 p-2 rounded bg-white d-flex justify-content-between" style={{cursor: 'pointer'}}>
      {task.content}
    </div>
  )
}
