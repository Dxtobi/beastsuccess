/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {

    /**
     * @type {any}
     */
    

   // console.log(item)
    
        
   
    try {
        let item

        const url = 'https://odds.p.rapidapi.com/v4/sports/upcoming/odds?regions=us&oddsFormat=decimal&markets=h2h%2Cspreads&dateFormat=iso';

        const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '66aed30034mshc741ac58713cd75p154f8cjsn87e8bb3c44fd',
            'X-RapidAPI-Host': 'odds.p.rapidapi.com'
        }
        };
        const res = await fetch(url, options);
        if (res.status == 200) {
            item = await res.json();
            console.log(item)
            return {item}
        }
   
    } catch (error) {
        // @ts-ignore
        console.log(error.message)
        /**
         * @type {void | (Omit<App.PageData, never> & Partial<Pick<App.PageData, never>> & Record<string, any>)}
         */
        let item = {};
        return item
    }
  }
