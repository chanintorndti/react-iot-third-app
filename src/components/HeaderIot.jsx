import React from 'react'

export default function HeaderIot(props) { //หรือ ({wow, woo})
  const {wow, woo} = props

  return (
    <div>
      {/* <h1 style={{textAlign:'center', color:'#fasdfa', fontSize:'30px', fontWeight:'bold'}}> */}
      <h1 className="text-center text-blue-600 text-3xl font-bold mt-5">
        สวัสดี IoT SAU
        <br />
        {wow}  {woo}
      </h1>
      <hr style={{width:'80%'}} className="mb-5 mx-auto"/>
    </div>
  )
}
