import React , {useState} from 'react';
import "./Login.scss";

// import {Link} from 'react-router-dom';
// import {useNavigate} from 'react-router-dom';





function Login(){




// const navigate = useNavigate();

// const gotomain = () => {

//     navigate('/main');
// };

// 아이디,패스워드 value , 버튼 값 상태 변경
const [idvalue,setid] = useState('');
const [pwvalue,setpw] = useState('');
const [btvalue,setbt] = useState(false);


// 이벤트가 일어나는 곳의 값을 가져와서 변수에 담기
function changeid(event){

    setid(event.target.value)
};

function changepw(event){

    setpw(event.target.value)
};

// 밸류값의 조건에 따라 setbt 상태 변경. 이 상태변경 값에 따라서 bt 바뀌게 해뒀음
function btactive(){

    idvalue.includes('@')  && pwvalue.length>5 ? setbt(true) : setbt(false)
}





return ( 

<div className = "grayline">
    <div className = "main">
        <div className = "instalogo">
            westagram

        </div>

        <div className = "inputcontainer">

            <input  
                    onChange={changeid}
                    onKeyUp={btactive}
                  
                    className = "idinput" 
                    type = "text" 
                    placeholder="전화번호, 사용자 이름 또는 이메일"

                     /> 

            <input 
                    onChange={changepw}
                    onKeyUp={btactive}
                    className = "pwinput" 
                    type = "password" 
                    placeholder="비밀번호"
                   
                    
                     /> 
            <button 
                        className = {btvalue ? "btchange" : "bt" } 
                        disabled = {!btvalue}
                        
                        >로그인
                        
                        </button >

        </div>
       
  
            비밀번호를 잊으셨나요?
         {/* <Link to = '/main'>메인으로 이동</Link> */}

        {/* <button onClick={gotomain}> 메인가는버튼</button> */}
    
    </div>

</div>




 )
};

export default Login ;