pipeline {
    agent any

    environment {
        REGISTRY       = "ghcr.io"
        IMAGE_REPO     = "vikasrajput0112/my-react-website"
        IMAGE_TAG      = "build-${BUILD_NUMBER}"
        K8S_NAMESPACE  = "test-website"
        GH_API         = "https://api.github.com"
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

        stage('Cleanup Old Images in GHCR (Keep Last 9)') {
            steps {
                withCredentials([string(credentialsId: 'ghcr-token', variable: 'GITHUB_TOKEN')]) {
                    sh '''
                    echo "Cleaning old images from GHCR (keeping last 9)..."

                    IMAGE_NAME="my-react-website"
                    OWNER="vikasrajput0112"

                    # Get all image versions (sorted newest first)
                    versions=$(curl -s -H "Authorization: Bearer $GITHUB_TOKEN" \
                        -H "Accept: application/vnd.github+json" \
                        ${GH_API}/users/${OWNER}/packages/container/${IMAGE_NAME}/versions \
                        | jq -r 'sort_by(.created_at) | reverse | .[].id')

                    count=0
                    for id in $versions; do
                        count=$((count+1))
                        if [ $count -gt 9 ]; then
                            echo "Deleting image version ID: $id"
                            curl -s -X DELETE \
                                -H "Authorization: Bearer $GITHUB_TOKEN" \
                                -H "Accept: application/vnd.github+json" \
                                ${GH_API}/users/${OWNER}/packages/container/${IMAGE_NAME}/versions/$id
                        fi
                    done
                    '''
                }
            }
        }
/*
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
        */

        stage('Cleanup Local Docker Cache') {
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
            echo "✅ Deployed successfully & old GHCR images cleaned"
        }
    }
}
