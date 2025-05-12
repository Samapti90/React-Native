import React from 'react';
import { StyleSheet } from 'react-native';
import { DataTable } from 'react-native-paper';

const TableExample = () => {
  return (
    <DataTable style={styles.container}>
      <DataTable.Header style={styles.tableHeader}>
        <DataTable.Title>Name</DataTable.Title>
        <DataTable.Title>Favourite Food</DataTable.Title>
        <DataTable.Title>Age</DataTable.Title>
      </DataTable.Header>
      <DataTable.Row>
        <DataTable.Cell style={styles.tableHeader}>Radhika</DataTable.Cell>
        <DataTable.Cell style={styles.tableHeader}>Dosa</DataTable.Cell>
        <DataTable.Cell style={styles.tableHeader}>23</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell style={styles.tableHeader}>Krishna</DataTable.Cell>
        <DataTable.Cell style={styles.tableHeader}>Uttapam</DataTable.Cell>
        <DataTable.Cell style={styles.tableHeader}>26</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell style={styles.tableHeader}>Vanshika</DataTable.Cell>
        <DataTable.Cell style={styles.tableHeader}>Brownie</DataTable.Cell>
        <DataTable.Cell style={styles.tableHeader}>20</DataTable.Cell>
      </DataTable.Row>
      <DataTable.Row>
        <DataTable.Cell style={styles.tableHeader}>Teena</DataTable.Cell>
        <DataTable.Cell style={styles.tableHeader}>Pizza</DataTable.Cell>
        <DataTable.Cell style={styles.tableHeader}>24</DataTable.Cell>
      </DataTable.Row>
    </DataTable>
  );
};

export default TableExample;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    marginTop: 80,
  },
  tableHeader: {
    backgroundColor: '#DCDCDC',
  },
});