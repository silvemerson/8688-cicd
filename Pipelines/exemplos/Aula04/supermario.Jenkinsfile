pipeline {
    agent any
    
    stages{
        stage('Docker Pull'){
            steps{
                sh 'docker pull pengbai/docker-supermario'
            }
        }
        stage('Deploy Supermario'){
            steps{
                sh 'docker run --name supermario -d -p 8600:8080 pengbai/docker-supermario'
            }
        }
    }
}