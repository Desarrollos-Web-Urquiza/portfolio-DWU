import TopBar from '../../components/topBar.js'

export default function PostsHome(props) {
  return (
    <div>
   	   
   	  <TopBar />
      {console.log(props.post)}
      <h1>Posts Home Page</h1>
      <p>Benvenido al index de la página de Posts!</p>
    </div>
  )
}
export async function getServerSideProps({ params }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/1`);
  const post = await res.json();
  return {
    props: {
      post
    }
  }
}