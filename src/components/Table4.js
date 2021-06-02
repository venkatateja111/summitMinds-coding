import React from 'react'

function Table4(props) {

  if(props.order !== '')
  {
  const array1 = props.items2.map(
    item => item.laureates.map(
      (item3) => {
       return( 
         [
        
         item3.firstname,
         item3.surname,
         item.year,
         item.category
         ]
       )
       
      }   
    )
  )


    
    var array2 = [].concat.apply([], array1);
   

    var array3 = array2.sort((a,b) => {
        var nameA = a[0].toUpperCase(); 
        var nameB = b[0].toUpperCase(); 
        if(props.order == "Ascending")
        {
          
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      }
      else
      {
        
        if (nameA < nameB) {
          return 1;
        }
        if (nameA > nameB) {
          return -1;
        }
        return 0;

      }
      
        
        
      
    })
    
  }
  else
  var array3 = []
  
         

         

    return (

        <div>


      {(() => {
        return (props.order !== '') ? (
             

          <table class="table table-bordered table-hover">
          <thead>
            <tr>
             
              <th scope="col"><h3>Firstname</h3></th>
              <th scope="col"><h3>Surname</h3></th>
              <th scope="col"><h3>Year</h3></th>
              <th scope="col"><h3>Category</h3></th>
            </tr>
          </thead>
          <tbody>
        {
          array3.map((item) => (
            <tr>
              <td><h4>{item[0]}</h4></td>
              <td><h4>{item[1]}</h4></td>
              <td><h4>{item[2]}</h4></td>
              <td><h4>{item[3]}</h4></td>
            </tr>
          ))

         }
            </tbody>
   </table>
         )
          : null
      })()
      }
    
          
          
                                
                                 
                               
                                        
                                
                         
 
          
 
        </div>
    )
}

export default Table4





