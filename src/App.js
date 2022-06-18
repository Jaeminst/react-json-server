
import './App.css';
import { useState } from 'react';

function App() {

  return (
    <div className="App">

      <div className='black-nav'>
        <div className='logoName'>Jaeminst Blog</div>
      </div>

      {/* <button onClick={ articleRename } >버튼</button>
      <button onClick={ articleSort } >정렬</button> */}


      <List></List>

      <Modal title='제목' date={ '2022년 6월 18일' } content='상세 내용'></Modal>

    </div>
  );
}


// function articleRename(){
//   var newArticle = [...article];
//   newArticle[0] = '여자 코트 추천';
//   reArticle( newArticle );
// }
// function articleSort(){
//   var newArticle = [...article];
//   newArticle = newArticle.sort();
//   reArticle( newArticle );
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
    like: 0,
    today: Date()
  },
  {
    id: 2,
    title: "강남 우동 맛집",
    like: 0,
    today: Date()
  },
  {
    id: 3,
    title: "리액트 독학",
    like: 0,
    today: Date()
  }
]

function List(){
  const articles = [...lists]
  const titles = articles.map(({ title }) => title)
  const likes = articles.map(({ like }) => like)
  const todays = articles.map(({ today }) => today)
  console.log(titles)
  let [likes0, setLikes0] = useState(likes[0]);
  let [likes1, setLikes1] = useState(likes[1]);
  let [likes2, setLikes2] = useState(likes[2]);

  return (
    <>
    <div className='list'>
      <h3> { titles[0] } <span onClick={ ()=>{ setLikes0(likes0 + 1) } }> 👍 </span> { likes0 } </h3>
      <p> { todays[0] } </p>
      <hr/>
    </div>
    <div className='list'>
      <h3> { titles[1] } <span onClick={ ()=>{ setLikes1(likes1 + 1) } }> 👍 </span> { likes1 } </h3>
      <p> { todays[1] } </p>
      <hr/>
    </div>
    <div className='list'>
      <h3> { titles[2] } <span onClick={ ()=>{ setLikes2(likes2 + 1) } }> 👍 </span> { likes2 } </h3>
      <p> { todays[2] } </p>
      <hr/>
    </div>
    </>
  )


  // let [title, setArticle] = useState(titles);
  // let [like, setLikes] = useState(likes);
  // let [todate, setTodate] = useState(todays);
  // console.log(todate)
  // todate = setTodate(`${todate.getFullYear()}년 ${todate.getMonth()+1}월 ${todate.getDate()}일`)

  // const article = articles.map((e)=>{
  //   console.log(e)

  //   return (
  //     <div className='list' key={ e.id }>
  //       <h3> { e.title } <span onClick={ ()=>{ setLikes(e.like + 1) } }> 👍 </span> { e.like } </h3>
  //       <p> { e.todate } </p>
  //       <hr/>
  //     </div>
  //   )
  // })

  // return article
  
  // return (
  //   <div className='list'>
  //     <h3> { article } <span onClick={ ()=>{ setGood(good + 1) } }> 👍 </span> { good } </h3>
  //     <p> { todate } </p>
  //     <hr/>
  //   </div>
  // )
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
