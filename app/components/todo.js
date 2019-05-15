import React, { Component } from 'react';
import { Text, TextInput, TouchableHighlight, View } from 'react-native';

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


  render() {
   
    return (
        <View style={styles.li}>      
        {/* Checking if you clicked Edit, shows the item added or a edit form */}
        {edit ?
        
        <View style={styles.editItemForm} >
            
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
        : <View className={'item ' + (complete ? 'completed' : '')}>
              <Text className={edit ? 'hide' : 'show'}>
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
