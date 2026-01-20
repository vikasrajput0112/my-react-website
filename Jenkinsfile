pipeline {
    agent any

    options {
        skipDefaultCheckout(true)
    }

    environment {
        REGISTRY   = "ghcr.io"
        IMAGE_REPO = "vikasrajput0112/my-react-website"
        IMAGE_TAG  = "build-${BUILD_NUMBER}"
        BRANCH     = "main"
    }

    stages {

        stage('Checkout main branch') {
            steps {
                checkout([
                    $class: 'GitSCM',
                    branches: [[name: "*/${BRANCH}"]],
                    userRemoteConfigs: [[
                        url: 'https://github.com/vikasrajput0112/my-react-website.git'
                    ]]
                ])
            }
        }

        stage('Login to GHCR') {
            steps {
                withCredentials([
                    string(credentialsId: 'ghcr-token', variable: 'GITHUB_TOKEN')
                ]) {
                    sh '''
                        echo "$GITHUB_TOKEN" | docker login ghcr.io \
                            -u vikasrajput0112 \
                            --password-stdin
                    '''
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                sh '''
                    docker build \
                        -t ${REGISTRY}/${IMAGE_REPO}:${IMAGE_TAG} .
                '''
            }
        }

        stage('Push Docker Image') {
            steps {
                sh '''
                    docker push \
                        ${REGISTRY}/${IMAGE_REPO}:${IMAGE_TAG}
                '''
            }
        }

       stage('Update Image Tag in Git (GitOps)') {
    steps {
        withCredentials([
            string(credentialsId: 'ghcr-token', variable: 'GITHUB_TOKEN')
        ]) {
            sh '''
                git checkout -B main origin/main

                sed -i "s|image: .*my-react-website:.*|image: ghcr.io/vikasrajput0112/my-react-website:${IMAGE_TAG}|g" \
                    k8s/deployment.yaml

                echo "Updated image reference:"
                grep image: k8s/deployment.yaml

                git config user.name "jenkins"
                git config user.email "jenkins@ci.local"

                git add k8s/deployment.yaml
                git commit -m "Update image tag to ${IMAGE_TAG}"

                git push https://${GITHUB_TOKEN}@github.com/vikasrajput0112/my-react-website.git main
            '''
        }
    }
}


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
        success {
            echo "✅ Image pushed, Git updated, Argo CD will sync automatically"
        }
    }
}
