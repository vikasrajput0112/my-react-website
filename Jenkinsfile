pipeline {
    agent any

    environment {
        REGISTRY       = "ghcr.io"
        IMAGE_REPO     = "vikasrajput0112/my-react-website"
        IMAGE_TAG      = "build-${BUILD_NUMBER}"
        K8S_NAMESPACE  = "test-website"
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
                    echo "$GITHUB_TOKEN" | docker login ghcr.io -u vikasrajput0112 --password-stdin
                    '''
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                sh '''
                echo "Building image ${REGISTRY}/${IMAGE_REPO}:${IMAGE_TAG}"
                docker build -t ${REGISTRY}/${IMAGE_REPO}:${IMAGE_TAG} .
                '''
            }
        }

        stage('Push Image to GHCR') {
            steps {
                sh '''
                echo "Pushing image to GHCR"
                docker push ${REGISTRY}/${IMAGE_REPO}:${IMAGE_TAG}
                '''
            }
        }

        stage('Update Kubernetes Deployment') {
            steps {
                sh '''
                echo "Updating deployment with new image tag"
                sed -i "s|IMAGE_TAG|${IMAGE_TAG}|g" k8s/deployment.yaml
                '''
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh '''
                echo "Applying Kubernetes manifests"
                kubectl apply -f k8s/deployment.yaml
                kubectl apply -f k8s/service.yaml
                '''
            }
        }

        stage('Cleanup Docker Images') {
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
            sh '''
            echo "Docker disk usage:"
            docker system df
            '''
        }
        success {
            echo "✅ New version deployed successfully to Kubernetes"
        }
    }
}
