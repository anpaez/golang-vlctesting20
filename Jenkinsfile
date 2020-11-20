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
                echo 'Installing k6'
                sh 'sudo chmod +x setup_k6.sh'
                sh 'sudo ./setup_k6.sh'
                echo 'Running K6 performance tests...'
                sh 'k6 run loadtests/performance-test.js'
            }
        }
    }
}
