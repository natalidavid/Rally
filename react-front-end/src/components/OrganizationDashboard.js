import React, { useEffect, useState } from "react";
import axios from 'axios';
import Tasks from "./Tasks";
import { Typography, Button } from "@material-ui/core";
import TaskModal from "./TaskCreateModal";
import { useParams } from "react-router-dom";

export default function OrganizationDashboard() {
  const { id } = useParams();
  const [organization, setOrganization] = useState({});
  useEffect(() => {
    axios.get(`/api/organizations/${id}`)
    .then(res => {
      setOrganization(res.data);
    })
  }, []);
  return (
    <div>
      <div>
        <br />
        <Typography variant="h5" component="h2">
          {organization.name} Dashboard
        </Typography>
        <br />
        <TaskModal org={organization}/>
        <Tasks />
      </div>

      <div>
      <br />
        <Button type="submit" variant="contained" color="primary" href="#">
          Manage Volunteers
        </Button>
      </div>
    </div>
  );
}
