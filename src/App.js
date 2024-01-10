import React, {useState, useRef} from 'react'
import axios from 'axios'
import Peoples from "./assets/peoples.svg"
import Arrow from "./assets/arrow.svg"
import Basket from "./assets/basket.svg"

import { Container, H1, Image, ContainerItens, InputLabel, Input, Button, User } from "./styles";

function App() {
  const [users, setUsers] = useState ([])
  const name = useRef()
  const age = useRef()


async function addNewUsers(){
  const data = await axios.post('http://localhost:3001/users', {
    name: name.current.value,
    age: age.current.value,
  })
    //setUsers([...users,{id: Math.random(), name: name.current.value, age: age.current.value}])
  }

function deleteUser(userId){
  const newUsers = users.filter((user) => user.id !== userId);

  setUsers (newUsers);
}
  return (
    <Container>
      <Image alt='Logo' src={Peoples}></Image>
      <ContainerItens>
        <H1>Olá!</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={name} placeholder='Nome' />
        <InputLabel>Idade</InputLabel>
        <Input ref={age} placeholder='Idade' />

        <Button onClick={addNewUsers}>Cadastrar <img alt='seta' src={Arrow}></img></Button>

        <ul>
          {users.map(user => (
            <User key={user.id}>
             <p>{user.name}</p>  <p>{user.age}</p>
             <button onClick={()=> deleteUser (user.id)}><img src={Basket} alt='Cesta'></img></button>
            </User>
          ))}
        </ul>

      </ContainerItens>
    </Container>
  );
}
export default App

