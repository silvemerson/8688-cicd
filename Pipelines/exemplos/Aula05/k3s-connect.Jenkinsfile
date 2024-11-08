pipeline {
    agent any
    
    enviroment {
        K8S_TOKEN = credentials('K8S_TOKEN')
        K8S_API_SERVER = "https://104.154.216.49:6443"
    }
    
    steges {
        stage('Testando conexão ao Cluster K3s'){
            steps{
                sh 'kubectl get nodes --server=$K8S_API_SERVER --token=K8S_TOKEN --insegure-skip-tls-verify'
                sh 'kubectl get pods -A --server=$K8S_API_SERVER --token=K8S_TOKEN --insegure-skip-tls-verify'
            }
        }
    }
}