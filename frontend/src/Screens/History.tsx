import React, { useState } from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import Button from '../Components/Button';

const tableData = {
  tableHead: ['Workout Name', 'Date', 'Duration', 'Weight', 'PRs'],
  tableData: [
      ['Push', '12/15/23', '39m', '10000lbs', '1'],
      ['Pull', '12/16/23', '58m', '10000lbs', '2'],
      ['Legs', '12/17/23', '80m', '10000lbs', '0'],
      ['Push', '12/18/23', '39m', '10000lbs', '1'],
      ['Pull', '12/19/23', '58m', '10000lbs', '2'],
      ['Legs', '12/20/23', '80m', '10000lbs', '0'],
      ['Push', '12/22/23', '39m', '10000lbs', '1'],
      ['Pull', '12/23/23', '58m', '10000lbs', '2'],
      ['Legs', '12/24/23', '80m', '10000lbs', '0'],
      ['Push', '12/15/23', '39m', '10000lbs', '1'],
      ['Pull', '12/16/23', '58m', '10000lbs', '2'],
      ['Legs', '12/17/23', '80m', '10000lbs', '0'],
      ['Push', '12/18/23', '39m', '10000lbs', '1'],
      ['Pull', '12/19/23', '58m', '10000lbs', '2'],
      ['Legs', '12/20/23', '80m', '10000lbs', '0'],
      ['Push', '12/22/23', '39m', '10000lbs', '1'],
      ['Pull', '12/23/23', '58m', '10000lbs', '2'],
      ['Legs', '12/24/23', '80m', '10000lbs', '0'],
  ],
};

const Workout = ({ navigation }: any) => {
  const [data, setData] = useState(tableData);
    return (
        <View style={styles.container}>
          <ScrollView>
            <Table borderStyle={{ borderWidth: 4, borderColor: 'teal' }}>
                <Row data={data.tableHead} style={styles.head} textStyle={styles.headText} />
                {data.tableData.map((rowData, index) => (
                <Row
                    key={index}
                    data={rowData}
                    textStyle={styles.text}
                />
            ))}
            </Table>
          </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 10, 
    justifyContent: 'center', 
    backgroundColor: '#fff' 
  },
  head: { 
    height: 44, 
    backgroundColor: 'darkblue' 
  },
  headText: { 
    fontSize: 14, 
    fontWeight: 'bold' , 
    textAlign: 'center', 
    color: 'white' 
  },
  text: { 
    margin: 6, 
    fontSize: 11, 
    fontWeight: 'bold' , 
    textAlign: 'center' 
  },
})

export default Workout;