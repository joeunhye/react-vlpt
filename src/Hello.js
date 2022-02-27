import React from 'react';

function Hello({color, name}) {
    //console.log(props)
    return <div><strong style={{color: color}}>안녕하세요!</strong> {name}</div>
}

Hello.defaultProps = {
    name: '이름없음'
}

export default Hello;