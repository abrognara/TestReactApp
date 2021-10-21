import React, { useState, useEffect } from 'react';

// import Table from './Table';
// import TableNew from './TableNew';
import StaticTable from './StaticTable';

import {
    TextInput,
    Text,
    View,
    TouchableOpacity,
    StyleSheet
  } from 'react-native';

const IngredientsPage = (props) => {
    const [input, setInput] = useState('');
    const [data, setData] = useState({});

    useEffect(() => {
      loadData();
    });

    const submitInput = () => {
      props.datastore.addIngredient(input);
      setInput('');
      loadData();
    };

    const handleClearAll = () => {
      props.datastore.clearAllIngredients();
      loadData();
    };

    const loadData = () => setData(props.datastore.readAll());

    return (
      <View>
        <TextInput
          placeholder={props.placeholder}
          value={input}
          defaultValue=""
          onChangeText={text => setInput(text)}
          onSubmitEditing={() => submitInput()}
        />
        <View style={{ paddingTop: 18, paddingBottom: 18 }}>
          <TouchableOpacity
            style={{ ...styles.button, ...styles.green}}
            onPress={submitInput}
          >
            <Text>Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ ...styles.button, ...styles.red}}
            onPress={handleClearAll}
          >
            <Text>Clear All</Text>
          </TouchableOpacity>
        </View>
        <StaticTable
          title="Ingredients"
          data={data.ingredients}
        />
        <StaticTable
          title="Steps"
          data={data.steps}
        />
      </View>
    );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    padding: 10
  },
  green: {
    backgroundColor: "#89ff85"
  },
  red: {
    backgroundColor: "#ff7770"
  }
});

export default IngredientsPage;