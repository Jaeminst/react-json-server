
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [listArr, setListArr] = useState([]);
  const [listModal, setListModal] = useState([]);
  let [likeCount, setLikeCount] = useState(0);
  let [modal, setModal] = useState(false);
  let [titleNum, setTitleNum]=useState(0);
  let [inputTitle, setInputTitle]=useState('');
  let [inputContent, setInputContent]=useState('');

  useEffect(() => {
    fetch('http://localhost:3004/data', {
      method: 'GET',
    })
    .then(res => res.json())
    .then(data => {
      // setListArr(data);
      setListArr(data)
    })
    .catch((error) => {
      console.error('Error:', error);
      console.log("server is down!!")   
    });
  }, [inputTitle, likeCount])

  useEffect(() => {
    fetch(`http://localhost:3004/data/${titleNum}`, {
      method: 'GET',
    })
    .then(res => res.json())
    .then(data => {
      setListModal(data)
    })
    .catch((error) => {
      console.error('Error:', error);
      console.log("server is down!!")   
    });
  }, [titleNum])

  const putData = (id, data) => {
    fetch(`http://localhost:3004/data/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then((data) => console.log(data));
  }

  const likeCountFunc = (id, likes) => {
    const isList = (e) => e.id === id
    let copyList = {...listArr[listArr.findIndex(isList)]};
    setLikeCount(likes++)
    copyList.likes++
    putData(id, copyList)
  };

  function Modal(){
    return (
      <div className="modal">
        <h2>{ listModal.title }</h2>
        <p>{ listModal.today }</p>
        <p>{ listModal.content }</p>
      </div>
    );
  }

  const renderModal = (e) => {
    e === titleNum ? (modal ? setModal(false) : setModal(true)) : setModal(true)
  }

  const writeBtn = () => {
    const copyData = [...listArr]
    const inputId = copyData.length + 1
    const inputData = {
      id: inputId,
      title: inputTitle,
      content: inputContent,
      likes: 0,
      today: new Date().toLocaleDateString()
    }

    fetch(`http://localhost:3004/data`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputData),
    })
    .then((response) => response.json())
    .then((data) => console.log(data));

    // copyData.push(inputData)
    // setListArr(copyData)
    setInputTitle('')
    setInputContent('')
  }

  return (
    <div className="App">

      <div className='black-nav'>
        <div className='logoName'>Jaeminst Blog</div>
      </div>

      {/* <button onClick={ Retitle }>변경</button> */}
      {/* <button onClick={ articleSort } >정렬</button> */}


      
      {listArr.map((list, i) => {
        return (
          <div className='list' key={i}>
            <h3> { list.title } <span onClick={ ()=>{likeCountFunc(list.id, list.likes)} }> 💖 </span> { list.likes } </h3>
            <p> { list.today } </p>
            <button onClick={ () => { 
              renderModal(list.id)
              setTitleNum(list.id)
              } }>보기</button>
            {/* <button onClick={ () => handleTitle }>편집</button> */}
            <hr/>
          </div>
        )
      })}

      <div className="publish">
        <input placeholder='Title' onChange={(e)=>{ setInputTitle(e.target.value) }} value={inputTitle} />
        <input placeholder='Content' onChange={(e)=>{ setInputContent(e.target.value) }} value={inputContent} />
        <input readOnly value={new Date()} />
        <button onClick={ () => { writeBtn() } }>저장</button>
      </div>
      
      {modal === true ? <Modal titleNum={titleNum} /> : null}

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


export default App;
