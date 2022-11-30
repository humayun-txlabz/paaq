import React from 'react'

const JobSkeleton = ({count,children}) => {
    
        return (
            <div
                style={{
                    display: 'block',
                    lineHeight: 2,
                    padding: '0rem',
                    marginBottom: '0.1rem',
                    width: '100%',
                }}
            >
                {children}
            </div>
        )
}

export default JobSkeleton