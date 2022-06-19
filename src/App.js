
import './App.css';
import { useEffect, useState } from 'react';

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


// function articleRename(props){
//   console.log(props)
//   console.log(setTitle())
//   var newArticle = [...lists];
//   newArticle[0] = '여자 코트 추천';
//   setTitle( newArticle );
// }
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

const Lists = () => {
  const [listArr, setListArr] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3004/data', {
      method: 'GET',
    })
    .then(res => res.json())
    .then(data => {
      setListArr(data);
    })
    .catch((error) => {
      console.error('Error:', error);
      console.log("server is down!!")   
    });
  }, [])
  return (
    <div className='lists'>
      {listArr.map(list => {
        return (
          <List key={list.id} {...list}></List>
        )
      })}
    </div>
  )
}


const List = (props) => {
  let [title, setTitle] = useState(props.title);
  let [likes, setLikes] = useState(props.likes);
  let [today, setToday] = useState(props.today);
  return (
    <div className='list'>
      <h3> { title } <span onClick={ ()=>{ setLikes(likes + 1) } }> 👍 </span> { likes } </h3>
      <p> { today } </p>
      <hr/>
    </div>
  )
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
