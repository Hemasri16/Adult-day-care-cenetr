// DriverList.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from "reactstrap";
import { API_URL_DRIVER } from '../constants_driver';

import NewDriverModal from './NewDriverModal';

import DeleteModal from './DeleteModal'; // Assuming you have a DeleteModal component

const DriverList = ({ resetState }) => {
  const [drivers, setDrivers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [createNewModalOpen, setCreateNewModalOpen] = useState(false);

  useEffect(() => {
    axios.get(API_URL_DRIVER)
      .then(response => setDrivers(response.data))
      .catch(error => console.error('Error fetching drivers:', error));
  }, []);

  const handleDriverUpdate = (updatedDriver) => {
    setDrivers(prevDrivers => prevDrivers.map(driver =>
      driver.id === updatedDriver.id ? updatedDriver : driver
    ));
  };

  const handleDriverDelete = (driverId) => {
    console.log("Deleting driver with ID:", driverId);
    setDrivers(prev => prev.filter(driver => driver.id !== driverId));
  };

  const handleCreateNewDriver = () => {
    // Implement logic for creating a new driver
    // You may open a modal or navigate to a new page for creating a driver
    console.log("Create New Driver");
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search drivers..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!drivers || drivers.length <= 0 ? (
            <tr>
              <td colSpan="3" align="center">
                <b>Ops, no one here yet</b>
              </td>
            </tr>
          ) : (
            drivers
              .filter(driver => 
                driver.name.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map(driver => (
                <tr key={driver.id}>
                  <td>{driver.name}</td>
                  <td>{driver.other_field}</td>
                  <td align="center">
                    <NewDriverModal
                      create={false}
                      driver={driver}
                      resetState={resetState}
                      onUpdate={handleDriverUpdate}
                    />
                    &nbsp;&nbsp;
                    <DeleteModal
                      id={driver.id}
                      onDelete={handleDriverDelete}
                    />
                  </td>
                </tr>
              ))
          )}
        </tbody>
      </Table>
      <NewDriverModal
        create={true}
        resetState={resetState}
        isOpen={createNewModalOpen}
        toggle={() => setCreateNewModalOpen(!createNewModalOpen)}
      />
    </div>
  );
};

export default DriverList;
