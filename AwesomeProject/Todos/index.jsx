import {
  Alert,
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import NavBar from "../Components/NavBar";

const Todos = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <NavBar navigation={navigation} />
      <Header />
      <Content />
    </View>
  );
};

export default Todos;

const Content = () => {
  const [todos, setTodos] = useState([
    { id: 1, task: "jogging" },
    { id: 2, task: "fresh" },
    { id: 3, task: "breakfast" },
    { id: 4, task: "planning" },
    { id: 5, task: "jogging1" },
    { id: 6, task: "fresh1" },
    { id: 7, task: "breakfast1" },
    { id: 8, task: "planning1" },
    { id: 9, task: "jogging1" },
    { id: 10, task: "fresh1" },
    { id: 11, task: "breakfast1" },
    { id: 12, task: "planning1" },
    { id: 13, task: "jogging1" },
    { id: 14, task: "fresh1" },
    { id: 15, task: "breakfast1" },
    { id: 16, task: "planning1" },
  ]);

  const onPress = (_id) => {
    setTodos((pre) => pre.filter(({ id }) => id != _id));
  };

  const onAddCb = (newTodo, cb) => {
    if (newTodo.length < 3)
      Alert.alert("OOP!", "It must above 3 char.", [
        {
          text: "Understand",
          onPress: () => {
            console.log("understamf");
          },
        },
      ]);
    else {
      setTodos((p) => [{ id: Math.random(), task: newTodo }, ...p]);
      cb();
    }
  };

  return (
    <View style={styles.content}>
      <AddTodo onAddCb={onAddCb} />
      <View style={styles.lists}>
        <FlatList
          data={todos}
          renderItem={({ item }) => <TodoItem todo={item} onPress={onPress} />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    border: "2px solid #eee",
    borderColor: "red",
    borderWidth: 10,
  },
  lists: {
    // backgroundColor: "yellow",
    flex: 1,
    paddingVertical: 9,

    flex: 1,
  },
  content: {
    // display:'flex'
    flex: 1,
    // height: "100%",
    padding: 40,
    // alignSelf: "stretch",
    // backgroundColor: "red",
    // marginTop: 4,
    // borderWidth: 2,
    // borderColor: "blue",
  },
  header: {
    // height: 80,
    paddingTop: 38,
    paddingBottom: 10,
    backgroundColor: "coral",
  },
  title: {
    fontSize: 40,
    textAlign: "center",
    color: "#ddd",
  },

  todoItem: {
    padding: 16,
    backgroundColor: "#bbb",
    marginTop: 4,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
  },
  todoItemTitle: {
    marginLeft: 8,
    fontSize: 16,
    color: "rgba(0,0,0,0.6)",
    fontWeight: "800",
  },

  input: {
    padding: 8,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "coral",
  },
  addBtn: {
    marginVertical: 10,
    // marginBottom: 30,
    width: "25%",
    // marginHorizontal: "auto",
    alignSelf: "center",
    // alignSelf: "center",
    // padding: 4,
  },
});

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Todo App</Text>
    </View>
  );
};

const TodoItem = ({ todo, onPress }) => {
  return (
    <TouchableOpacity onPress={() => {}}>
      <View style={styles.todoItem}>
        <MaterialIcons
          name="delete"
          size={24}
          color="#eee"
          onPress={() => {
            onPress(todo.id);
          }}
        />
        <Text style={styles.todoItemTitle}>{todo.task}</Text>
      </View>
    </TouchableOpacity>
  );
};

const AddTodo = ({ onAddCb }) => {
  const [newTodo, setNewTodo] = useState();
  return (
    <>
      <TextInput
        value={newTodo}
        style={styles.input}
        onChangeText={(v) => setNewTodo(v)}
      />
      <View style={styles.addBtn}>
        <Button
          title="Add"
          color="coral"
          onPress={() => {
            onAddCb(newTodo, () => {
              setNewTodo("");
            });
          }}
        />
      </View>
    </>
  );
};
