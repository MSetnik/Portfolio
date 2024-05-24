import React, {useEffect} from "react";
import fire from "../../firebase"


const OpelAstraH = () => {

  useEffect(() => {
    handleResponse()
  }, [])

  const handleResponse = async () => {
    const eventref = fire.database().ref("opelAstraVisits");
    const snapshot = await eventref.once("value");
    const value = snapshot.val();

    const totalVisits = value.total;
    const visitItems = value.items;

    const newVisitors = {
      total: totalVisits + 1,
      items: { ...visitItems, [`visit_${totalVisits+1}`]: getDateTimeNow()}
    };

    if (newVisitors != null) {
      eventref.set(newVisitors);
    }

    window.location.replace('https://www.index.hr/oglasi/auto-moto/osobni-automobili/oglas/opel-astra-1-9-cdti-110kw/4574733')
  };


  const getDateTimeNow = () => {
    let currentdate = new Date(); 
    let datetime = currentdate.getDate() + "/"
      + (currentdate.getMonth()+1)  + "/" 
      + currentdate.getFullYear() + " @ "  
      + currentdate.getHours() + ":"  
      + currentdate.getMinutes() + ":" 
      + currentdate.getSeconds();

    return datetime
  }


	return (
		<div>

		</div>
	);
};

export default OpelAstraH;
