import * as React from 'react'
import { useFrame } from 'react-three-fiber'
import { Mesh } from 'three'

import { Setup } from '../Setup'

import { Tetrahedron } from '../../src/core/shapes'

export default {
  title: 'TMDM',
  component: TMDM,
  decorators: [(storyFn) => <Setup>{storyFn()}</Setup>],
}

function useTurntable() {
  const ref = React.useRef<Mesh>(null!)
  useFrame(() => {
    ref.current.rotation.x += 0.005
    ref.current.rotation.y += 0.0025
    ref.current.rotation.z += 0.00125
  })

  return ref
}

function Story({ args }: { args?: any }) {
  const ref = useTurntable()

  return (
    <Tetrahedron ref={ref} args={args}>
      <meshPhongMaterial attach="material" color="#00914f" />
    </Tetrahedron>
  )
}

export const TMDM = () => <Story />
