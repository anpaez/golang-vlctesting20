import { sleep } from 'k6';
import http from 'k6/http';

export let options = {
    stages: [
      { duration: '2m', target: 10 }, 
      { duration: '2m', target: 10 }, 
      { duration: '2m', target: 20 }, 
      { duration: '2m', target: 20 },
      { duration: '2m', target: 30 }, 
      { duration: '2m', target: 30 },
      { duration: '2m', target: 40 }, 
      { duration: '2m', target: 40 },
      { duration: '2m', target: 50 }, 
      { duration: '2m', target: 50 },
      { duration: '2m', target: 60 }, 
      { duration: '2m', target: 60 },
      { duration: '2m', target: 70 }, 
      { duration: '2m', target: 70 },
      { duration: '2m', target: 0 }, 
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
  
