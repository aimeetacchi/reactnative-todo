import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';
import Button from './button';
import Todo from './todo';
const uuidv1 = require('uuid/v1');

export default class FormComponent extends Component {
  
    constructor(props){
        super(props)
        this.state = {
            todos: [ ],
            submitted: false,
        }
    }

    componentDidMount(){
    //     // Check Local Storage for Data on Page Reload or use empty array.
    //      existingtodos = JSON.parse(localStorage.getItem('todos')) || [];
 
    //      // CHECK IF THERE IS ANYTHING IN LOCAL STORAGE!!! ====
    //      if(localStorage.getItem('todos') !== null){
    //          console.log('todos in localstorage');
 
    //          // setting state at beginning if there is anything in local storage.
    //          this.setState({todos: existingtodos});
    //      }
     }
 
     // EDIT ITEM =====
     editToDo = (id) => {
         const todo = this.state.todos.filter((todo)=> {
             if(todo.id === id){
                 // toggle from false/true
                 todo.edit = !todo.edit;
             }
             return todo;
         })
         this.setState({todos: todo}); 
     }
 
       // DONE ITEM ====
     completeToDo = id => {
        
         const todo = this.state.todos.filter((todo)=> {
             if(todo.id === id){
                 todo.complete = !todo.complete;
             }
             return todo;
         })
         this.setState({todos: todo});
 
         // updating localStorage
       //  this.addLocalStorage(todo);
     }
 
     updateItem = (data) => {
        
         const {item, id } = data;
     
         const newtodo = this.state.todos.map((todo)=> {
             if(todo.id === id){
                todo.item = item;
                todo.edit = !todo.edit;
             }
             return todo;
         })
         this.setState({todos: newtodo});
 
          // updating localStorage
         //this.addLocalStorage(newtodo);
     }
 
     // DELETE ITEM =====
     removeToDo = (id) => {
         
         //filter through the todos and remove the one passed into the function...
         const updatedtodos = this.state.todos.filter((todo, i) => id !== todo.id)
         console.log(updatedtodos);
         // //set new updated todo with the removed one gone.
         this.setState({todos: updatedtodos});
 
         // update local storage
         //localStorage.clear();
        //this.addLocalStorage(updatedtodos);
     }
     
     //Add to local storage function
     addLocalStorage = (arr) => {
         localStorage.setItem('todos', JSON.stringify(arr));
     }


    // CREATE ITEM =====
    handleSubmit = (e) => { 
        e.preventDefault()
        this.setState({submitted: true})
        console.log(this.refs.item._lastNativeText)

        let data = {
            item: this.refs.item._lastNativeText,
            complete: false,
            edit: false,
            id: uuidv1()
        }

        this.setState({
            // spread operator adds new object to exsitiing array.
            todos: [
                    ...this.state.todos,
                    data
            ]
        });

        // existingtodos.push(data);
        // //Add to local storage function
        // this.addLocalStorage(existingtodos);
        
        this.refs.item._lastNativeText = ""
    }



    // DELETES EVERYTHING IN STATE AND LOCALSTORAGE ===
    removeAll = () => {
        this.setState({
            todos: [],
            submitted: false,
        })
        // localStorage.clear();
    }

    render() {
    //  console.log(this.state.todos.length)
    return (
    <React.Fragment>
       
        <TextInput ref="item" returnKeyType="go" placeholder="Add your todo..." style={styles.input}/>
        <TouchableHighlight style={styles.button} onPress={this.handleSubmit} underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>Add Todo</Text>
        </TouchableHighlight>

            {/* ===== TODO LIST ====== */}
            <View style={styles.todolist}>
                <Text style={styles.todolisttext}>Your Todos</Text>
                
                {this.state.todos.length === 0 ? 
                <Text style={styles.p}>List is empty try adding a todo</Text>
                : 
                <React.Fragment>

                         {/* TODO COMPONENT RENDERS HERE */}
                        <View style={styles.scrollcontainer}>
                            <ScrollView>
                                {
                                this.state.todos.map((todo) =>
                                    <Todo 
                                    todo={todo}
                                    key={todo.id}
                                    completeToDo={this.completeToDo}
                                    updateItem={this.updateItem}
                                    editToDo={this.editToDo}
                                    removeToDo={this.removeToDo}
                                    />)
                                }  
                            </ScrollView>
                            {/* CLEAR ALL BUTTON */}
                                <View style={styles.clearAll}>
                                    <Button
                                        // passing props to button component
                                        name="Clear All Todos"
                                        func={this.removeAll} nameClass="clear"
                                    /> 
                                </View>
                        </View>
                </React.Fragment>}
               
                
            </View>
    </React.Fragment>
    )
}
}

var styles = StyleSheet.create({
    scrollcontainer: {
        flex: 1,
    },
    todolist: {

    },
    p: {
        color: 'white',
    },
    todolisttext: {
        color: '#fff',
        textAlign: 'center',
        marginVertical: 10,
        fontSize: 22,
    },
    input: {
        marginHorizontal: 20,
        backgroundColor: 'rgba(246, 114,128, 0.5)',
        color: '#FFF',
        height: 60,
        alignSelf: 'stretch',
    },
    button: {
      marginHorizontal: 20,
      height: 36,
      alignSelf: 'stretch',
      justifyContent: 'center',
      padding: 15,
      backgroundColor: '#35477d',
      
    },
    buttonText: {
        alignSelf: 'center',
        fontSize: 16,
        color: '#fff',
      },
    clearAll: {
        margin: 1,
        borderWidth: 1,
        borderColor: 'red'
      }
  });
  
