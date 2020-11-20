import { sleep } from 'k6';
import http from 'k6/http';

export let options = {
    stages: [
      { duration: '1m', target: 10 }, // simulate ramp-up of traffic from 1 to 10 users over 1 minutes.
      { duration: '1m', target: 10 }, // stay at 10 users for 10 minutes
      { duration: '1m', target: 20 }, // simulate ramp-up of traffic from 1 to 10 users over 1 minutes.
      { duration: '1m', target: 20 },
      { duration: '1m', target: 30 }, // simulate ramp-up of traffic from 1 to 10 users over 1 minutes.
      { duration: '1m', target: 30 },
      { duration: '1m', target: 0 }, // ramp-down to 0 users
    ],
    thresholds: {
      http_req_duration: ['p(99)<1500'], // 99% of requests must complete below 1.5s
      'logged in successfully': ['p(99)<1500'], // 99% of requests must complete below 1.5s
    },
  };
  
  export default () => {
    http.get('http://46.101.147.140:8080/hola');
    sleep(1);
  };
  
