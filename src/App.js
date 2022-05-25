
import {  useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
        <LoadPost></LoadPost>
        {/* <Division name = 'Nowakhali' specialty='bivag'></Division>
        <Division name = 'Nowakhali' specialty='bivag'></Division>
        <Division name = 'Nowakhali' specialty='bivag'></Division> */}
    </div>
  );
}

const LoadPost = () =>{
  const [posts,setPost] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPost(data))
  },[])
  return(
    <div>
        <h1>Post: {posts.length}</h1>
        {
          posts.map(post => <Post title={post.title} body={post.body}></Post>)
        }
    </div>
  )
}

function Post(props) {
  return(
    <div>
        <h2>Title: {props.title}</h2>
        <p>{props.body}</p>
    </div>
    )
}

const Division = (props) => {
     const [power,setPower] = useState(1);
     const boostPower = () => {
       const newPower = power * 2;
       setPower(newPower);
     }
    return(
        <div  className="division">
            <h2>Name: {props.name}</h2>
            <h2>Specialty: {props.specialty}</h2>
            <h4>Power: {power}</h4>
            <button onClick={boostPower}>Boost the Power</button>
        </div>
    )
}

export default App;
