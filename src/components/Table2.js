import React from 'react'

function Table2(props) {
    
    return (
        <div>
                {
                    props.items2.map(item1 => (
                           
                        item1.laureates.map(item2 => (
                         
                                   (item1.year == props.year)
                                   ? 
                                   <div style={{margin: "20px"}}>
                                       
                                       <h3>id: {item2.id},</h3>
                                       <h3>firstname: {item2.firstname},</h3>
                                       <h3>surname : {item2.surname},</h3>
                                       <h3>year : {item1.year},</h3>
                                       <h3>motivation: {item2.motivation},</h3>
                                       <h3>Category: {item1.category},</h3>
                                       <hr style={{backgroundColor: "red", borderTop: "1px solid red"}} />
                                   </div>
                                   : null      
                        )
                    )
                      
                    ))
                        
                }

        </div>
    )
}

export default Table2
