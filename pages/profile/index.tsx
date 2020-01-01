import { NextPage } from 'next';
import { useRouter } from 'next/router';

export const config = { amp: true }

const ProfilePage:NextPage<any> = () => {
  const router = useRouter();
  console.log(router);

  return (
    <div>
      <img src="/images/photo.jpg" alt=""/>
      <p>Profile Page</p>
    </div>
  )
}

// 写法二
// function ProfilePage1(props: NextPage<any>) {
//   return (
//     <div>12112</div>
//   )
// }


export default ProfilePage;