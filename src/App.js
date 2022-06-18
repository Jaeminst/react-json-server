
import './App.css';
import { useState } from 'react';

function App() {

  return (
    <div className="App">

      <div className='black-nav'>
        <div className='logoName'>Jaeminst Blog</div>
      </div>

      {/* <button onClick={ Retitle }>변경</button> */}
      {/* <button onClick={ articleSort } >정렬</button> */}


      <Lists></Lists>

      <Modal title='제목' date={ '2022년 6월 18일' } content='상세 내용'></Modal>

    </div>
  );
}


// function articleSort(){
//   var newArticle = [...lists];
//   newArticle = newArticle.sort();
//   setTitle( newArticle );
// }
// function articleNumberSort(){
//   var newArticle = [...article];
//   newArticle = newArticle.sort((a,b)=>{a-b});
//   reArticle( newArticle );
// }

const lists = [
  {
    id: 1,
    title: "남자 코트 추천",
    likes: 0,
    today: new Date()
  },
  {
    id: 2,
    title: "강남 우동 맛집",
    likes: 0,
    today: new Date()
  },
  {
    id: 3,
    title: "리액트 독학",
    likes: 0,
    today: new Date()
  }
]

// function articleRename(props){
//   console.log(props)
//   console.log(setTitle())
//   var newArticle = [...lists];
//   newArticle[0] = '여자 코트 추천';
//   setTitle( newArticle );
// }

function List(props){
  let [title, setTitle] = useState(props.title);
  let [likes, setLikes] = useState(props.likes);
  let [today, setToday] = useState(props.today);
  let todate = `${today.getFullYear()}년 ${today.getMonth()+1}월 ${today.getDate()}일`
  return (
    <div className='list'>
      <h3> { title } <span onClick={ ()=>{ setLikes(likes + 1) } }> 👍 </span> { likes } </h3>
      <p> { todate } </p>
      <hr/>
    </div>
  )
}

function Lists(){
  return lists.map((e)=>{
    return (
      <List key={ e.id } {...e}></List>
    )
  })
}

function Modal(props){
  return (
    <div className='modal'>
      <h2>{ props.title }</h2>
      <p>{ props.date }</p>
      <p>{ props.content }</p>
    </div>
  )
}

export default App;
