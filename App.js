import { useState } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {

  const [showModal,setShowModal] = useState(false)
  const [courseGoals,setCourseGoals] = useState([])

  const deleteGoalHandler = (key) => {
    setCourseGoals(prev => {
      return prev.filter(goal => goal.key !== key)
    })
  }

  const showModalHandler = () => {
    setShowModal(true)
  }

  const closeModalHandler = () => {
    setShowModal(false)
  }

  return (
    <>
      <StatusBar style='light' />
      <View style={styles.appContainer}>
        <Button 
          title='Add New Goal' 
          color='#5e0acc'
          onPress={showModalHandler} />
        <GoalInput closeModalHandler={closeModalHandler} showModal={showModal} setCourseGoals={setCourseGoals} />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            alwaysBounceVertical={false} 
            renderItem={itemData => {
              return <GoalItem
                        id={itemData.item.key} 
                        text={itemData.item.text}
                        deleteGoalHandler={deleteGoalHandler} />
            }}
            />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  goalsContainer: {
    flex: 5,
  },
});
