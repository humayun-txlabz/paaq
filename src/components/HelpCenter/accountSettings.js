import Link from 'next/link'
import React, { useState } from 'react'
import { titleCase } from '../../utils/titleCase'
import SinlgeFaqItem from './singleItem'
import UpAccIcon from '../../assets/Icons/chevronUp.svg';
import DownAccIcon from '../../assets/Icons/chevronDown.svg';
import { Image } from 'theme-ui';
import useWindowSize from 'Hooks/windowSize';

const AccountSettingsFaqs = ({items}) => {
  const [width] = useWindowSize();
  const [isAccordianOpen, setIsAccordianOpen] = useState(false);
  const [isAccordianAction, setIsAccordianAction] = useState(false);

  console.log("itemsasd", items)

  return (
    <div className='help-center-faq-single-card'>
        <div className='help-center-faq-single-card-heading'>
        <div className="custom-flex">
        <h1 className={`${isAccordianAction === false ? 'accordian-active' : ''}`}  onClick={() => {
          setIsAccordianAction(!isAccordianAction)
        }}>{items[0]?.fields?.title}</h1>
        {
          !isAccordianAction === false ? 
          <svg style={{cursor:'pointer'}} onClick={() => {
          setIsAccordianAction(!isAccordianAction)
        }} width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.0088 18.7422C5.02539 18.7422 0.912109 14.6289 0.912109 9.6543C0.912109 4.67969 5.03418 0.566406 10.0176 0.566406C14.9922 0.566406 19.0967 4.67969 19.0967 9.6543C19.0967 14.6289 14.9834 18.7422 10.0088 18.7422ZM9.02441 12.5459C9.62207 13.1787 10.3867 13.1787 10.9844 12.5459L14.4736 8.82812C14.7812 8.50293 14.79 8.01953 14.5088 7.72949C14.1836 7.4043 13.6826 7.4043 13.3838 7.7207L10 11.3154L6.61621 7.7207C6.32617 7.4043 5.83398 7.41309 5.5 7.72949C5.20996 8.01074 5.21875 8.50293 5.53516 8.82812L9.02441 12.5459Z" fill="#1e1e1e"/>
</svg>

          :
          <svg style={{cursor:'pointer'}} onClick={() => {
          setIsAccordianAction(!isAccordianAction)
        }} width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.99121 0.257812C14.9746 0.257812 19.0879 4.37109 19.0879 9.3457C19.0879 14.3203 14.9658 18.4336 9.98242 18.4336C5.00781 18.4336 0.90332 14.3203 0.90332 9.3457C0.90332 4.37109 5.0166 0.257812 9.99121 0.257812ZM10.9756 6.4541C10.3779 5.82129 9.61328 5.82129 9.01562 6.4541L5.52637 10.1719C5.21875 10.4971 5.20996 10.9805 5.49121 11.2705C5.81641 11.5957 6.31738 11.5957 6.61621 11.2793L10 7.68457L13.3838 11.2793C13.6738 11.5957 14.166 11.5869 14.5 11.2705C14.79 10.9893 14.7812 10.4971 14.4648 10.1719L10.9756 6.4541Z" fill="#1e1e1e"/>
</svg>

        }
        </div>
          { isAccordianOpen ? (

            <Image src={DownAccIcon}  onClick={()=>setIsAccordianOpen(!isAccordianOpen)}  />
            ) : (
            <Image src={UpAccIcon}  onClick={()=>setIsAccordianOpen(!isAccordianOpen)}  />

          )}
        </div>
        { isAccordianAction === true ?
          items?.map((value) => (
            <Link href={`/helpCenter/${value?.fields?.category}?id=${value?.sys?.id}`}>
              <div style={{display: width > 600 ? 'unset' : isAccordianOpen ? 'unset' : 'unset', cursor:'pointer'}}>
                <SinlgeFaqItem text={titleCase(value?.fields?.question)} />
              </div>
            </Link>
          )) :  null  
        }
    </div>
  )
}

export default AccountSettingsFaqs