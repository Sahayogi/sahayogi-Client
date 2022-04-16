import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Charts from '../components/chart/Charts';
import axios from 'axios';

const Container = styled.div`
  min-height: calc(100vh - 80px);
  background-image: radial-gradient(
    circle,
    #3c3d3f,
    #2f3132,
    #242525,
    #191a19,
    #0d0d0c
  );
  display: flex;
  flex-direction: column;
  color: white;

  @media only screen and (min-width: 280px) and (max-width: 1080px) {
    flex-direction: column;
  }
`;

const About = () => {
  const [chartData, setChartData] = useState([]);
  const fetchApi = async () => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('access-token')}`,
        },
      };
      const { data } = await axios.get(
        'http://localhost:5005/api/info/chart',

        config
      );
      console.log('data:', data);
      setChartData(data.data);
      console.log('chartData', chartData);

      if (data.success === true) {
        console.log('added sucessful');
      }
    } catch (err) {
      console.log(err, 'err');
    }
  };
  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <Container>
      <Charts
        data={chartData}
        title='Donation Project Analytics'
        grid
        dataKey='goal'
      />
    </Container>
  );
};

export default About;
