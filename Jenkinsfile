pipeline {
  agent any
  stages {
    stage('Detener contenedores'){
      steps{
        sh 'sudo docker stop $(sudo docker ps -aq)'
      }
    }
    stage('Clonar repositorio git') {
      steps {
        git branch: 'main', url: 'https://github.com/Dado00/DevOpsDocker.git'
      }
    }
    stage('Instalar npm i') {
      steps {
        sh 'npm install'
      }
    }
    stage('Deplegar con Docker') {
      steps {
        sh "sudo docker build -t sicei-${env.BRANCH_NAME}:1.0.0-${env.BUILD_NUMBER} ."
        sh "sudo docker run -p 5000:8080 sicei-${env.BRANCH_NAME}:1.0.0-${env.BUILD_NUMBER}"
      }
    }
  }
}