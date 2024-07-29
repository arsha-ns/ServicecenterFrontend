import React, { useEffect, useState } from 'react'
import { retrieveCustomerApi } from '../services/Api'

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

function WorkList({custId,refreshRequired,setWorkId}) {
   
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

    },[refreshRequired])

  return (
    <div className='border my-5 shadow border border-2 border-dark p-3 rounded'>
        <table className='table'>
            <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Amount</th>
                <th>Aciton</th>
            </tr>
           <tbody>
            {works&& works.map((w,i)=>
            <tr>
                <td>{w.title}</td>
                <td>{w.description}</td>
                <td>{w.amount}</td>
                <td className='d-flex gap-2'>
                        <Button className='btn btn-danger' >
                        <i class="fa-solid fa-trash"></i>
                        </Button>

                        <Button className='btn btn-warning' onClick={()=>setWorkId(w.id)}>
                        <i class=" fa-solid fa-pen-to-square"></i>
                        </Button>
                       


                    </td>
            </tr>
            
            )}
           </tbody>
        </table>
    </div>
  )
}

export default WorkList