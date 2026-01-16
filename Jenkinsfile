pipeline {
    agent any

    environment {
        IMAGE_NAME = "my-react-website"
        CONTAINER_NAME = "my-react-container"
        HOST_PORT = "8083"
    }

    stages {
        stage('Build Docker Image') {
            steps {
                
                sh 'docker build --no-cache -t $IMAGE_NAME:latest .'

            }
        }

        stage('Stop Old Container') {
            steps {
                sh '''
                docker stop $CONTAINER_NAME || true
                docker rm $CONTAINER_NAME || true
                '''
            }
        }

        stage('Deploy App') {
            steps {
                sh '''
                docker run -d                     --name $CONTAINER_NAME                     -p $HOST_PORT:80                     $IMAGE_NAME:latest
                '''
            }
        }
    }
}
