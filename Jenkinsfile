pipeline {
  agent any

  environment {
    IMAGE_NAME = 'typing-speed-game'
    CONTAINER_PORT = '8080'
  }

  stages {
    stage('Clone Repository') {
    steps {
        git branch: 'main', url: 'https://github.com/MadiniHarshitha/typing-speed-game.git'
    }
}

    }

    stage('Build Docker Image') {
      steps {
        script {
          docker.build("${IMAGE_NAME}")
        }
      }
    }

    stage('Run Container') {
      steps {
        script {
          sh "docker rm -f ${IMAGE_NAME} || true"
          sh "docker run -d --name ${IMAGE_NAME} -p ${CONTAINER_PORT}:80 ${IMAGE_NAME}"
        }
      }
    }
  }

  post {
    success {
      echo "🎉 Typing Speed Game deployed successfully at http://localhost:${CONTAINER_PORT}"
    }
    failure {
      echo "❌ Deployment failed. Check logs for details."
    }
  }
}  
