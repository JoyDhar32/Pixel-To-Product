import React from 'react'
import { SketchPicker } from 'react-color'
import { useSnapshot } from 'valtio'

import state from '../../../../store';

const ColorPicker = () => {
  const snap = useSnapshot(state);

  return (
    <div className="absolute left-full ml-3">
      <SketchPicker 
        color={snap.tshirtColor}
        disableAlpha
        onChange={(tshirtColor) => state.tshirtColor = tshirtColor.hex}
      />
    </div>
  )
}

export default ColorPicker