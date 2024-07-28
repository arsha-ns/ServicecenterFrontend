import React, { useEffect, useState } from 'react'
import { retrieveCustomerApi } from '../services/Api'

function WorkList({custId}) {
   
    const[works,setWorks]=useState()

    const[workTotal,setWorkTotal]=useState()

   async function fetchCustomerData(custId){

        let res=await retrieveCustomerApi(custId)

        if(res.status>199 && res.status<300){

           setWorks(res.data.works);

            setWorkTotal(res.data.work_total);
        }
    }

    useEffect(()=>{
        fetchCustomerData(custId)

    },[])

  return (
    <div className='border my-5 shadow'>
        <table className='table'>
            <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Amount</th>
            </tr>
           <tbody>
            {works&& works.map((w,i)=>
            <tr>
                <td>{w.title}</td>
                <td>{w.description}</td>
                <td>{w.amount}</td>
            </tr>
            
            )}
           </tbody>
        </table>
    </div>
  )
}

export default WorkList