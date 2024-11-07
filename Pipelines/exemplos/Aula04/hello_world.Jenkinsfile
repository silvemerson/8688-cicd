pipeline {
    agent any
    
    stages{
        stage('primeira pipeline'){
            steps{
                echo "Olá mundo, minha primeira pipeline"
            }
        }
        stage('Mostre a hora do servidor'){
            steps{
                sh 'date'
            }
        }
        stage('Mostre as variaveis do servidor'){
            steps{
                sh 'printenv'
            }
        }
        
    }
}