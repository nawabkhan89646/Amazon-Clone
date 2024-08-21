// const fs = require('fs');
// const axios = require('axios')

// const calling = async()=>{
//     const options = {
//         method: 'GET',
//         url: 'https://real-time-amazon-data.p.rapidapi.com/search',
//         params: {
//           query: 'Phone',
//           page: '1',
//           country: 'US',
//           sort_by: 'RELEVANCE',
//           product_condition: 'ALL'
//         },
//         headers: {
//           'x-rapidapi-key': 'cf2c7f000emsh3d1cd56c1ea499fp12a826jsn1503042f16aa',
//           'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
//         }
//       };
      
//       try {
//           const response = await axios.request(options);
//           //console.log(response.data);
//           fs.writeFile('data.json',JSON.stringify(response.data),(err)=>{
//             if(err)console.log(err);
//             else console.log("data written successfully");
//           })
//       } catch (error) {
//           console.error(error);
//       }
      
      
//   }

// calling();
