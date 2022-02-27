import React from 'react';

function Hello({color, name, children, isSpecial}) {
    //console.log(props)
    return <div><strong style={{color: color}}>
        {isSpecial && <b>*</b>}
        안녕하세요!</strong> 
        {name}{children}
        </div> 
}

Hello.defaultProps = {
    name: '이름없음'
}

export default Hello;