pipeline {
    agent any

    environment{
        DOCKER_IMAGE = "demo-site:1.${env.BUILD_ID}"
    }

    stages{
        stage('Git Clone'){
            steps{
                git 'http://34.42.235.13:3000/root/demo-site.git'
            }
        }
        stage('Docker Build'){
            steps{
                script{
                    docker.build("${DOCKER_IMAGE}")
                }
            }
  
        }
        stage('Docker Run Container'){
            steps{
                script{
                    docker.image("${DOCKER_IMAGE}").run('-d -p 8081:80')
                }
            }
        }
        stage('Validando app'){
            steps{
                sh 'curl 34.68.82.254:8081'
            }
        }
    }
    post {
        always {
            echo "Pipeline Executada"
        }
        failure{
            echo "Pipeline executada com falha"
        }
        success {
            echo "Pipeline executada com sucesso"
        }
    }
}