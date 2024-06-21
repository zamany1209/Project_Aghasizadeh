import React, { useEffect } from 'react';
export default function Check_visit({name,re_url}){

    useEffect(() => {
      axios.get(re_url+'/visit_page/'+name)
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
    }, []);
  
    return (
      <div>
      </div>
    );
}
