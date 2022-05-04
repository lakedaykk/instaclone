import React ,{useEffect, useState} from 'react';
import "./Main.scss";
 import Commentlist from "./Commentlist.js"

//상수 데이터 가져올 때는, 컴퍼넌트처럼 함수명이랑 다름. 변수명을 가져오네
// import baselist from "./comBaselist.js"
//상수 데이터를 페이지 내에다 쓸때는. 함수가 닫히고 나서 쓴다. 

function Main(){





        // 상수데이터로 처리하는것
    // const baselist = [{username : 'daeyoung', comment : "안녕하세요 첫 댓글"},
    // {username : 'kkyoung', comment : "하이 무슨 일이야"},
    // {username : 'white', comment : "안녕하세요 "}]



    //input에 입력될 업데이트 값 state 관리
    const [cominput,setcominput] = useState({username : '', comment : ''});
    

    //댓글 리스트 state 관리. 
    // 초기값 빈 배열 + fetch로 가져온 mockdata 값 이 초기값이 됨.
    // 여기다가 이벤트 발생하면 입력될 값이 추가되어서 나온다. 
    const [comment,setcomment] = useState([]);
    
 



    useEffect(()=>{

    fetch('http://localhost:3000/data/commentData.json',{method : 'GET'})

        .then(res=>res.json())  // response 응답값을 객체 형태로 바꿈 javascript object notation 
        .then(data=>{setcomment(data)})  // 데이터 가져와서 그 데이터로 comment 값 리셋 

    },[]);





            //이벤트 발생하면, 이벤트 타겟의 값들을 가져와서 업데이트 저장
     function savevalue(event){
    
     setcominput({username : event.target.name,
                  comment : event.target.value})
     };
    


     // 현재 댓글리스트에다가, 업데이트된 값을 추가함.
     //그리고 나서 업데이트 상태 관리하는 값은 다시 원상복귀 시킴
    function addlist(){

setcomment(comment.concat([cominput]))


        setcominput({username : '', comment : ''})
    };



//엔터키누를때 
function enterkey(e){

    if(e.key ==='Enter'){
        addlist()};
}





return (


<div>
<nav>
    <div className = "navlogoleft">
        <img alt = "logo" src = "images/instalogo.png" className="logo" />
        <img alt = "instawrite" src = "images/logo.png" className="logotwo" />
    </div>
 
    <div className = "navinputbar">
        <img src="images/circles.png"  alt = "circle" className="circles" />
        <input className="navinput" type = "text" placeholder="검색" />
    </div>

    <div className = "navlogoright">
        <img alt = "compas" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png" className="logothree" />
        <img alt = "heart" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" className="logofour" />
        <img alt = "person" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png" className="logofive" /> 
    </div>

</nav>


<div className = "main"> 
                                <div className = "feeds">
                                    <div className = "article">
                                            <div className= "artname">
                                                <img alt = "back" src="images/name.png" className="namepic"/>
                                                    <div className = "idbar">
                                                    <span>이름</span>
                                                    <br /><span className = "place">장소</span>
                                                    </div>
                                                
                                                
                                            </div>
                                            <div className= "artpic">
                                                <img className="mainpicture" alt = "backtwo" src="images/name.png" />
                                            </div>

                                            <div className= "articonbar">
                                                <img alt = "compas" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png" className="logosix" />
                                                <img alt = "heart" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" className="logoseven" />
                                                <img alt = "person" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png" className="logoeight" /> 
                                                <img alt = "heaert" src="images/redheart.png" className="redheart" />
                                            </div>

                                            <div className= "artcommentlist">
                                                <div className = "commentname">
                                                    <span className ="writer">lakedaykk</span>님 외 <span className="writernumber">4</span>명이 좋아합니다.
                                                </div>
                                                <div className = "comlist">
                                                    <ul className="commentul">

                                                           {/*업데이트된 댓글까지 추가된 데이터 값을 props로 넘긴다  */}
                                                          <Commentlist comlist={comment} />


                                                    </ul>
                                                </div>
                                            </div>

                                            <div className= "artinputcontainer">
                                                <input  name = "lakedaykk"
                                                        className ="writecomment" 
                                                        type = "text" 
                                                        placeholder="댓글 달기" 
                                                        onChange={savevalue}
                                                        onKeyPress={enterkey}
                                                        value = {cominput.comment}
                                                        
                                                         />
                                                <button className ="commentbutton" onClick={addlist}>버튼</button>
                                            </div> 

                                    </div>
                                </div>



                            <div className = "mainright">
                                                    <div className = "rightname">
                                                        <img alt = "back" src="images/name.png" className="namepic" />
                                                        <div className = "idbar">
                                                            <span>이름</span>
                                                            <br /><span className = "place">장소</span>
                                                        </div>
                                                    </div>
                                                    <div className = "rightstory">
                                                                <div className="storyname">
                                                                    <div className = "nametag">
                                                                        <div className="tag">스토리</div>
                                                                        <div className="tagg">모두보기</div>
                                                                    </div>
                                                                </div>

                                                                <div className="storypic">
                                                                    <img alt = "back" src="images/name.png" className="namepic" />
                                                                    <div className = "idbar">
                                                                        <span>이름</span>
                                                                        <br /><span className = "place">장소</span>

                                                                    </div> 
                                                                    
                                                                </div>

                                                                <div className="storypic">
                                                                    <img alt = "back" src="images/name.png" className="namepic" />
                                                                    <div className = "idbar">
                                                                        <span>이름</span>
                                                                        <br /><span className = "place">장소</span>

                                                                    </div>
                                                                    
                                                                </div>

                                                                <div className="storypic">
                                                                    <img alt = "back" src="images/name.png" className="namepic" />
                                                                    <div className = "idbar">
                                                                        <span>이름</span>
                                                                        <br /><span className = "place">장소</span>

                                                                    </div>
                                                                    
                                                                </div>
                                                        </div>

                                                    <div className = "rightrecommend">
                                                                            <div className="recommendname">
                                                                                <div className = "nametag">
                                                                                    <div className="tag">회원님을 위한 추천</div>
                                                                                    <div className="tagg">모두보기</div>
                                                                                </div>
                                                                            </div>
                                                                            <div className= "recommmendpic">

                                                                                    <div className="storypic">
                                                                                        <img alt = "back" src="images/name.png" className="namepic" />
                                                                                        <div className = "idbar">
                                                                                            <span>이름</span>
                                                                                            <br /><span className = "place">장소</span>

                                                                                        </div>
                                                                                        <div className = "follow">
                                                                                            팔로우
                                                                                        </div>
                                                                                    </div>

                                                                                    <div className="storypic">
                                                                                        <img alt = "back" src="images/name.png" className="namepic" />
                                                                                        <div className = "idbar">
                                                                                            <span>이름</span>
                                                                                            <br /><span className = "place">장소</span>

                                                                                        </div>
                                                                                        <div className = "follow">
                                                                                            팔로우
                                                                                        </div>
                                                                                    </div>

                                                                                    <div className="storypic">
                                                                                        <img alt = "back" src="images/name.png" className="namepic" />
                                                                                        <div className = "idbar">
                                                                                            <span className="spanname">이름</span>
                                                                                            <br /><span className = "place">장소</span>

                                                                                        </div>
                                                                                        <div className = "follow">
                                                                                            팔로우
                                                                                        </div>                                                              
                                                                                    </div>
                                                                            </div>
                                                        </div>

                                                        <div className = "rightetc">
                                                            정보 지원 홍보센터 API 채용정보
                                                        </div>
                                        
                    

                                </div>




</div>







</div>



) 
};


export default Main;