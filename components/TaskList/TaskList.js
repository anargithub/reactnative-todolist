import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  SafeAreaView,
} from "react-native";

export default function TaskList() {
  const [taskText, setTaskText] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (taskText) {
      setTasks([...tasks, taskText]);
      setTaskText("");
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>Today's tasks</Text>

        <FlatList
          data={tasks}
          renderItem={({ item }) => (
            <View style={styles.listView}>
              <Text>{item}</Text>
            </View>
          )}
        />

        <View style={styles.taskLine}>
          <TextInput
            style={styles.input}
            placeholder="Write a task"
            value={taskText}
            onChangeText={(text) => setTaskText(text)}
          />
          <View style={styles.buttonView}>
            <Button style={styles.button} title="+" onPress={addTask} />
          </View>
        </View>
        
      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#E8EAED",
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    marginTop: 50,
  },
  taskLine: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 50,
  },
  input: {
    backgroundColor: "white",
    width: "80%",
    height: 50,
    borderRadius: 999,
    textAlign: "center",
  },
  buttonView: {
    width: 50,
    height: 50,
    borderRadius: 999,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    textAlign: "center",
    fontSize: 32,
  },
  listView: {
    backgroundColor: "white",
    width: "80%",
    marginTop: 20,
    borderRadius: 10,
    textAlign: "center",
    justifyContent: "center",
    padding: 10,
  },
});
