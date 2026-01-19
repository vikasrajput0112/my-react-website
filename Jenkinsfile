pipeline {
    agent any

    environment {
        REGISTRY        = "ghcr.io"
        IMAGE_NAME      = "ghcr.io/vikasrajput0112/my-react-website"
        CONTAINER_NAME  = "my-react-container"
        HOST_PORT       = "8083"
    }

    stages {

        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Login to GHCR') {
            steps {
                withCredentials([string(credentialsId: 'ghcr-token', variable: 'GITHUB_TOKEN')]) {
                    sh '''
                    echo $GITHUB_TOKEN | docker login ghcr.io -u vikasrajput0112 --password-stdin
                    '''
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                sh '''
                docker build -t $IMAGE_NAME:latest .
                '''
            }
        }

        stage('Push Image to GHCR') {
            steps {
                sh '''
                docker push $IMAGE_NAME:latest
                '''
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
                docker image prune -f
                docker builder prune -f
                '''
            }
        }
    }

    post {
        always {
            sh 'docker system df'
        }
    }
}
