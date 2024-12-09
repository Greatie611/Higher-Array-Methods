const datagetter = () =>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((newsite) => {(newsite);
    const posts = newsite.map(each=> {
     return ` Title: ${each.title}, Body: ${each.body}`
    });
  
    console.log(posts);
    
    newsite.forEach((element,) => {
    console.log(`Body: ${element.body}`);
    console.log(`Title: ${element.title}`);
    
    
    
    });
  
   const dd = newsite.filter((each,index) =>{
    return each.id == 10
  
  
  
   })
   
   console.log(dd);
  
  
   }
    )}
   
    datagetter()
  
  
  