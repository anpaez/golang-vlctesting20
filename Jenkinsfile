pipeline {
    agent any
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
                sh 'k6 run loadtests/performance-test.js --out influxdb=http://165.227.139.210:8086/k6'
            }
        }
    }
    post {
        success {
            slackSend channel: 'vlctesting20', message: "EL pipeline se ha ejecutado correctamente, puedes ver tu aplicacion en http://app.go.vlctesting20.es:8080/hola", color: "good"
        }
        failure {
            slackSend channel: 'vlctesting20', message: "Error al lanzar el pipeline. Ha fallado en: ${env.JOB_NAME}", color: "danger"
        }
    }
}
