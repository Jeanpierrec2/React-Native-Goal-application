import { StyleSheet, View, Text, Pressable } from "react-native"

function GoalItem(props) {
  return (
    <View style={styles.goal}>
      <Pressable 
        android_ripple={{color: '#ddd'}} 
        onPress={() => props.deleteGoalHandler(props.id)}
        style={({pressed}) => pressed && styles.pressedItem}>
        <Text style={styles.goalText}>{props.text}</Text>  
      </Pressable> 
    </View>
  )
}

export default GoalItem

const styles = StyleSheet.create({
  goal: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    padding: 8,
    color: 'white'
  },
  pressedItem: {
    opacity: 0.5
  }
})