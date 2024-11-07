pipeline {
    agent any
    
    stages {
        stage('Docker pull'){
            steps{
                sh 'docker pull nginx'
            }
        }
        stage('Docker Deploy'){
            steps{
                sh 'docker run -d --name nginx -p 8081:80 nginx'
            }
        }
        stage('Validando aplicação'){
            steps{
                sh 'sleep 30'
                sh 'curl 34.44.215.100:8081'
            }
        }
        stage('Deletando container'){
            steps{
                sh 'docker rm -f nginx'
            }
        }
        stage('Deletando Image'){
            steps{
                sh 'docker rmi nginx'
            }
        }
    }
}