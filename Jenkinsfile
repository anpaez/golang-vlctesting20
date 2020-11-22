pipeline {
    agent any
    def loadTestResult
    stages {
        stage("Build") {
            steps {
                echo "Building..."
            }
        }
        stage("Unit Test") {
            steps {
                echo "Unit Test..."
            }
        }
        stage("Integration Test") {
            steps {
                echo "Integration Test..."
            }
        }
        stage("Deploying") {
            steps {
                echo "Deploying..."
                ansiblePlaybook credentialsId: 'golang-server-ansible', disableHostKeyChecking: true, installation: 'ansible', playbook: 'deployment.yml'
            }
        }
        stage("Load Testing") {
            steps {
                echo 'Running K6 performance tests...'
                loadTestResult = sh 'k6 run loadtests/performance-test.js --out influxdb=http://165.227.139.210:8086/k6'
            }
        }
        stage("Send Results") {
            steps {
                slackSend channel: 'vlctesting20', message: loadTestResult
            }
        }
    }
}
