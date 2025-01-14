import Image from 'next/image'
import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'

// You'll need to replace this with your actual image path
const profileImageUrl = '/profile.png'

const projects = [
  {
    title: 'AWS Migration Project',
    description: 'Migrated from Console as Code to Infrastructure as Code with AWS CDK TypeScript',
    link: 'https://github.com/yourusername/lambda-optimizer'
  },
  {
    title: 'Multi-Cloud Deployment Pipeline',
    description: 'Created a CI/CD pipeline for deploying applications across multiple cloud providers.',
    link: 'https://github.com/yourusername/multi-cloud-pipeline'
  },
  {
    title: 'Kubernetes Cluster Autoscaler',
    description: 'Implemented an intelligent autoscaling solution for Kubernetes clusters on GCP.',
    link: 'https://github.com/yourusername/k8s-autoscaler'
  },
  {
    title: 'Serverless Data Processing',
    description: 'Built a serverless architecture for real-time data processing using Azure Functions.',
    link: 'https://github.com/yourusername/serverless-data-processor'
  }
]

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center">
          <Image
            src={profileImageUrl}
            alt="Your Name"
            width={150}
            height={150}
            className="mx-auto rounded-full"
          />
          <h1 className="mt-4 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Soleyman
          </h1>
          <p className="mt-2 text-xl text-gray-600">
            AWS AI Cloud Engineer
          </p>
          <div className="mt-4 flex justify-center space-x-4">
            <Link href="https://github.com" className="text-gray-600 hover:text-gray-900">
              <Github className="w-6 h-6" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://www.linkedin.com/in/soleyman-shahir-702a24b8/" className="text-gray-600 hover:text-gray-900">
              <Linkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="mailto:hello@soleymanshahir.com" className="text-gray-600 hover:text-gray-900">
              <Mail className="w-6 h-6" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900">About Me</h2>
          <p className="mt-2 text-gray-600">
            AWS Cloud Engineer with strong experience in IaC, CICD and Cloud Securityy.

            I specialise in building scalable, available, and AI powered Cloud Platforms. 
          </p>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900">Projects</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {projects.map((project, index) => (
              <div key={index} className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-gray-900">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    {project.description}
                  </p>
                  <div className="mt-4">
                    <Link
                      href={project.link}
                      className="text-sm font-medium text-blue-600 hover:text-blue-500"
                    >
                      View Project
                      <span aria-hidden="true"> &rarr;</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

