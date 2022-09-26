// import dynamic from 'next/dynamic'
// import React from 'react'

// const NoSsr = props => (
//   <React.Fragment>{props.children}</React.Fragment>
// )

// export default dynamic(() => Promise.resolve(NoSsr), {
//   ssr: false
// })




import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR = dynamic(() => import('./waveform'), {
  ssr: false
})

export default () => <DynamicComponentWithNoSSR />