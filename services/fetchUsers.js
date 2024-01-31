// export async function fetchUsers() {
//     try {
//       const res = await fetch('http://localhost:3000/api/Dentists');
  
//       if (!res.ok) {
//         // If the initial fetch is not successful, try fetching from the production URL
//         const prodRes = await fetch('https://dentist-blog.vercel.app/api/Dentists');
//         if (!prodRes.ok) {
//           throw new Error('Failed to fetch user from production API');
//         }
//         return prodRes.json();
//       }
  
//       return res.json();
//     } catch (error) {
//       console.error('Failed to fetch user', error);
//       throw new Error('Failed to fetch user');
//     }
//   }
  

// export async function filterUser (params){
//     try{
//         const {dentists} = await fetchUsers()
//         const userparam= params.join(', ')
//         const filteredUser =  dentists.filter((dentist)=> dentist.fullName.toLowerCase().replace(/\s/g, "") === userparam);
//        console.log(filteredUser, 'here we are ok')
//     //    console.log( userparam === 'aleksvisha', 'hi')
//       return filteredUser
//     }catch(e){
//      console.log('Failed to filter user', e)
//     }
// }

// export async function fetchUsers(){
//     const res= await fetch('http://localhost:3000/api/Dentists')
//     const data= await res.json()
//     console.log(data, 'success')
//     return res.json()
// }