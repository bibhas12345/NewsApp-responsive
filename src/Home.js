import React from 'react'
import DataCome from './DataCome'

import Headline from './Headline'

export default function Home() {
  return (
    <div>
      {/* <h3>home</h3> */}
      <div className=' w-full'>
        <Headline />
        <DataCome/>
      </div>
    </div>
  )
}
