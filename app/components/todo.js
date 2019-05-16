import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
 
export default class Todo extends Component {
    constructor(props){
        super(props)

        this.state = {
        }
    }

    componentDidMount(){
       // this.setState({newitem: this.props.todoObject.item})
       //console.log(this.props.todo)
    }

    onValueChange = (e) => {
        this.setState({newitem: e.target.value});
    }

     // UPDATE ITEM =====
     handleUpdate = e => { 
        e.preventDefault();
        
        const {id, complete, edit } = this.props.todoObject;

        let updateObject = {
            item: this.state.newitem,
            id,
            complete,
            edit,
        }
        // calling the updateItem function and passing in the new input value,
        this.props.updateItem(updateObject);
    }


  render() {
      // add id ---
    const {complete, edit,} = this.props.todo;
    return (
        <View style={styles.li}>      
        {/* Checking if you clicked Edit, shows the item added or a edit form */}
        {edit ?
        <React.Fragment>
            <Text style={styles.p}>Edit</Text>
            <View style={styles.editItemForm}>
                
                <TextInput
                name="item"
                onChange={this.onValueChange}
                value={this.state.newitem}
                type="text"
                />

                <TouchableHighlight
                onPress={this.handleUpdate}
                style={styles.submitUpdate}
                className="btn"
                value="Update"> Submit </TouchableHighlight>
            </View>
        </React.Fragment>
        : <View style={styles.item + (complete ? styles.completed : '')}>
              <Text style={styles.itemText + ' ' + (edit ? styles.hide :  styles.show)}>
                {/* {this.state.newitem} */}
                {this.props.todo.item}
              </Text>
            </View>
        }

      
      <View className="buttons">
        
        
        {/* EDIT TODO */}
        
        {/* <TouchableHighlight onClick={
          () => this.props.editToDo(id)}>
          {edit ? <i className="fas fa-times"></i> : <i className="far fa-edit"></i>}
        </TouchableHighlight> */}

        {/* COMPLETE TODO */}
        {/* <TouchableHighlight onClick={()=> this.props.completeToDo(id)} className={edit ? 'hide' : 'show'} >
          <i className="fas fa-check-circle"></i>
        </TouchableHighlight> */}

        {/* DELETE TODO */}
        {/* <TouchableHighlight onClick={()=> this.props.removeToDo(id)} className={edit ? 'hide' : 'show'}>
          <i className="fas fa-trash-alt"></i>
        </TouchableHighlight> */}
      </View>

    </View>
    )
  }
}

var styles = StyleSheet.create({

    li: {
        marginVertical: 20,
        paddingVertical: 20,
        borderWidth: 1,
        borderColor: '#35477d',
        backgroundColor: '#35477d',
    },
    p: {
        color: 'white',
    },
    editItemForm: {
        backgroundColor: 'blue'
    },
    submitUpdate: {
        backgroundColor: 'pink'
    },
    itemText: {
        color: 'white',
    },

    hide: {
        display: 'none',
    },
      
    completed: {
        textDecorationLine: 'line-through',
    }

})
