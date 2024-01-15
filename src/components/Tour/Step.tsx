import { ReactElement } from 'react'

export const Step = (props: { title: string; content: string | ReactElement }) => {
  return (
    <div>
      <div style={{ padding: '10px' }}>{props.title}</div>
      <div style={{ background: '#c7d3e7', padding: '10px', fontSize: '14px', marginTop: '10px' }}>{props.content}</div>
    </div>
  )
}
