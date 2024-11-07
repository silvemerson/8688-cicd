#  8688 - Repositório das Aulas

## whaomi

**Emerson Silva**

Atuo como DevOps Engineer,  possuo experiência em Administração de Sistemas Open Source, Virtualização, Cloud e ferramentas voltadas a práticas DevOps, com ênfase em IaC e CI/CD. 
Atuando há 6 anos na área de Tecnologia da Informação.
Detenho expertise como instrutor de cursos voltados para Containers, Infraestrutura Ágile CI/CD.

- **Certificações**
  - GitLab Associate
  - Scrum Essentials
  - DevOps Essentials
  - AWS Certified Cloud Practitioner

Mais sobre mim: [https://linktr.ee/silvemerson](https://linktr.ee/silvemerson)


# Apoio para usar durantes as aulas:

- [Docker-compose install](#docker-compose)
- [Inicialização do Gitea](#inicialização-do-gitea)
- [Inicialização do Jenkins](#inicialização-do-jenkins)
- [Instalação do Kubectl manualmente](#instalação-do-kubectl-manualmente-no-container-do-jenkins)

## Docker-compose

Caso não exista na máquina instale:

```apt install docker-compose -y```

## Inicialização do Gitea

```bash

cd gitea

docker-compose up -d

```
## Inicialização do Jenkins


```bash

cd jenkins

docker-compose up -d

```
## Instalação do Kubectl manualmente no Container do Jenkins

```bash

docker exec -it jenkins-ci-server bash

```

```bash
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl" \
&& chmod +x kubectl \
&& mv kubectl /usr/local/bin/
```