pipeline {
    agent any
    

    stages{
        stage('Stage de Global Vars'){
            steps{
                sh 'echo ${JOB_NAME}'
                sh 'echo ${BUILD_NUMBER}'
                sh 'echo ${BUILD_URL}'
            }
        }
    }
}