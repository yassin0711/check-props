// import logo from './logo.svg';
import './App.css';
import Profile from './Profile/profile';

function App() {
  const fullName="hello world", bio ="coding", profession ="doctor"
  const f = () => {
    alert(fullName)
  }
  
  return (
    <div>
    <Profile fullName = {fullName} bio ={bio}  profession ={profession} f={f}   >
      <img src="./Profile/loffy.png" alt="luffy" />
    </Profile>
    </div>

      
  );
}

export default App;
