import React from 'react'

export default function Bell({
  width = 24,
  height = 24,
  color = '#F1F1F1',
  ...rest
}: {
  width?: number
  height?: number
  color?: string
  [x: string]: any
}) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <path
        d="M12 2C7.73954 2 4.28575 5.35787 4.28575 9.50002V13.9823L3.37661 14.8662C3.0089 15.2237 2.89891 15.7613 3.09791 16.2284C3.29691 16.6955 3.76573 17 4.28575 17H19.7142C20.2343 17 20.7031 16.6955 20.9021 16.2284C21.1011 15.7613 20.9911 15.2237 20.6233 14.8662L19.7142 13.9823V9.50002C19.7142 5.35787 16.2604 2 12 2Z"
        fill={color}
      />
      <path
        d="M12.0002 22C9.86997 22 8.14307 20.3211 8.14307 18.25H15.8573C15.8573 20.3211 14.1305 22 12.0002 22Z"
        fill={color}
      />
    </svg>
  )
}
