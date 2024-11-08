pipeline {
    agent any

    options {
        timestamps()
        timeout(time: 10, unit: 'MINUTES')
    }

    environment {
        IMAGE_NAME="course-catalog"
        IMAGE_TAG="0.${BUILD_ID}"
        CONTAINER_IMAGE="${IMAGE_NAME}:${IMAGE_TAG}"       
    }

    stages{
        stage('Unit Test'){
            steps{
                script{
                    image = docker.build("${CONTAINER_IMAGE}")
                    image.inside("-v ${WORKSPACE}:/course-catalog/"){
                        sh "nosetests -with-xunit --with-coverage \
                        --cover-package=project teste_users.py"
                    }
                }
            }

        }
    }
    post{
        success{
            echo "A Pipeline foi executada com sucesso"
        }
        failure{
            echo "A Pipeline foi executada com falha"
        }
        cleanup{
            sh "docker image rm ${CONTAINER_IMAGE}"
        }
    }
}