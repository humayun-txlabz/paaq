// export const WaveformContianer = styled.div`
//   display: flex;  
//   flex-direction: row;  
//   align-items: center;
//   justify-content: center;
//   height: 100px;  width: 100%;
//   background: transparent;
// `;

// export const Wave = styled.div`
//   width: 100%;
//   height: 90px;
// `;

// export const PlayButton = styled.button`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 60px;
//   height: 60px;
//   background: #EFEFEF;
//   border-radius: 50%;
//   border: none;
//   outline: none;
//   cursor: pointer;
//   padding-bottom: 3px;
//   &:hover {
//     background: #DDD;
//   }
// `;

export const WaveformContianer = () => {
  return (
    <div style={{
      display: 'flex',  
  flexDirection: 'row',  
  alignItems: 'center',
  justifyContent: 'center',
  height: 100,  width: '100%',
  background: 'transparent',
    }}>

    </div>
  )
}

export const Wave = () => {
  return (
    <div style={{
      width: '100%',
      height: 90,
    }}>

    </div>
  )
}

export const PlayButton = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: 60,
      height: 60,
      background:'#EFEFEF',
      borderRadius: '50%',
      border: 'none',
      outline: 'none',
      cursor: 'pointer',
      paddingBottom: 3,
    }}>

    </div>
  )
}