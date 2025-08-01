pipeline {
  agent any

  environment {
    IMAGE = "madhukar15/hello-world"
    TAG = "${BUILD_NUMBER}"
    DOCKERHUB_CREDENTIALS=credentials('Dockerhub')
  }

  stages {
    stage('Build Docker Image') {
      steps {
        echo "🛠️ Building Docker image: $IMAGE:$TAG"
        sh 'docker build -t $IMAGE:$TAG .'
      }
    }

    stage('Login') {

			steps {
                echo "🔐 Logging into DockerHub with provided credentials"
				sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
			}
		}
    stage('Push to DockerHub') {
      steps {     
            echo "📦 Pushing image to DockerHub: $IMAGE:$TAG"   
            sh 'docker push $IMAGE:$TAG'
         
        }
      }
    }
  }
}
