import React from 'react'
import { MdModeEdit, MdDelete } from "react-icons/md";


const handledelete = () => {
  if (window.confirm("Er du sikker på at du vil slette services: " + title)) {
    // Kald til API - slet 
  }
}

const AdminService = () => {
  return (
    <section>
      <h1>Service</h1>
      <table>
        <thead>
          <tr>
            <th>Title:</th>
            <th>Beskrivelse:</th>
            <th>Redigere:</th>
            <th>Slet:</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Test</td>
            <td>Dette er en test</td>
            <td><MdModeEdit /></td>
            <td><MdDelete onClick={() => handledelete(title)} /></td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}

export default AdminService