pipeline {
    agent any

    environment {
        K8S_TOKEN = credentials('K8S_TOKEN')
        K8S_API_SERVER = "https://104.154.216.49:6443/"
    }

    stages {
        stage('Testar Conexão com o Cluster') {
            steps {
                sh 'kubectl get nodes --server=$K8S_API_SERVER --token=$K8S_TOKEN --insecure-skip-tls-verify'
                sh 'kubectl get pods -A --server=$K8S_API_SERVER --token=$K8S_TOKEN --insecure-skip-tls-verify'
            }
        }
    }
}
