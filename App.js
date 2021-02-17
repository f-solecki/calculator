import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

import Item from "./components/Item"

const keys = [
  ["7", "4", "1", "."],
  ["8", "5", "2", "0"],
  ["9", "6", "3", "="],
  ["C", "/", "*", "-", "+"]
]
export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      value: '0',
      result: 0,
    }
  }
  operation() {
    if (this.state.value[this.state.value.length - 1] != "+" && this.state.value[this.state.value.length - 1] != "-" && this.state.value[this.state.value.length - 1] != "/" && this.state.value[this.state.value.length - 1] != "*") {
      let tempResult = eval(this.state.value).toPrecision(9).toString()
      this.setState({
        result: Number(tempResult)
      })
    }
    else {
      window.alert("Wprowadź liczbę po operatorze!")
    }
  }

  buttons() {
    let button = keys.map((buttonRow, x) => {
      let oneButton = buttonRow.map((button, y) => {
        let back
        if (x < 3) {
          back = 'gray'
        } else {
          back = "lightgray"
        }
        return <Item
          value={button}
          back={back}
          handleOnPress={this.handleInput.bind(this, button)}
          key={y}
        />
      })
      return <View style={styles.inputRow} key={x}>{oneButton}</View>
    })
    return button
  }

  handleInput = (input) => {
    const { value } = this.state
    if (input == "C") {
      if (value.length > 0) {
        this.setState({
          value: value.substr(0, value.length - 1),
          result: "0"
        })
      }
    }
    else if (input == "=") {
      this.operation()
    }
    else {
      this.setState({
        value: (value === "0") ? input : value + input,
      })
    }


  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.resultContainer}>
          {/* <ScrollView> */}
          <Text style={styles.operationText}>{this.state.value}</Text>
          {/* </ScrollView> */}
          {/* <ScrollView> */}
          <Text style={styles.resultText}>{this.state.result}</Text>
          {/* </ScrollView> */}
        </View>
        <View style={styles.inputContainer}>
          {this.buttons()}
        </View>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  resultContainer: {
    flex: 2,
    backgroundColor: "#90ee90",
    justifyContent: "flex-end",
  },
  inputContainer: {
    flex: 4,
    backgroundColor: "#505050",
    flexDirection: "row"
  },
  resultText: {
    color: "#505050",
    fontSize: 70,
    fontWeight: "bold",
    padding: 20,
    textAlign: 'right',
  },
  operationText: {
    color: "#505050",
    fontSize: 100,
    fontWeight: "bold",
    padding: 20,
    textAlign: 'right',
  },
  inputRow: {
    flex: 1,
    flexDirection: "column",
  }
});
