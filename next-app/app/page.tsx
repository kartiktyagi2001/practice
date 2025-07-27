import axios from 'axios'

async function getData(){
  const res = await axios.get("http://localhost:3000/api/user")

  return res.data;
}

//next has async components
export default async function Home() {
  const userData = await getData();
  // return (
  //   <div className="flex justify-center align-top gap-4">
  //     <div>
  //       Name: {userData.name}
  //     </div>
  //     <div>
  //       Age: {userData.age}
  //     </div>
  //   </div>
  // );
}
