import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from 'reactstrap';
import NewAttendanceModal from './NewAttendanceModal';
import DeleteAttendance from './DeleteAttendance';

const AttendanceList = ({ resetState }) => {
  const [attendanceRecords, setAttendanceRecords] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [createNewModalOpen, setCreateNewModalOpen] = useState(false);

  const handleAttendanceUpdate = (updatedAttendance) => {
    setAttendanceRecords((prevRecords) =>
      prevRecords.map((record) =>
        record.id === updatedAttendance.id ? updatedAttendance : record
      )
    );
  };

  const handleAttendanceDelete = (attendanceId) => {
    console.log("Deleting attendance record with ID:", attendanceId);
    setAttendanceRecords((prev) => prev.filter((record) => record.id !== attendanceId));
  };

  useEffect(() => {
    // Fetch attendance records from the API
    axios
      .get('http://127.0.0.1:8000/api/attendance-tracking/')
      .then((response) => {
        setAttendanceRecords(response.data);
      })
      .catch((error) => {
        console.error('Error fetching attendance records: ', error);
      });
  }, []); // Empty dependency array to fetch data on component mount

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search attendance records..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <Table>
        <thead>
          <tr>
            <th>Participant</th>
            <th>Sign In Time</th>
            <th>Sign Out Time</th>
            
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!attendanceRecords || attendanceRecords.length <= 0 ? (
            <tr>
              <td colSpan="5" align="center">
                <b>No attendance records found</b>
              </td>
            </tr>
          ) : (
            attendanceRecords
              .filter((record) =>
                searchQuery &&
                typeof searchQuery === 'string' &&
                record.participant.name.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((record) => (
                <tr key={record.id}>
                  <td>{record.participant.name}</td>
                  <td>{record.sign_in_time}</td>
                  <td>{record.sign_out_time}</td>
                  
                  <td align="center">
                    <NewAttendanceModal
                      create={false}
                      attendanceRecord={record}
                      resetState={resetState}
                      onUpdate={handleAttendanceUpdate}
                    />
                    &nbsp;&nbsp;
                    <DeleteAttendance id={record.id} onDelete={handleAttendanceDelete} />
                  </td>
                </tr>
              ))
          )}
        </tbody>
      </Table>
      <NewAttendanceModal
        create={true}
        resetState={resetState}
        isOpen={createNewModalOpen}
        toggle={() => setCreateNewModalOpen(!createNewModalOpen)}
      />
    </div>
  );
};

export default AttendanceList;
