pipeline {
    agent any
    
    options {
        timeout(time: 5, unit: 'SECONDS')
        timestamps()
    }
    environment{
        DIR_REPO="repo"
        LOCAL_PATH=pwd()

    }
    parameters{
        choice(name: 'ENVIRONMENT', choices:['DEV','PROD','HOMOLOG'], description: 'Escolha um ambiente para executar a pipeline')
        string(name: 'ARQUIVO', defaultValue: 'arquivo.txt', description: 'Nome do arquivo a se criar')
        text(name: 'CONTEUDO', defaultValue: '', description: 'Insira o conteudo do arquivo')
        booleanParam(name: 'CRIAR', defaultValue: true, description: 'Criar ou não o Arquivo?')
    }
    
    
    stages{
        stage('Lista de váriaveis de ambiente'){
            steps{
                echo "DIR_REPO = ${DIR_REPO}"
                echo "LOCAL_PATH = ${LOCAL_PATH}"
            }
        }
        stage('Parametro de Arquivo'){
            steps{
                echo "Arquivo a ser crado: ${params.ARQUIVO}"
                echo "Conteudo do arquivo: ${params.CONTEUDO}"
            }
        }
        
    }
    post{
        always{
            echo "Pipeline Finalizada"
        }
        failure{
            echo "Pipeline foi finalizada com falha"
        }
        success {
            echo "Pipeline foi finalizada com Sucesso"
        }
    }
}