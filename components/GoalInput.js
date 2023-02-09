import { useState } from "react"
import { View, TextInput, Button, StyleSheet, Modal, Image } from "react-native"


function GoalInput(props) {

    const [enteredGoal,setEnteredGoal] = useState('')

    const goalInputHandler = (goal) => {
    setEnteredGoal(goal)
  }

  const addGoalHandler = () => {
    props.setCourseGoals(prev => [...prev, {text: enteredGoal, key: Math.random().toString()}])
    setEnteredGoal('')
    props.closeModalHandler()
  }

  return (
  <Modal visible={props.showModal} animationType="slide">
    <View style={styles.inputContainer}>
      <Image style={styles.image} source={require('../assets/images/goal.png')} />
      <TextInput
        value={enteredGoal}
        onChangeText={goalInputHandler} 
        style={styles.textInput} 
        placeholder='Your course goal' />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button onPress={props.closeModalHandler} title="Cancel" color='#f31282' />
          </View>
          <View style={styles.button}>
            <Button onPress={addGoalHandler} title='Add Goal' color='#b180f0' />
          </View>
        </View>
    </View>
  </Modal>
  )
}

export default GoalInput

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b'
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    width: '100%',
    padding: 8,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderRadius: 6
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row'
  },
  button: {
    width: '30%',
    marginHorizontal: 8
  }
})