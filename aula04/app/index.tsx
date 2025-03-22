import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAdbXpjuKH-P0YcvlbpuOZWQYx6NzFcs6M",
  authDomain: "meu-primeiro-firebase-fd2e1.firebaseapp.com",
  projectId: "meu-primeiro-firebase-fd2e1",
  storageBucket: "meu-primeiro-firebase-fd2e1.firebasestorage.app",
  messagingSenderId: "256621339278",
  appId: "1:256621339278:web:afbe2a07d187ab0333dfdf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from 'react-native';

export default function App(){
  const [nomes, setNomes] = useState([]);

  useEffect(() => {
    const fetchData = async() =>{
      const nomesCollection = firebase.firestore().collection('Nomes'),
      const snapshot = await nomesCollection.get();

      const data =[];
      snapshot.forEach((doc)=>{
        data.push({ id: doc.id, ...doc.data() });
      });

      setNomes(data);
    };

    fetchData();

  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center',
      alignItems:'center'}}>
        <Text> Lista de Nomes: </Text>
        <FlatList
          data= {nomes}
          keyExtractor = {(item) => item.id}
          renderItem={({ item})=> (
            <View>
              <Text>{item.Nome} {item.Sobrenome}</Text>
            }
          </View>
    }}
  )
}