import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from "reactstrap";
import { API_URL_PARTICIPANT } from '../constants';
import NewParticipantModal from './NewParticipantModal';
import ConfirmRemovalModal from './ConfirmRemovalModal';

const ParticipantList = ({  resetState }) => {
  const [participants, setParticipants] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [createNewModalOpen, setCreateNewModalOpen] = useState(false);

  useEffect(() => {
    axios.get(API_URL_PARTICIPANT)
      .then(response => setParticipants(response.data))
      .catch(error => console.error('Error fetching participants:', error));
  }, []);

  const handleParticipantUpdate = (updatedParticipant) => {
    setParticipants(prevParticipants => prevParticipants.map(participant =>
      participant.id === updatedParticipant.id ? updatedParticipant : participant
    ));
  };

  const handleParticipantDelete = (participantId) => {
    console.log("Deleting participant with ID:", participantId);
    setParticipants(prev => prev.filter(p => p.id !== participantId));
  };



  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search participants..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
       
      </div>
      
      <Table >
        <thead>
          <tr>
            <th>Name</th>
            <th>Billing Type</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!participants || participants.length <= 0 ? (
            <tr>
              <td colSpan="3" align="center">
                <b>Ops, no one here yet</b>
              </td>
            </tr>
          ) : (
            participants
              .filter(participant => 
                participant.name.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map(participant => (
                <tr key={participant.id}>
                  <td>{participant.name}</td>
                  <td>{participant.billing_type}</td>
                  <td align="center">
                    <NewParticipantModal
                      create={false}
                      participant={participant}
                      resetState={resetState}
                      onUpdate={handleParticipantUpdate}
                    />
                    &nbsp;&nbsp;
                    <ConfirmRemovalModal
                      id={participant.id}
                      onDelete={handleParticipantDelete}
                    />
                  </td>
                </tr>
              ))
          )}
        </tbody>
      </Table>
      <NewParticipantModal
        create={true}
        resetState={resetState}
        isOpen={createNewModalOpen}
        toggle={() => setCreateNewModalOpen(!createNewModalOpen)}
      />
    </div>
  );
};

export default ParticipantList;
