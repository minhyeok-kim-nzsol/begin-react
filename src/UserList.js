import React, {useEffect} from 'react';

const User = React.memo(function User({ user, onRemove, onToggle }) {
  const { username, email, id, active } = user;

  // useEffect(() => {
  //   // Mount
  //   // props -> state
  //   // REST API
  //   // D3 Video.js 등 처리
  //   // setInterval, setTimeout
  //   console.log("컴포넌트가 화면에 나타남");


  //   return () => {
  //     // Unmount
  //     // clearInterval, clearTimeout
  //     // 라이브러리 인스턴스 제거
  //     console.log("컴포넌트가 화면에서 사라짐");
  //   }
  // }, []);

  useEffect(() => {
    console.log("user 값이 설정됨");
    console.log(user);

    return () => {
      console.log("user 값이 바뀌기 전");
      console.log(user);
    }
  }, [user]); // dependency 설정

  return (
    <div>
      <b 
        style={{
          color: active ? 'green': 'black',
          cursor: 'pointer'
        }}
        onClick = {() => onToggle(id)}
      >
        {username}
      </b> 
      <span>({email})</span>
      <button onClick={() => onRemove(id)}>삭제</button>
    </div>
  )
});

function UserList({ users, onRemove, onToggle }) {
  return(
    <div>
      {
        users.map(
          user => (
            <User 
              user={user} 
              key={user.id} 
              onRemove={onRemove}
              onToggle={onToggle}
            />
          )
        )
      }
    </div>
  )
}

export default React.memo(UserList, (prevProps, nextProps) => nextProps.users === prevProps.users);