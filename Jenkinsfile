pipeline {
    agent any

    environment {
        IMAGE_NAME     = "my-react-website"
        CONTAINER_NAME = "my-react-container"
        HOST_PORT      = "8083"
    }

    stages {

        stage('Build Docker Image') {
            steps {
                sh '''
                echo "Building Docker image..."
                docker build -t $IMAGE_NAME:latest .
                '''
            }
        }

        stage('Stop Old Container') {
            steps {
                sh '''
                echo "Stopping old container if exists..."
                docker stop $CONTAINER_NAME || true
                docker rm $CONTAINER_NAME || true
                '''
            }
        }

        stage('Deploy App') {
            steps {
                sh '''
                echo "Starting new container..."
                docker run -d \
                  --name $CONTAINER_NAME \
                  -p $HOST_PORT:80 \
                  $IMAGE_NAME:latest
                '''
            }
        }

        stage('Prune Dangling Images') {
            steps {
                sh '''
                echo "Removing dangling images..."
                docker image prune -f
                '''
            }
        }

        stage('Clean Docker Build Cache') {
            steps {
                sh '''
                echo "Cleaning Docker build cache..."
                docker builder prune -f
                '''
            }
        }
    }

    post {
        always {
            sh '''
            echo "Docker disk usage after cleanup:"
            docker system df
            '''
        }
    }
}
