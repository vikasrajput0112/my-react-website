pipeline {
    agent any

    environment {
        REGISTRY      = "ghcr.io"
        IMAGE_REPO    = "vikasrajput0112/my-react-website"
        IMAGE_TAG     = "build-${BUILD_NUMBER}"
        K8S_NAMESPACE = "test-website"
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
                docker build -t ${REGISTRY}/${IMAGE_REPO}:${IMAGE_TAG} .
                '''
            }
        }

        stage('Push Image to GHCR') {
            steps {
                sh '''
                docker push ${REGISTRY}/${IMAGE_REPO}:${IMAGE_TAG}
                '''
            }
        }

        stage('Update Kubernetes Deployment') {
            steps {
                sh '''
                sed -i "s|IMAGE_TAG|${IMAGE_TAG}|g" k8s/deployment.yaml
                '''
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh '''
                kubectl apply -f k8s/deployment.yaml
                kubectl apply -f k8s/service.yaml
                '''
            }
        }

        stage('Cleanup Local Docker Images (Keep last 2)') {
            steps {
                sh '''
                echo "Cleaning local Docker images (keeping last 2)..."

                docker images ${REGISTRY}/${IMAGE_REPO} \
                  --format "{{.ID}} {{.CreatedAt}}" \
                | sort -rk2 \
                | awk 'NR>2 {print $1}' \
                | xargs -r docker rmi -f

                docker image prune -f
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
        success {
            echo "✅ Image deployed and old local images cleaned"
        }
    }
}
