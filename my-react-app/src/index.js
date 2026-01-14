export const computers = async ()=>{
  
  try{

    const res = await fetch('http://localhost:3000/api/computers')
    const data = await res.json()
    return data

  }catch(err){

      return console.log('something wrong happend please try again')
  }
  
}

export const Order = async (id)=>{
  
  

    const res = await fetch(`http://localhost:3000/api/computers/${id}`)
    const data = await res.json()
    
    if(!res.ok){
      throw new Error(data.message || 'something wrong happend try again later')
    }

   return data;

}

export const postorders = async (form) => {
  const res = await fetch("http://localhost:3000/api/computers/orders" , {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: form.name,
      phone: form.phone,
      email: form.email,
      product_id : form.product_id,
    })
  });

  const data = await res.json();


  if (!res.ok) {
    throw new Error(data.message || "Request failed");
  }

  return data;
};

export const userOrders = async ()=>{
  try{

    const url = await fetch('http://localhost:3000/api/computers/orders/userOrders')
 
    const data = await url.json()
    return data;

  }catch(err){
    return err.message
  }


};