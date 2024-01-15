import React, { useEffect, useState } from 'react'
import { AnimateCC } from 'react-adobe-animate'
import { Loader } from 'components/Icons'

export default function AnimationLoader({
  name,
  paused,
  composition,
  style,
  path,
}: {
  name: string
  paused?: boolean
  composition?: string
  style?: React.CSSProperties
  path?: string
}) {
  const [isCreateJSLoaded, setIsCreateJSLoaded] = useState(false)
  const [isAnimationLoaded, setIsAnimationLoaded] = useState(false)

  const onScriptLoaded = () => {
    setIsCreateJSLoaded(true)
  }

  const onAnimationLoaded = () => {
    setIsAnimationLoaded(true)
  }

  useEffect(() => {
    const cjsScript = document.createElement('script')
    cjsScript.src = '/static/scripts/createjs.min.js'
    cjsScript.onload = onScriptLoaded
    document.body.appendChild(cjsScript)

    return () => {
      document.body.removeChild(cjsScript)
    }
  }, [])

  useEffect(() => {
    if (isCreateJSLoaded) {
      const animationPath = path ?? '/static/animations/'
      const animationScript = document.createElement('script')
      animationScript.src = animationPath + `${name}.js`
      animationScript.onload = onAnimationLoaded
      document.body.appendChild(animationScript)

      return () => {
        document.body.removeChild(animationScript)
      }
    }
  }, [isCreateJSLoaded])

  return (
    <>
      {isAnimationLoaded ? (
        <div style={style ?? { width: '100%' }}>
          <AnimateCC animationName={name} paused={paused ?? false} composition={composition ?? undefined} />
        </div>
      ) : (
        <Loader />
      )}
    </>
  )
}
