pipeline {
    agent any
    stages {
        stage("Checkout") {
            steps {
                echo "Checkout"
            }
        }
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
                sh 'k6 run loadtests/performance-test.js'
            }
        }
    }
}
