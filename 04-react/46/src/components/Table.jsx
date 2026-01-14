import React from 'react'

// const Table = ({ data }) => {
//     return (
//         <div>
//             <table className='min-w-full'>
//                 <thead>
//                     <tr>
//                         <th style={{ textAlign: "left" }}>Sno.</th>
//                         <th style={{ textAlign: "left" }}>Title</th>
//                         <th style={{ textAlign: "left" }}>Price</th>
//                         <th style={{ textAlign: "left" }}>Rating</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         data.map((tr) => {
//                             return (<tr>
//                                 <td>{tr.id}</td>
//                                 <td>{tr.title}</td>
//                                 <td>{tr.price}</td>
//                                 <td>{tr.rating}</td>
//                             </tr>)
//                         })
//                     }
//                 </tbody>
//             </table>
//         </div>
//     )
// }

const Table = ({ data }) => {
    return (
        <div className='max-w-3xl mx-auto'>
            <div className='grid grid-cols-12 divide-x'>
                <p className='p-3 bg-zinc-900 text-white'>Sno.</p>
                <p className='p-3 bg-zinc-900 text-white col-span-9'>Title</p>
                <p className='p-3 bg-zinc-900 text-white'>Price</p>
                <p className='p-3 bg-zinc-900 text-white'>Rating</p>
            </div>
            {
                data.map((tr) => {
                    return (
                        <div key={tr.id} className='grid grid-cols-12 border-b'>
                            <p className='p-3'>{tr.id}</p>
                            <p className='p-3 col-span-9'>{tr.title}</p>
                            <p className='p-3'>{tr.price}</p>
                            <p className='p-3'>{tr.rating}</p>
                        </div>)
                })
            }
        </div>
    )
}

export default Table