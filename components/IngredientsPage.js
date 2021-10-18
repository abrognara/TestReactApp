import React, { useState, useEffect } from 'react';

// import Table from './Table';
import TableNew from './TableNew';

import {
    TextInput,
    View,
    Button
  } from 'react-native';

const IngredientsPage = (props) => {
    const [input, setInput] = useState('');
    const [data, setData] = useState({});

    useEffect(() => {
      loadData();
      console.log(data);
    });

    const submitInput = () => {
      props.datastore.addIngredient(input);
      setInput('');
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
          onSubmitEditing={e => console.log(`onSubmitEditing called ${e}`)}
        />
        <Button
          title="Submit"
          color="#f194ff"
          onPress={() => submitInput()}
        />
        <Button
          title="Clear All"
          color="#f194ff"
          onPress={() => handleClearAll()}
        />
        <TableNew
          data={data.ingredients}
        />
      </View>
    );
};

export default IngredientsPage;