import React from 'react'
import SinlgeFaqItem from './singleItem'

const WalletFaqs = ({marginTop}) => {
    const mTop = marginTop ? {marginTop : marginTop} : {};
  return (
    <div style={mTop} className='help-center-faq-single-card'>
        <h1>PAAQ Wallet</h1>
        <SinlgeFaqItem text={'Load funds'} />
        <SinlgeFaqItem text={'Withdraw funds'} />
        <SinlgeFaqItem text={'Set Price'} />
        {/* <div className='h-line' /> */}
    </div>
  )
}

export default WalletFaqs;